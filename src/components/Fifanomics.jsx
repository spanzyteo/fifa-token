import ronaldo from '../assets/ronaldo2.png'

const Fifanomics = () => {
  return (
    <div className="">
      <h1 className="uppercase font-bold text-5xl text-white text-center mt-16">
        Fifanomics
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center px-2 md:px-16 lg:px-24">
        <div className="py-7 flex flex-col md:flex-row mt-4 md:mt-12 items-center justify-between">
          <img src={ronaldo} alt="ronaldo" className="md:h-[32rem] w-[36rem]" />
        </div>
        {/* <h1 className="uppercase block md:hidden font-bold text-4xl text-white text-center mt-4">
          Fifanomics
        </h1> */}
        <div className="flex flex-col gap-4 mt-16">
          <div className="flex flex-col h-[170px] px-4 md:w-[600px] w-[100%] border border-yellow-400 rounded-3xl gap-2 justify-center">
            <div className="">
              <h1 className="font-semibold md:font-bold uppercase text-3xl md:text-5xl text-white">
                0% TAX
              </h1>
            </div>
            <div className="">
              <p className="text-lg md:text-2xl text-white">
                FIFA Stream operates with a 0% tax policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col h-[170px] px-4 md:w-[600px] w-[100%] border border-yellow-400 rounded-3xl gap-2 justify-center">
            <div className="">
              <h1 className="font-semibold md:font-bold uppercase text-4xl md:text-5xl text-white">
                SECURE CONTRACT
              </h1>
            </div>
            <div className="">
              <p className="text-md md:text-2xl text-white">
                No minting, no whitelist, and a renounced contract ensure the
                integrity of FIFA Stream.
              </p>
            </div>
          </div>
          <div className="flex flex-col h-[170px] px-4 md:w-[600px] w-[100%] border border-yellow-400 rounded-3xl gap-2 justify-center">
            <div className="">
              <h1 className="font-semibold md:font-bold uppercase text-4xl md:text-5xl text-white">
                RUG PROOF
              </h1>
            </div>
            <div className="">
              <p className="text-md md:text-2xl text-white">
                100% of the liquidity pool is locked, guaranteeing security and
                trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fifanomics
