import { useState } from "react";

import { WalletIcon } from "@heroicons/react/24/outline";

function Connect() {
  const [isConnected, setIsConnected] = useState(false)
  return (
    <div>
      <div className="text-center">

        {
          isConnected ? (
            <>
              <button onClick={() => setIsConnected(!isConnected)} className="btn-secondary">
                <WalletIcon className='text-white w-6 ' />
                <p>Disconnect Wallet</p>
              </button>
            </>
          ) :
            (
              <>
                <button onClick={() => setIsConnected(!isConnected)} className="btn-outline">
                  <WalletIcon className='text-secondary w-6 ' />
                  <p>Connect Wallet</p>
                </button>
              
              </>
            )
        }

      </div>
    </div>
  )
}

export default Connect