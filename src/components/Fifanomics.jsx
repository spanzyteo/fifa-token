import ronaldo from '../assets/ronaldo2.png'

const Fifanomics = () => {
  return (
    <div className="">
      <h1 className="uppercase hidden md:block font-bold text-4xl text-white text-center mt-16">
        Fifanomics
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-36">
        <div className="py-7 flex flex-col md:flex-row mt-4 md:mt-12 items-center justify-between">
          <img src={ronaldo} alt="ronaldo" className="md:h-[35rem]" />
        </div>
        <h1 className="uppercase block md:hidden font-bold text-4xl text-white text-center mt-4">
          Fifanomics
        </h1>
        <div className="flex flex-col gap-4 mt-16">
          <div className="flex flex-col h-[170px] px-4 md:w-[600px] w-[100%] border border-yellow-400 rounded-3xl gap-2 justify-center">
            <div className="">
              <h1 className="font-bold uppercase text-4xl md:text-5xl text-white">
                0% TAX
              </h1>
            </div>
            <div className="">
              <p className="text-2xl text-white">Fifa likes to pay 0% taxes.</p>
            </div>
          </div>
          <div className="flex flex-col h-[170px] px-4 md:w-[600px] w-[100%] border border-yellow-400 rounded-3xl gap-2 justify-center ">
            <div className="">
              <h1 className="font-bold uppercase text-4xl md:text-5xl text-white">
                CONTRACT IS SAFU
              </h1>
            </div>
            <div className="">
              <p className="text-2xl text-white">
                Fifa likes No mints. No WL. Renounced.
              </p>
            </div>
          </div>
          <div className="flex flex-col h-[170px] px-4 md:w-[600px] w-[100%] border border-yellow-400 rounded-3xl gap-2 justify-center">
            <div className="">
              <h1 className="font-bold uppercase text-4xl md:text-5xl text-white">
                RUG PROOF
              </h1>
            </div>
            <div className="">
              <p className="text-2xl text-white">100% of LP is locked!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fifanomics
