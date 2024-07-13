const axios = require('axios');
const FormData = require('form-data');

const blockscoutAPI = 'https://explorer.helium.fhenix.zone/api?module=contract&action=verifysourcecode';

// Funzione per verificare uno smart contract
async function verifyContract(contractAddress, sourceCode, compilerVersion, contractName) {
  const form = new FormData();
  form.append('contractaddress', contractAddress);
  form.append('sourceCode', sourceCode);
  form.append('contractname', contractName);
  form.append('codeformat', 'solidity-single-file');
  form.append('compilerversion', compilerVersion);
  form.append('optimizationUsed', '1');
  form.append('runs', '200');
  form.append('evmversion', 'london');
  form.append('constructorArguements', '');
  form.append('licenseType', '0'); // Questo valore può essere modificato in base alla licenza utilizzata

  try {
    const response = await axios.post(blockscoutAPI, form, {
      headers: {
        ...form.getHeaders()
      }
    });

    if (response.data.status === '1') {
      console.log("Verifica del Contratto Avvenuta con Successo:", response.data.result);
    } else {
      console.log("Errore nella Verifica del Contratto:", response.data.message);
    }
  } catch (error) {
    console.error("Errore:", error.response ? error.response.data : error.message);
  }
}

// Sostituisci con i dettagli reali del contratto
const contractAddress = '0x85cccd274bcc132bbe26fa050eb6eaaed018fa94';
const sourceCode = `// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {

    uint256 number;

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        number = num;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}`;
const compilerVersion = 'v0.8.26+commit.8a97fa7a'; // Usa la versione corretta del compilatore Solidity
const contractName = 'Storage';

verifyContract(contractAddress, sourceCode, compilerVersion, contractName);
