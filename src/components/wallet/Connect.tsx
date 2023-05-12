import { useState } from "react";
import { WalletIcon } from "@heroicons/react/24/outline";

import Modal from "../common/ModaCompl";

function Connect() {
  const [isConnected, setIsConnected] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="text-center">

        {
          isConnected ? (
            <>
              <button onClick={() => setIsConnected(!isConnected)} className="btn-secondary w-52">
                <WalletIcon className='text-white w-6 ' />
                <p>Disconnect Wallet</p>
              </button>
            </>
          ) :
            (
              <>
                <button onClick={() => openModal()} className="btn-outline">
                  <WalletIcon className='text-secondary w-6 ' />
                  <p>Connect Wallet</p>
                </button>
              
              </>
            )
        }

      <Modal isOpen={isModalOpen} onClose={closeModal} styling="w-[400px] md:w-[500px]">
        <h2 className="text-xl mb-2 font-bold">Connect your wallet</h2>
        <p className="border-b pb-2">If you don't have a wallet, you can select a provider and create one now.</p>
        <div className="grid grid-cols-2 mt-6">
          <div className="h-16 border-b border-r text-center" >
            <img className="w-24 m-auto" src="/pera.svg" alt="" />
          </div>
          <div className="h-16 border-b  border-l text-center">
            <img className="w-24 m-auto" src="/myalgo.svg" alt="" />
          </div>
          <div className="h-16  border-r border-t">
           <img className="w-36 m-auto pt-5" src="/walletconnect-logo.svg" alt="" />
          </div>
          <div className="h-16 border-l border-t pt-5">
            <p className="font-bold">Algosigner</p>
          </div>

        </div>
      </Modal>

      </div>
    </div>
  )
}

export default Connect