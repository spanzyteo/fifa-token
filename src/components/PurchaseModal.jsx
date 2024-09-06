import React, { useEffect } from 'react'
import { useSection } from '../Context'
import { MdOutlineCancel } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

const PurchaseModal = () => {
  const { state, dispatch } = useSection()
  const modalPurchase = state.purchaseModal

  useEffect(() => {
    if (modalPurchase) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [modalPurchase])
  return (
    <>
      <AnimatePresence>
        {modalPurchase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-80 z-10 text-white"
          >
            <div className="h-[420px] md:w-[500px] w-[90%] bg-black border border-white rounded-lg flex flex-col relative">
              <div className="h-[35px] w-[35px] absolute top-1 right-1">
                <MdOutlineCancel
                  onClick={() => {
                    dispatch({ type: 'CLOSE_PURCHASE_MODAL' })
                  }}
                  className="h-full w-full cursor-pointer"
                />
              </div>
              <h1 className="text-yellow-400 w-[95%] md:w-[450px] mx-auto mt-10 font-semibol">
                - From your solana wallet browser, goto www.fifastreamdegen.com
              </h1>
              <h1 className="text-yellow-400 w-[95%] md:w-[450px] mx-auto mt-4 font-semibol">
                - Click "BUY NOW" on the homepage.
              </h1>
              <h1 className="text-yellow-400 w-[95%] md:w-[450px] mx-auto mt-4 font-semibol">
                - Connect your wallet by clicking "CONNECT" on Presale page.
              </h1>
              <h1 className="text-yellow-400 w-[95%] md:w-[450px] mx-auto mt-4 font-semibol">
                - Enter the amount of SOL you wish to swap for the $FIFA token.
              </h1>
              <h1 className="text-yellow-400 w-[95%] md:w-[450px] mx-auto mt-4 font-semibol">
                - Click on "BUY $FIFA"
              </h1>
              <h1 className="text-yellow-400 w-[95%] md:w-[450px] mx-auto mt-4 font-semibol">
                - Congratulations your $FIFA Tokens have been purchased
                successfully!
              </h1>
              <h1 className="text-yellow-400 w-[95%] md:w-[450px] mx-auto mt-4 font-semibol">
                - Wait for DEX and CEX Lisitings
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PurchaseModal
