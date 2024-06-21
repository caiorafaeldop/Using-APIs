import { useState, useEffect } from "react";
import Loading from "./Loading";

function Testando() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Data Loaded!</h1>
    </div>
  );
}

export default Testando;
