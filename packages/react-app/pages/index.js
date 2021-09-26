import React from "react";
import { Web3Consumer } from "../helpers/Web3Context";
import { Contract } from "../components";


function Home({ web3 }) {

  console.log(`🗄 web3 context:`, web3);

  return (
    <div className="flex flex-1 flex-col h-screen w-full items-center">
      <div className="text-center" style={{margin:64}}>
        <span>This App is powered by Scaffold-eth & Next.js!</span>
        <br />
        <span>
          Added{" "}
          <a href="https://tailwindcomponents.com/cheatsheet/" target="_blank">
            TailwindCSS
          </a>{" "}
          for easier styling.
        </span>
      </div>
      <div className="text-center">
        <Contract
           name="YourContract"
           signer={web3.userSigner}
           provider={web3.localProvider}
           address={web3.address}
           blockExplorer={web3.blockExplorer}
           contractConfig={web3.contractConfig}
         />
      </div>
    </div>
  );
}

export default Web3Consumer(Home);