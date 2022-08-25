/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from "prop-types";

const CoinDataItem = ({ data }) => {
  return (
    <div className="coins__item">
      <div className="coins__item-name">
        <img src={data.image} alt="" />
        <p>{data.name}</p>
      </div>
      <div> ${data.current_price}</div>
      <div style={{ color: data.price_change_percentage_24h > 0 ? "green" : "red" }}>
        {data.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div style={{ color: data.market_cap_change_24h > 0 ? "green" : "red" }}>
        ${data.market_cap_change_24h}
      </div>
      <div>${data.market_cap}</div>
      <div>{data.total_volume}</div>
    </div>
  );
};

export default CoinDataItem;

CoinDataItem.defaultProps = {
  data: {
    id: "new-ultra-token",
    name: "New Ultra Token",
    symbol: "nu-T",
  },
};

CoinDataItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    current_price: PropTypes.number,
    symbol: PropTypes.string,
    image: PropTypes.string,
    price_change_percentage_24h: PropTypes.number,
    market_cap: PropTypes.number,
    market_cap_change_24h: PropTypes.number,
    total_volume: PropTypes.number,
  }),
};
