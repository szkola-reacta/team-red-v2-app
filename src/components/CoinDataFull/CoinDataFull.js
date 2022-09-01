import { useState, useEffect } from "react";
import getCoinsData from "../../services/api";
import { CoinDataItem } from ".";

const CoinDataFull = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCoinsData()
      .then((response) => {
        setCoinsData(response);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="coins">
      <div className="coins__content">
        <div className="coins__item">
          <div>Coin</div>
          <div>Price</div>
          <div>24h</div>
          <div>ATH</div>
          <div>Mkt cap</div>
          <div>Circulating supply</div>
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
