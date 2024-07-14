// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.25;

import { FHE, ebool, euint8, euint32, inEuint128, euint128, eaddress, inEaddress, inEuint8, inEuint32} from "@fhenixprotocol/contracts/FHE.sol";
import { Permissioned, Permission } from "@fhenixprotocol/contracts/access/Permission.sol";
import "./IFHERC20.sol";
import "./IFhellow.sol";

contract Fhellow is Permissioned,  IFhellow {
    address eUSDC;

    mapping(uint=>FileInfo) public s_fileInfos;
    mapping(uint=>mapping(address=>euint8)) private s_eBalances;
    uint128 internal itemCounter;
    
    constructor(address _eUSDC){
        eUSDC = _eUSDC;
    }

    modifier onlyTokenOwner(uint tokenId){
        // check that balance is greater than 0
        ebool eBalanceGT0 = FHE.gt(s_eBalances[tokenId][msg.sender], FHE.asEuint8(0));
        require(FHE.decrypt(eBalanceGT0), "Gated");
        _;
    }

    function createId(
        inEuint128 memory decryptionKey,
        inEuint32 memory maxSupply,
        uint64 price, 
        string memory CID,
        string memory title, 
        string memory label
    ) public virtual {
        ++itemCounter;
        FileInfo memory info = FileInfo({
            maxSupply: FHE.asEuint32(maxSupply),
            currentSupply: FHE.asEuint32(maxSupply), 
            price: price,
            creator: msg.sender,
            decryptionKey: FHE.asEuint128(decryptionKey),
            title: title,
            CID: CID
        });
        s_fileInfos[itemCounter] = info;

        emit FileDeclared(
            msg.sender, 
            itemCounter,
            CID,
            price,
            title, 
            label
        );
    }

    function getSeal(
        euint128 encValue /*,
        Permission memory permission*/
    ) internal pure returns (string memory seal){
        //seal = FHE.sealoutput(encValue, permission.publicKey);
        
    }   


    function buyWithObfuscation(uint8[] memory id_subset, inEuint8[] memory encValues) public {
        require(id_subset.length == encValues.length, "Array mismatch");
        uint64[] memory prices = new uint64[](encValues.length);

        euint8 aggregate = FHE.asEuint8(0);
        for (uint i; i < encValues.length; ++i){
            // add all the values from the obfuscation subset
            aggregate = FHE.add(aggregate, FHE.asEuint8(encValues[i]));
            prices[i] = s_fileInfos[id_subset[i]].price;
        }
        
        // after looping we can disclose and check aggregate is equal to one.
        // if value isnt equal to 1, then we can assume cheat is being attempted.
        // thus reverting. We don't need to hide the revert in that case
        ebool eCheated = FHE.ne(aggregate, FHE.asEuint8(1));
        bool cheated = FHE.decrypt(eCheated);
        require(!cheated, "You cheated");
        for (uint i; i < encValues.length; ++i){
            // add encValue to the balance. Keep in mind that adding 0 result in a new cyphertext
            s_eBalances[id_subset[i]][msg.sender] = FHE.add(s_eBalances[id_subset[i]][msg.sender], FHE.asEuint8(encValues[i]));
            ebool isZero = FHE.eq(FHE.asEuint8(encValues[i]), FHE.asEuint8(0));
            euint32 amountToTransfer = FHE.select(isZero, FHE.asEuint32(prices[i]), FHE.asEuint32(0));
            IFHERC20(eUSDC).transferFromEncrypted(msg.sender, s_fileInfos[id_subset[i]].creator, amountToTransfer);
        }

        emit KeyAquired(msg.sender);
    }
  
    //////////////////////////
    //   VIEW FUNCTION     //
    /////////////////////////

    // naive implelemtation. Todo Add permit wwwww
    function getKey(uint itemId) public view /*onlyTokenOwner(itemId)*/ returns (uint128 value) {
        value = FHE.decrypt(s_fileInfos[itemId].decryptionKey);
    }
    function getBalance(uint itemId) public view returns (uint8 value){
        value = FHE.decrypt(s_eBalances[itemId][msg.sender]);
    }

    // function testAggregate(inEuint8[] memory encValues) public view  returns (uint8 agg){
    //     euint8 aggregate = FHE.asEuint8(0);
    //     for (uint i; i < encValues.length; ++i){
    //         add all the values from the obfuscation subset
    //         aggregate = FHE.add(aggregate, FHE.asEuint8(encValues[i]));
    //     }
    //     agg = FHE.decrypt(aggregate);
    // }
}


