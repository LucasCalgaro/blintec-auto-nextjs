import { carro, moto } from "@/lib/plans";

const PlanCards = ({ plano }: { plano: string }) => {
  return (
    <>
      {plano === "carro" && (
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8 pb-16">
          <div className="flex justify-center items-center p-3 rounded-xl silver-card bg-[#CECECE] shadow-md">
            <div className="flex flex-col items-center justify-start w-full h-full rounded-xl py-16 px-4 uppercase gap-8">
              <h1 className="text-3xl font-bold">Proteção Prata</h1>
              <div className="plan-description flex flex-col items-center justify-start gap-4">
                {carro
                  .filter((item) => item.category === "silver")
                  .map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-3 rounded-xl gold-card bg-[#E6B200] shadow-md">
            <div className="flex flex-col items-center justify-start w-full h-full rounded-xl py-16 px-4 uppercase gap-8">
              <h1 className="text-3xl font-bold">Proteção Ouro</h1>
              <div className="plan-description flex flex-col items-center justify-start gap-4">
                {carro
                  .filter((item) => item.category === "gold")
                  .map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {plano === "moto" && (
        <div className="grid md:w-1/2 w-full md:mx-auto gap-8 mb-10">
          <div className="flex justify-center items-center p-3 rounded-xl gold-card bg-[#E6B200] shadow-md">
            <div className="flex flex-col items-center justify-start w-full h-full rounded-xl py-16 px-4 uppercase gap-8">
              <h1 className="text-3xl font-bold">Proteção Ouro</h1>
              <div className="plan-description flex flex-col items-center justify-start gap-4">
                {moto
                  .filter((item) => item.category === "gold")
                  .map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanCards;
