import { ComponentDetailProps } from "./types";

const ComponentDetail = ({ titleComponent }: ComponentDetailProps) => {
  //TODO: O Component pode receber diretamente daqui os dados para preencher o detalhe
  return (
    <div className="">
      <div className="flex items-center gap-3 p-3">
        <h4 className="font-semibold text-lg leading-7">{titleComponent}</h4>
        {/* TODO: Condicional SVG */}
        <img src="/green-circle.svg" width="8" />

        {/* <img
            src="/red-circle.svg"
            width="8"
          />

        <img
            src="/bolt.svg"
            width="8"
          /> */}
      </div>
      <div className="flex gap-2 border border-b-0 border-l-0 border-r-0 rounded-sm p-3">
        <div className="border rounded w-[336px] min-h-[226px]">
          <img src="/image-test.svg" loading="lazy" />
        </div>
        <div className="flex flex-col flex-1 justify-center gap-5 ml-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-base leading-6">
              Tipo de equipamento
            </h4>
            {/* TODO: Integração nome equipamento */}
            <h4 className="text-gray-500 text-base font-normal leading-6">
              Motor Elétrico (Trifásico)
            </h4>
          </div>
          <hr className="bg-blue-50 border" />
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-base leading-6">Responsáveis</h4>
            {/* //TODO: Primeira letra do responsavel e integração do nome */}
            <h4 className="text-gray-500 text-base font-normal leading-6">
              E Elétrico
            </h4>
          </div>
        </div>
      </div>
      <hr className="bg-blue-50 border ml-3 mr-3 mt-4" />
      <div className="flex p-3 space-x-48 mt-4">
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-base leading-6">Sensor</h4>
          <div className="flex items-center gap-2">
            <img src="/wifi.svg" />
            {/* TODO: Integração nome SENSOR */}
            <h4 className="text-gray-500 text-base font-normal leading-6">
              TFV655
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-base leading-6">Receptor</h4>
          <div className="flex items-center gap-2">
            <img src="/modem.svg" />
            {/* TODO: Integração Receptor */}
            <h4 className="text-gray-500 text-base font-normal leading-6">
              YTF265
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
