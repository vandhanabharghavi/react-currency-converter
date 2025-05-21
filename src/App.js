import { useState } from 'react';
import './App.css';

function App() {
  const[amount,setAmount] = useState('');
  const[fromCurrency,setFromCurrency] = useState('USD');
  const[toCurrency,setToCurrency] = useState('INR');
  const[result,setResult] = useState(null);
  const exchangeRates = {
    USD : {INR:83.2,EUR:0.92},
    INR : {USD:0.0012,EUR:0.011},
    EUR : {INR:90.5,USD:1.09}
  }
  const convertCurrency=()=>{
    if(!amount || isNaN(amount)){
      alert("Please enter the Valid Number");
      return;
    }
    const rate = exchangeRates[fromCurrency][toCurrency];
    if(rate){
      setResult((amount*rate).toFixed(2));
    }else{
      setResult("Conversion not available");
    }
  }
  return (
    <div className="container">
      <h2>💱 Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="dropdowns">
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
        <span>➡️</span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {result && <h3>Result: {toCurrency} {result}</h3>}
    </div>
  );
}

export default App;
