export const fhellow_address = "0x7D8d1E7Afa1Ba7512d84A3a12667f1E832Dc78A8";

export const fhellow_abi = [
	{
		"inputs": [
			{
				"internalType": "uint8[]",
				"name": "id_subset",
				"type": "uint8[]"
			},
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"internalType": "struct inEuint8[]",
				"name": "encValues",
				"type": "tuple[]"
			}
		],
		"name": "buyWithObfuscation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"internalType": "struct inEuint128",
				"name": "decryptionKey",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"internalType": "struct inEuint32",
				"name": "maxSupply",
				"type": "tuple"
			},
			{
				"internalType": "uint64",
				"name": "price",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "CID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "label",
				"type": "string"
			}
		],
		"name": "createId",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_eUSDC",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "InvalidShortString",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SignerNotMessageSender",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "SignerNotOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"name": "StringTooLong",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "EIP712DomainChanged",
		"type": "event"
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
				"name": "etherPrice",
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
			}
		],
		"name": "KeyAquired",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "eip712Domain",
		"outputs": [
			{
				"internalType": "bytes1",
				"name": "fields",
				"type": "bytes1"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "version",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "chainId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "verifyingContract",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "salt",
				"type": "bytes32"
			},
			{
				"internalType": "uint256[]",
				"name": "extensions",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "value",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "getKey",
		"outputs": [
			{
				"internalType": "uint128",
				"name": "value",
				"type": "uint128"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_fileInfos",
		"outputs": [
			{
				"internalType": "euint32",
				"name": "maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "euint32",
				"name": "currentSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint64",
				"name": "price",
				"type": "uint64"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "euint128",
				"name": "decryptionKey",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CID",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"internalType": "struct inEuint8[]",
				"name": "encValues",
				"type": "tuple[]"
			}
		],
		"name": "testAggregate",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "agg",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const 