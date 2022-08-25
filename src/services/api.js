import axios from "axios";

const getCoinsData = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
  );

  return response;
};

export default getCoinsData;
