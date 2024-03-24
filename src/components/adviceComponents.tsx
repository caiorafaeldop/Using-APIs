import React, { useEffect, useState } from "react";

interface slip {
  id: number;
  advice: string;
} // a struct do advice

const AdviceComponent: React.FC = () => {
  const [advice, setAdvice] = useState<slip | null>(null); //a constante do advice que pode ser um slip ou um null caso dê erro
  const URL = "https://api.adviceslip.com/advice";

  const fetchAdvice = async () => {
    try {
      const response = await fetch(URL); //
      if (!response.ok) {
        throw new Error("Network response was not ok"); //
      }
      const data = await response.json(); //
      console.log(data);
      setAdvice(data.slip); //
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error); //
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div>
      {advice ? (
        <p>{advice.advice}</p> // Corrigido para mostrar o conselho
      ) : (
        <p>Loading advice...</p>
      )}
    </div>
  );
};

export default AdviceComponent;
