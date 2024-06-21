import React, { useEffect, useState } from "react";
import { fetchAdvice, Slip } from "../api/adviceApi";
import Loading from "./Loading";

const AdviceComponent: React.FC = () => {
  const [advice, setAdvice] = useState<Slip | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAdvice = async () => {
      try {
        const adviceData = await fetchAdvice();
        setAdvice(adviceData);
      } catch (err) {
        setError("Failed to fetch advice");
      }
    };

    getAdvice();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return <div>{advice ? <p>{advice.advice}</p> : <Loading />}</div>;
};

export default AdviceComponent;
