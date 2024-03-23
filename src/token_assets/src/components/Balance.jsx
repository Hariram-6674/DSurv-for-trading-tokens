import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Balance() {
  const [bal, setbal] = useState("");
  const [urbal, seturbal] = useState("");
  const [symbol, setsymbol] = useState("");
  const [isHidden,setishidden] =useState(true);

  async function handleClick() {
    // console.log("Balance Button Clicked");
    const principal = Principal.fromText(bal);
    const temp = await token.Balance(principal);
    seturbal(temp.toLocaleString());
    setsymbol(await token.getSymbol());
    setishidden(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={bal}
          onChange={(e) => setbal(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {urbal} {symbol}.</p>
    </div>
  );
}

export default Balance;
