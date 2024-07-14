// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.25;
import { FHE, ebool, euint8, euint32, inEuint128, euint128, eaddress, inEaddress, inEuint8, inEuint32} from "@fhenixprotocol/contracts/FHE.sol";

interface IFhellow{

    event FileDeclared(address indexed creator, uint tokenId,  string CID,  uint etherPrice, string name, string label);
    event KeyAquired(address indexed owner /*, tokenid encrypted under self pvk*/);

    struct FileInfo{
        euint32 maxSupply;     
        euint32 currentSupply;
        uint64 price; // in eWUSDC;
        address creator;
        euint128 decryptionKey;
        string title;
        string CID;
    }
}