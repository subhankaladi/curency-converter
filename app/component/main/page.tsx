"use client"

import React, { useState, useEffect } from 'react';
import './main.css'
import axios from 'axios'

const countryList = {
    AED: "AE",AFN: "AF",XCD: "AG",ALL: "AL",AMD: "AM",ANG: "AN",AOA: "AO",AQD: "AQ",ARS: "AR",AUD: "AU",AZN: "AZ",BAM: "BA",BBD: "BB",BDT: "BD",XOF: "BE",BGN: "BG",BHD: "BH",BIF: "BI",BMD: "BM",BND: "BN",BOB: "BO",BRL: "BR",BSD: "BS",NOK: "BV",BWP: "BW",BYR: "BY",BZD: "BZ",CAD: "CA",CDF: "CD",XAF: "CF",CHF: "CH",CLP: "CL",CNY: "CN",COP: "CO",CRC: "CR",CUP: "CU",CVE: "CV",CYP: "CY",CZK: "CZ",DJF: "DJ",DKK: "DK",DOP: "DO",DZD: "DZ",ECS: "EC",EEK: "EE",EGP: "EG",ETB: "ET",EUR: "FR",FJD: "FJ",FKP: "FK",GBP: "GB",GEL: "GE",GGP: "GG",GHS: "GH",GIP: "GI",GMD: "GM",GNF: "GN",GTQ: "GT",GYD: "GY",HKD: "HK",HNL: "HN",HRK: "HR",HTG: "HT",HUF: "HU",IDR: "ID",ILS: "IL",INR: "IN",IQD: "IQ",IRR: "IR",ISK: "IS",JMD: "JM",JOD: "JO",JPY: "JP",KES: "KE",KGS: "KG",KHR: "KH",KMF: "KM",KPW: "KP",KRW: "KR",KWD: "KW",KYD: "KY",KZT: "KZ",LAK: "LA",LBP: "LB",LKR: "LK",LRD: "LR",LSL: "LS",LTL: "LT",LVL: "LV",LYD: "LY",MAD: "MA",MDL: "MD",MGA: "MG",MKD: "MK",MMK: "MM",MNT: "MN",MOP: "MO",MRO: "MR",MTL: "MT",MUR: "MU",MVR: "MV",MWK: "MW",MXN: "MX",MYR: "MY",MZN: "MZ",NAD: "NA",XPF: "NC",NGN: "NG",NIO: "NI",NPR: "NP",NZD: "NZ",OMR: "OM",PAB: "PA",PEN: "PE",PGK: "PG",PHP: "PH",PKR: "PK",PLN: "PL",PYG: "PY",QAR: "QA",RON: "RO",RSD: "RS",RUB: "RU",RWF: "RW",SAR: "SA",SBD: "SB",SCR: "SC",SDG: "SD",SEK: "SE",SGD: "SG",SKK: "SK",SLL: "SL",SOS: "SO",SRD: "SR",STD: "ST",SVC: "SV",SYP: "SY",SZL: "SZ",THB: "TH",TJS: "TJ",TMT: "TM",TND: "TN",TOP: "TO",TRY: "TR",TTD: "TT",TWD: "TW",TZS: "TZ",UAH: "UA",UGX: "UG",USD: "US",UYU: "UY",UZS: "UZ",VEF: "VE",VND: "VN",VUV: "VU",YER: "YE",ZAR: "ZA",ZMK: "ZM",ZWD: "ZW",
  };
  const Main = () => {
    const [amount, setAmount] = useState(100);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("PKR");
    const [convertedAmount, setConvertedAmount] = useState<string | null>(null); // <-- Fix applied here
  
    useEffect(() => {
      // Reset converted amount when currencies or amount change
      setConvertedAmount(null);
    }, [fromCurrency, toCurrency, amount]); 
  
    const handleConvert = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const rate = response.data.rates[toCurrency];
        const result = (amount * rate).toFixed(2);
        setConvertedAmount(result); // <-- Type is now correctly inferred
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
  
    return (
      
      <div className='main-div'>
        <div className="container">
          <div className="amount">
            <h2>Amount</h2>
            <input
              className='amt-input'
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="from">
  <h2>From</h2>
  <div className="select-container">
    <img
      src={`https://flagsapi.com/${countryList[fromCurrency as keyof typeof countryList]}/flat/64.png`}
      alt="from flag"
    />
    <select
      name="from"
      id="from"
      value={fromCurrency}
      onChange={(e) => setFromCurrency(e.target.value as keyof typeof countryList)}
    >
      {Object.keys(countryList).map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  </div>
</div>

<div className="to">
  <h2>To</h2>
  <div className="select-container">
    <img
      src={`https://flagsapi.com/${countryList[toCurrency as keyof typeof countryList]}/flat/64.png`}
      alt="to flag"
    />
    <select
      name="to"
      id="to"
      value={toCurrency}
      onChange={(e) => setToCurrency(e.target.value as keyof typeof countryList)}
    >
      {Object.keys(countryList).map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  </div>
</div>

        </div>
  
        <div className="text-box">
          <a href="#" className="btn btn-white btn-animated" onClick={handleConvert}>
            Convert
          </a>
        </div>
  
        {convertedAmount && (
          <div className="result">
            <h3>Converted Amount: {convertedAmount} {toCurrency}</h3>
          </div>
        )}
      </div>
    );
  }
  
  export default Main;