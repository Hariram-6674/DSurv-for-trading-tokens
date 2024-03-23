import React, { useState } from "react";
import { token, canisterId, createActor } from "../../../declarations/token";
import { Principal } from "@dfinity/principal";
import { AuthClient } from '@dfinity/auth-client';

function Transfer() {
  const [toWhom, settowhom] = useState("");
  const [amountTo, setAmountto] = useState("");
  const [isHid, sethid] = useState(true);
  const [message, setMessage] = useState("");
  const [isDis, setDis] = useState(false);
  async function handleClick() {
    sethid(true);
    setDis(true);
    // const auth = await AuthClient.create();
    // const identity = await auth.getIdentity();//uncomment this if deploying live

    // const authCanister = createActor(canisterId, {
    //   agentOptions: {
    //     identity,
    //   }
    // });
    //const result = await authCanister.transfer(Principal.fromText(toWhom), Number(amountTo));
    const result = await token.transfer(Principal.fromText(toWhom), Number(amountTo));
    setMessage(result);
    sethid(false);
    setDis(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={toWhom}
                onChange={(e) => settowhom(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amountTo}
                onChange={(e) => setAmountto(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button disabled={isDis} id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
        <p hidden={isHid}>{message}</p>
      </div>
    </div>
  );
}

export default Transfer;
