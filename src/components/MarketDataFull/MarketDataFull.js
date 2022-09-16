import { useState, useEffect } from "react";
import getMarketData from "../../services/market-api";
import { MarketDataItem } from ".";

const MarketDataFull = () => {
  const [marketData, setMarketData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMarketData()
      .then((response) => {
        setMarketData(response);
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
        {marketData.data &&
          marketData.data.map((item) => {
            return <MarketDataItem key={item.id} data={item} />;
          })}
      </div>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default MarketDataFull;
