import React, { useState } from "react";
import { token, canisterId, createActor } from "../../../declarations/token";
import { AuthClient } from '@dfinity/auth-client';

function Faucet() {

  const [isDis, setisdis] = useState(false);
  const [mess, setmess] = useState("Gimme gimme");

  async function handleClick(event) {

    // const auth = await AuthClient.create();
    // const identity = await auth.getIdentity();//uncomment this if deploying live

    // const authCanister = createActor(canisterId, {
    //   agentOptions: {
    //     identity,
    //   }
    // });

    setisdis(true);
    //const result = await authCanister.payMon();
    const message = await token.putMon();
    setmess(message);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free AlphaCoin tokens here! Claim 10,000 AlphaCoin to your account.</label>
      <p className="trade-buttons">
        <button disabled={isDis} id="btn-payout" onClick={handleClick}>
          {mess}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
