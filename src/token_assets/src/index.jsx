import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from '@dfinity/auth-client';

const init = async () => {
  const auth = await AuthClient.create();

  if (auth.isAuthenticated()) {
    handleAuth(auth);
  }
  else{
    await auth.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => {
        handleAuth(auth);
      }
    });
  }
}

async function handleAuth(auth) {
  ReactDOM.render(<App />, document.getElementById("root"));
}

init();


