/* import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button, Col, Container, Row, Table, InputGroup, FormControl } from 'react-bootstrap';
import { useRouter } from 'next/router';

const contractABI = [
  {
   "inputs": [],
   "stateMutability": "nonpayable",
   "type": "constructor"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "address",
     "name": "creator",
     "type": "address"
    },
    {
     "indexed": false,
     "internalType": "uint256",
     "name": "tokenId",
     "type": "uint256"
    },
    {
     "indexed": false,
     "internalType": "string",
     "name": "CID",
     "type": "string"
    },
    {
     "indexed": false,
     "internalType": "uint256",
     "name": "price",
     "type": "uint256"
    },
    {
     "indexed": false,
     "internalType": "string",
     "name": "name",
     "type": "string"
    },
    {
     "indexed": false,
     "internalType": "string",
     "name": "label",
     "type": "string"
    }
   ],
   "name": "FileDeclared",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "internalType": "address",
     "name": "owner",
     "type": "address"
    },
    {
     "indexed": false,
     "internalType": "string",
     "name": "privateID",
     "type": "string"
    }
   ],
   "name": "KeyAquired",
   "type": "event"
  }
 ];

const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';

declare var window: Window & typeof globalThis & {
  ethereum: any;
};

type IdCreationEvent = {
  creator: string;
  tokenId: ethers.BigNumberish;
  CID: string;
  etherPrice: ethers.BigNumberish;
  name: string;
  label: string;
};

type KeyAquiredEvent = {
  owner: string;
  tokenId: ethers.BigNumberish;
  CID: string;
};

const User = () => {
  const [userEvents, setUserEvents] = useState<KeyAquiredEvent[]>([]);
  const [searchAddress, setSearchAddress] = useState('');
  const [searchResults, setSearchResults] = useState<IdCreationEvent[]>([]);
  const router = useRouter();
  const { address } = router.query;

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        if (!window.ethereum) throw new Error('No crypto wallet found. Please install it.');

        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);

        const allEvents = await contract.queryFilter('KeyAquired');
        const accounts = await provider.listAccounts();
        const currentUserAccount = accounts[0].address;

        const userEvents = allEvents.filter((event: any) => event.args.owner.toLowerCase() === currentUserAccount.toLowerCase());

        setUserEvents(userEvents);
      } catch (error) {
        console.error('Error fetching user events:', error);
      }
    };

    if (address) {
      fetchUserEvents();
    }
  }, [address]);

  const handleSearch = async () => {
    try {
      if (!window.ethereum) throw new Error('No crypto wallet found. Please install it.');

      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, contractABI, provider);

      const allEvents = await contract.queryFilter('IdCreation');
      const results = allEvents.filter((event: any) => event.args.creator.toLowerCase() === searchAddress.toLowerCase());

      setSearchResults(results);
    } catch (error) {
      console.error('Error searching user events:', error);
    }
  };

  const goToIPFS = (cid: string) => {
    window.open(`https://ipfs.io/ipfs/${cid}`, '_blank');
  };

  const handleMint = async (tokenId: ethers.BigNumberish, price: ethers.BigNumberish) => {
    try {
      if (!window.ethereum) throw new Error('No crypto wallet found. Please install it.');

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      const transaction = await contract.mint(tokenId, {
        value: price
      });

      await transaction.wait();

      console.log(`Token ${tokenId} minted successfully!`);
    } catch (error) {
      console.error('Error minting token:', error);
    }
  };

  const handleProcessSealArray = async (tokenId: ethers.BigNumber) => {
    try {
      const reconstructedPassword = await ProcessSealArray(tokenId);
      console.log("Reconstructed Password:", reconstructedPassword);
    } catch (error) {
      console.error('Error processing seal array:', error);
    }
  };

  return (
    <Container className='mt-3'>
      <Row className='mt-3'>
        <Col>
          <Row>
            <Col>
              <div>
                <h2>Search for Content</h2>
                <InputGroup>
                  <FormControl
                    type="text"
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
 */