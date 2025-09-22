// src/App.js
import React, { useEffect, useState } from "react";
import Web3 from "web3";

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  // Initialize Web3 and get user's account
  useEffect(() => {
    async function initWeb3() {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3Instance.eth.getAccounts();
          setWeb3(web3Instance);
          setAccount(accounts[0]);
        } catch (error) {
          alert("User denied wallet connection");
        }
      } else {
        alert("Please install MetaMask!");
      }
    }
    initWeb3();
  }, []);

  // Placeholder function to add a health record
  const addHealthRecord = async () => {
    alert("Add health record function to be implemented");
  };

  // Placeholder function to view health records
  const viewHealthRecords = async () => {
    alert("View health records function to be implemented");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Decentralised Health Records Application</h2>
      <div>
        <strong>Wallet Status: </strong>
        {account ? (
          <span>Connected: {account}</span>
        ) : (
          <span>Not connected</span>
        )}
      </div>

      <hr />

      <div>
        <button onClick={addHealthRecord} disabled={!account}>
          Add Health Record
        </button>
      </div>
      <br />
      <div>
        <button onClick={viewHealthRecords} disabled={!account}>
          View Health Records
        </button>
      </div>
    </div>
  );
}

export default App;
