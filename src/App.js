import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


export default function App() {

  const [walletAddress, setWalletAddress] = useState('');

  async function connectToMetamask() {
    
    if(window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch(e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={connectToMetamask}>
        Connect
      </button>
      <h3>Wallet Address: {walletAddress}</h3>
    </div>
  );
  }