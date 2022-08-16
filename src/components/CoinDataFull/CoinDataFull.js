import { useState, useEffect } from "react";
import getCoinsData from "../../services/api";
import CoinDataItem from "./CoinDataItem";

const CoinDataFull = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCoinsData()
      .then((res) => setCoinsData(res.data))
      .catch((error) => setError(error.message));
  }, []);

  const checkCoinsData = () => {
    console.log(coinsData, error);
  };

  return (
    <div>
      <button type="button" onClick={checkCoinsData}>
        check what we have here
      </button>
      <h2>CoinDataFull</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {coinsData &&
          coinsData.splice(0, 100).map((item) => {
            return <CoinDataItem key={item.id} data={item} />;
          })}
      </div>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default CoinDataFull;
