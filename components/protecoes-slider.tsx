"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Protecao {
  nome: string;
  imagem: string;
}

interface ProtecoesSliderProps {
  data: Protecao[];
}

export default function ProtecoesSlider({ data }: ProtecoesSliderProps) {
  const [elementsToShow, setElementsToShow] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efeito 1: Lidar com a responsividade (recalcula elementos visíveis ao redimensionar a tela)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 753) {
        setElementsToShow(2);
      } else if (width < 1007) {
        setElementsToShow(3);
      } else {
        setElementsToShow(4);
      }
    };

    // Executa na montagem inicial para pegar a largura correta
    handleResize();

    // Adiciona o listener de resize
    window.addEventListener("resize", handleResize);
    
    // Cleanup do listener quando o componente for desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // O índice máximo que o slider pode alcançar antes de ficar com espaço vazio no final
  const maxIndex = Math.max(0, data.length - elementsToShow);

  // Função para avançar (equivalente ao "prev()" do script original que movia a margem negativamente)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      // Se chegou no limite, volta para o início (0), como no autoplay original
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  }, [maxIndex]);

  // Função para retroceder
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return 0;
      }
      return prevIndex - 1;
    });
  };

  // Efeito 2: AutoPlay (Gatilho a cada 5 segundos)
  useEffect(() => {
    const autoplayTimer = setTimeout(() => {
      nextSlide();
    }, 5000);

    // Cleanup do timer: se o usuário interagir ou redimensionar a tela, o timer reseta
    return () => clearTimeout(autoplayTimer);
  }, [currentIndex, nextSlide]); // Recria o timer toda vez que o slide muda

  // Cálculos dinâmicos para o CSS
  const cardWidthPercent = 100 / elementsToShow;
  const translateX = -(currentIndex * cardWidthPercent);

  return (
    <div>
      <div className="max-w-screen-2xl flex flex-col items-center justify-center mx-auto px-4 md:py-28 py-14 gap-8">
        <h2 className="text-center text-2xl font-bold mb-6">
          Nossas Proteções
        </h2>
        
        <div className="flex w-full">
          {/* Botão Anterior */}
          <div className="w-1/12 flex items-center">
            <div className="w-full text-right">
              <Button onClick={prevSlide} variant='ghost' size='icon'>
                <ChevronLeftIcon className="size-10" />
              </Button>
            </div>
          </div>

          {/* Container do Slider */}
          <div className="w-10/12 overflow-hidden">
            <ul
              className="flex w-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(${translateX}%)` }} // Aplica a translação dinamicamente
            >
              {data.map((item, index) => (
                <li
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidthPercent}%` }} // Define a largura exata calculada
                >
                  <div className="flex flex-col justify-center items-center p-5 h-full">
                    <div className="flex justify-center items-center w-2/3 aspect-square rounded-full overflow-hidden bg-[#010045]">
                      <img
                        className="w-1/2"
                        src={item.imagem}
                        alt={`Proteção ${item.nome}`}
                      />
                    </div>
                    <h2 className="mt-2 text-2xl font-bold text-gray-700 text-center mb-8 whitespace-pre-wrap">
                      {item.nome}
                    </h2>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/12 flex items-center">
            <div className="w-full">
              <Button onClick={nextSlide} variant='ghost' size='icon'>
                <ChevronRightIcon className="size-10" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}