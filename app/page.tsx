/* eslint-disable @next/next/no-img-element */
"use client";

import PlanCards from "@/components/plan-cards";
import ProtecoesSlider from "@/components/protecoes-slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { whatsapp } from "@/lib/whatsapp";
import { CheckIcon, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activePlan, setActivePlan] = useState<string>("carro");

  const listaProtecoes = [
    { nome: "Furto/Roubo", imagem: "/images/furto-icon.png" },
    { nome: "Incêndio", imagem: "/images/incendio-icon.png" },
    { nome: "Colisão", imagem: "/images/colisao-icon.png" },
    { nome: "Fenômenos da Natureza", imagem: "/images/fenomenos-da-natureza-icon.png" },
    { nome: "Vidros e\nPeriféricos", imagem: "/images/vidros-icon.png" },
    { nome: "Carro Reserva", imagem: "/images/carro-reserva-icon.png" },
    { nome: "Assistência 24h", imagem: "/images/assistencia-icon.png" },
    { nome: "Guincho", imagem: "/images/guincho-icon.png" },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-[#dddddd] md:bg-[url(/banner768.png)] lg:bg-[url(/banner.png)] bg-cover bg-no-repeat">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-10 lg:px-4 pt-24 pb-24 md:pb-48 md:pt-24 lg:pt-36 lg:pb-56">
          <div className="mr-auto max-w-3xl">
            <div className="flex flex-col md:gap-8 gap-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Toda proteção que precisar para o seu veículo você encontra
                aqui!
              </h1>
              <div>
                <p className="flex sm:flex-row flex-col text-left sm:gap-4 gap-2 mt-6 text-lg text-gray-800 font-bold truncate">
                  <span>Sem Perfil do Condutor</span>
                  <span className="bg-[#5f487b] sm:w-0.5 sm:h-8 w-40 h-0.5"></span>
                  <span>Sem consultar CPF</span>
                </p>
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <a
                    href="#planos"
                    className="flex items-center justify-center bg-[#AF8D1A] w-[300px] h-[60px] text-base font-semibold text-white hover:bg-[#9D7E15] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800"
                  >
                    Nossos Planos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="copywriting-1">
        <div className="max-w-7xl flex md:flex-row flex-col items-center justify-center mx-auto px-4 md:py-28 py-14 gap-8">
          <div className="md:w-[42%]">
            <h2
              className="md:text-right text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              style={{ lineHeight: "115%" }}
            >
              Seja para CARRO ou MOTO, passeio ou trabalho! Temos a melhor
              proteção para seu bem precioso!
            </h2>
          </div>
          <div className="flex justify-center items-center md:w-[2%] w-10/12 ">
            <div className="md:h-[280px] md:w-1.5 w-full h-1.5 bg-[#AF8D1A] rounded-full"></div>
          </div>
          <div className="flex flex-col justify-between md:w-[37%] md:gap-14 gap-6">
            <p className="md:text-left text-center text-xl">
              Assistência 24 horas
            </p>
            <p className="md:text-left text-center text-xl md:w-3/5">
              Sem burocracia. Não pedimos o perfil do condutor, nem consultamos
              o seu CPF
            </p>
            <p className="md:text-left text-center text-xl md:w-3/4">
              Proteção para o veículo, tranquilidade para o proprietário
            </p>
          </div>
        </div>
      </section>

      <ProtecoesSlider data={ listaProtecoes }/>

      <section id="planos" className="bg-[#E6E6E6]">
        <div className="max-w-7xl flex flex-col items-center justify-center mx-auto px-4 md:py-28 py-14 gap-8">
            <ToggleGroup
              type="single"
              value={activePlan}
              onValueChange={setActivePlan}
              className="flex w-50 bg-[#3F3F3F] p-1 rounded-full gap-0"
            >
              <ToggleGroupItem value="carro" className="w-1/2 rounded-full">
                <img
                  src="/images/car-protection.png"
                  alt="Proteção para Carro"
                  className="w-6"
                />{" "}
                Carro
              </ToggleGroupItem>
              <ToggleGroupItem value="moto" className="w-1/2 rounded-full">
                <img
                  src="/images/motocycle-protection.png"
                  alt="Proteção para Moto"
                  className="w-6"
                />{" "}
                Moto
              </ToggleGroupItem>
            </ToggleGroup>
          <PlanCards plano={activePlan} />

          {activePlan === "carro" && (
            <div id="car-plans" className="w-full">
              <div className="w-full">
                <h1 className="text-3xl font-bold">Compare os planos</h1>
                <div
                  id="car-plan-details"
                  className="w-full flex flex-col items-start justify-start gap-4 py-8"
                >
                  {/* Cabeçalho */}
                  <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-4">
                    <div className="md:flex justify-start items-center hidden">
                      <h3 className="text-xl font-bold">Benefícios</h3>
                    </div>
                    <div className="text-center bg-[#CECECE] py-3 rounded-t-xl text-xl font-bold">
                      Proteção Prata
                    </div>
                    <div className="text-center bg-[#E6B200] py-3 rounded-t-xl text-xl font-bold">
                      Proteção Ouro
                    </div>
                  </div>

                  {/* Linhas da tabela */}
                  {[
                    ["Roubo ou Furto", true, true],
                    ["Proteção contra Colisão", true, true],
                    ["Incêndio (EM CASO DE COLISÃO)", true, true],
                    ["Fenômeno da Natureza", true, true],
                    ["Proteção de Vidros e Periféricos", true, true],
                    ["Indenização 100% da FIPE", true, true],
                    ["Sem Perfil do Motorista", true, true],
                    ["Sem Consulta ao CPF", true, true],
                    ["Retorno ao Domicílio", true, true],
                    ["Chaveiro", true, true],
                    ["Seguro App", true, true],
                    ["Multi Condutores", false, true],
                    ["Hospedagem", false, true],
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-full grid md:grid-cols-3 grid-cols-2 gap-4"
                    >
                      <div className="md:col-span-1 col-span-2 bg-white p-3 md:text-left text-center font-semibold">
                        {item[0]}
                      </div>
                      <div
                        className={`flex justify-center items-center py-2 text-base ${item[1] ? "bg-[#CECECE]" : "bg-[#afafaf]"}`}
                      >
                        {item[1] ? (
                          <CheckIcon className="size-6 stroke-3" />
                        ) : (
                          <X className="size-6 stroke-3" />
                        )}
                      </div>
                      <div
                        className={`flex justify-center items-center py-2 text-base bg-[#E6B200]`}
                      >
                        {item[2] ? (
                          <CheckIcon className="size-6 stroke-3" />
                        ) : (
                          <X className="size-6 stroke-3" />
                        )}
                      </div>
                    </div>
                  ))}

                  {[
                    ["Reboque Pane Elétrica e Mecânica", "250km", "500km"],
                    ["Reboque Pane Seca", "100km", "200km"],
                    [
                      "Carro Reserva",
                      "15 dias (após entrar na oficina)",
                      "30 dias (após entrar na oficina)",
                    ],
                    ["Proteção a Terceiros", "R$ 50.000,00", "R$ 100.000,00"],
                    ["Assistência 24h", "1.000 Km", "ILIMITADO"],
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-full grid md:grid-cols-3 grid-cols-2 gap-4"
                    >
                      <div className="md:col-span-1 col-span-2 bg-white p-3 md:text-left text-center font-semibold">
                        {item[0]}
                      </div>
                      <div className="text-center bg-[#afafaf] py-3 px-4 text-base font-semibold">
                        {item[1]}
                      </div>
                      <div className="text-center bg-[#E6B200] py-3 px-4 text-base font-semibold">
                        {item[2]}
                      </div>
                    </div>
                  ))}

                  <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-4">
                    <div className="md:flex hidden"></div>
                    <button
                      onClick={() =>
                        whatsapp(
                          "Olá! Gostaria de saber mais sobre a Proteção Prata para carros!",
                        )
                      }
                      className="text-center bg-[#afafaf] py-3 rounded-b-xl sm:text-xl text-base font-bold"
                    >
                      Faça sua Cotação
                    </button>
                    <button
                      onClick={() =>
                        whatsapp(
                          "Olá! Gostaria de saber mais sobre a Proteção Ouro para carros!",
                        )
                      }
                      className="text-center bg-[#E6B200] py-3 rounded-b-xl sm:text-xl text-base font-bold"
                    >
                      Faça sua Cotação
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePlan === "moto" && (
            <div id="moto-plans" className="w-full">
              <div className="w-full">
                <h1 className="text-3xl font-bold ">Detalhes do plano</h1>
                <div
                  id="car-plan-details"
                  className="w-full flex flex-col items-start justify-start gap-4 py-8"
                >
                  <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="md:flex justify-start items-center hidden">
                      <h3 className="text-xl font-bold">Benefícios</h3>
                    </div>
                    <div className="text-center bg-[#E6B200] py-3 rounded-t-xl text-xl font-bold">
                      Proteção Ouro
                    </div>
                  </div>

                  {[
                    "Roubo ou Furto",
                    "Proteção contra Colisão",
                    "Incêndio (EM CASO DE COLISÃO)",
                    "Fenômeno da Natureza",
                    "Indenização 100% da FIPE",
                    "Sem Perfil do Motorista",
                    "Sem Consulta ao CPF",
                    "Taxi até 40km",
                    "Retorno ao Domicílio até 100km",
                    "Chaveiro",
                    "Multi Condutores",
                    "Hospedagem",
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="w-full grid md:grid-cols-2 grid-cols-1 gap-4"
                    >
                      <div className="col-span-1 bg-white p-3 md:text-left text-center font-semibold">
                        {benefit}
                      </div>
                      <div className="flex justify-center items-center bg-[#E6B200] py-2 text-base">
                        <CheckIcon className="size-6 stroke-3" />
                      </div>
                    </div>
                  ))}

                  {[
                    ["Reboque Pane Elétrica e Mecânica", "200km"],
                    ["Reboque Pane Seca", "100km"],
                    ["Reboque Colisão", "800km"],
                    ["Proteção a Terceiros", "R$ 10.000,00"],
                    ["Assistência 24h", "ILIMITADA"],
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-full grid md:grid-cols-2 grid-cols-1 gap-4"
                    >
                      <div className="col-span-1 bg-white p-3 md:text-left text-center font-semibold">
                        {item[0]}
                      </div>
                      <div className="text-center bg-[#E6B200] py-3 px-4 text-base font-semibold">
                        {item[1]}
                      </div>
                    </div>
                  ))}

                  <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="md:flex hidden"></div>
                    <button
                      onClick={() =>
                        whatsapp(
                          "Olá! Gostaria de saber mais sobre a Proteção Ouro para motos!",
                        )
                      }
                      className="text-center bg-[#E6B200] py-3 rounded-b-xl sm:text-xl text-base font-bold"
                    >
                      Faça sua Cotação
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="max-w-7xl flex flex-col mx-auto px-6 md:py-28 py-14 gap-8">
          <h4 className="text-2xl font-bold">
            Qual é a diferença entre Seguro e Proteção Veicular?
          </h4>
          <div>
            <p className="text-lg text-justify font-semibold mb-6">
              A proteção veicular é uma alternativa ao seguro auto tradicional,
              mas com algumas diferenças significativas. Enquanto o seguro auto
              é oferecido por empresas reguladas e aprovadas pela SUSEP
              (Superintendência de Seguros Privados), a proteção veicular não é
              supervisionada por nenhum órgão governamental específico. Esse
              serviço é fornecido por entidades sem fins lucrativos, como
              cooperativas e associações.
            </p>
            <p className="text-lg text-justify font-semibold mb-2">
              A principal diferença entre a proteção veicular e o seguro auto
              tradicional está na regulamentação e na forma de gestão dos riscos
              e dos fundos. Enquanto o seguro auto oferece uma segurança maior
              por ser regulado, a proteção veicular pode oferecer uma solução
              mais econômica, mas com riscos compartilhados entre os membros da
              cooperativa ou associação.
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#010045]">
        <div className="w-full p-2 bg-[#AF8E1C]"></div>
        <div className="max-w-7xl grid md:grid-cols-5 grid-cols-2 mx-auto py-16 px-4 md:px-0 md:gap-16 gap-8">
          <div className="md:col-span-1 col-span-2">
            <div className="md:w-full md:mx-0 w-1/2 mx-auto">
              <img
                src="/images/logo-dark.png"
                alt="Blintec Proteção Veicular"
              />
              <p
                className="flex justify-between text-white mt-2"
                style={{ fontSize: "12px" }}
              >
                <span>CNPJ:</span>
                <span>54.801.882/0001-13</span>
              </p>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 md:text-right">
            <p className="text-white font-semibold mb-2">Unidade Paraná</p>
            <p className="text-white">R. Antonio Felippe, 1619</p>
            <p className="text-white">Centro - Paranavaí/PR</p>
            <p className="text-white mt-4">(44) 99804-1806</p>
          </div>
          <div className="md:col-span-2 col-span-1 md:text-right">
            <p className="text-white font-semibold mb-2">Unidade Pernambuco</p>
            <p className="text-white">Av. Brasil, 05, Loja 02</p>
            <p className="text-white">Rio doce - Olinda/PE</p>
            <p className="text-white mt-4">(81) 97326-5132</p>
          </div>
        </div>
        <div className="max-w-7xl flex md:flex-row flex-col md:justify-between items-center mx-auto py-4 px-4 md:px-0 gap-4">
          <div className="text-white font-semibold md:text-left text-center">
            Todos os Direitos Reservados à Associação de Proteção Veicular
            Blintec
          </div>
          <div>
            <a
              href="https://instagram.com/lucasec.dev"
              target="_blank"
              rel="noreferrer"
              className="text-white flex items-center gap-4 font-semibold"
            >
              Desenvolvido por{" "}
              <img
                src="/images/digital-profile.png"
                alt="Digital Profile Solutions"
                className="h-8"
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
