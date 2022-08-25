import { useState, useEffect } from "react";
import getCoinsData from "../../services/api";
import { CoinDataItem } from ".";

const CoinDataFull = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCoinsData()
      .then((response) => {
        console.log(response);
        setCoinsData(response);
      })
      .catch((error) => setError(error.message));
  }, []);

  const checkCoinsData = () => {
    console.log(coinsData.data[0], error);
  };

  return (
    <div className="coins">
      <button type="button" onClick={checkCoinsData}>
        check what we have here
      </button>
      <div className="coins__content">
        <div className="coins__item">
          <div>Coin</div>
          <div>Price</div>
          <div>24h</div>
          <div>Mkt 24h</div>
          <div>Mkt cap</div>
          <div>Total volume</div>
        </div>
        {coinsData.data &&
          coinsData.data.map((item) => {
            return <CoinDataItem key={item.id} data={item} />;
          })}
      </div>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default CoinDataFull;
