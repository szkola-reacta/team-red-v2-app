import PropTypes from "prop-types";

const CoinDataItem = ({ data }) => {
  return (
    <div style={{ padding: "2px 4px", margin: 2, border: "1px solid #232323" }}>{data.name}</div>
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
    symbol: PropTypes.string,
  }),
};
