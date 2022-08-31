/* eslint-disable react/jsx-one-expression-per-line */
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

const CoinDataItem = ({ data }) => {
  return (
    <div className="coins__item">
      <div className="coins__item-name">
        <img src={data.image} alt={`${data.name} logo`} />
        <p>{data.name}</p>
      </div>

      <div>
        <NumberFormat value={data.current_price} displayType="text" thousandSeparator prefix="$" />
      </div>
      <div style={{ color: data.price_change_percentage_24h > 0 ? "green" : "red" }}>
        {data.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className="coins__mkt-cap">
        <NumberFormat value={data.ath} displayType="text" thousandSeparator prefix="$" />
      </div>
      <div>
        <NumberFormat value={data.market_cap} displayType="text" thousandSeparator prefix="$" />
      </div>
      <div>
        <NumberFormat value={data.circulating_supply} displayType="text" thousandSeparator />
      </div>
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
    ath: PropTypes.number,
    circulating_supply: PropTypes.number,
  }),
};
