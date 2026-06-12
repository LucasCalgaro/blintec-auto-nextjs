import { ReactNode } from "react";

export const carro: {
  name: string | ReactNode;
  category: "silver" | "gold";
}[] = [
  { name: "Todas as Proteções da Blintec", category: "silver" },
  { name: "Todas as Proteções da Blintec", category: "gold" },
  {
    name: (
      <>
        <b>250km</b> de Reboque Pane Elétrica e Mecânica
      </>
    ),
    category: "silver",
  },
  {
    name: (
      <>
        <b>500km</b> de Reboque Pane Elétrica e Mecânica
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        <b>100km</b> de Reboque Pane Seca
      </>
    ),
    category: "silver",
  },
  {
    name: (
      <>
        <b>200km</b> de Reboque Pane Seca
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        <b>15 dias</b> de Carro Reserva após entrar na oficina
      </>
    ),
    category: "silver",
  },
  {
    name: (
      <>
        <b>30 dias</b> de Carro Reserva após entrar na oficina
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        Proteção a terceiros de até <b>R$ 50.000,00</b>
      </>
    ),
    category: "silver",
  },
  {
    name: (
      <>
        Proteção a terceiros de até <b>R$ 100.000,00</b>
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        Assistencia 24h até <b>1.000Km</b>
      </>
    ),
    category: "silver",
  },
  {
    name: (
      <>
        Assistencia 24h até <b>ILIMITADA</b>
      </>
    ),
    category: "gold",
  },
  { name: <b>Proteção Multi Motoristas</b>, category: "gold" },
  { name: <b>Hospedagem*</b>, category: "gold" },
];

export const moto = [
  { name: "Todas as Proteções da Blintec", category: "gold" },
  {
    name: (
      <>
        <b>200km</b> de Reboque Pane Elétrica e Mecânica
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        <b>100km</b> de Reboque Pane Seca
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        <b>800km</b> de Reboque Colisão
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        Taxi até<b>40Km</b>
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        Proteção a terceiros de até <b>R$ 10.000,00</b>
      </>
    ),
    category: "gold",
  },
  {
    name: (
      <>
        Assistencia 24h até <b>ILIMITADA</b>
      </>
    ),
    category: "gold",
  },
];
