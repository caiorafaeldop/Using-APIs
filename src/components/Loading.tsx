import React from "react";
import { Oval } from "react-loader-spinner";
const Loading: React.FC = () => {
  const loaderStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="loader" style={loaderStyle}>
      <h2>Carregando conselho...</h2>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
