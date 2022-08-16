import axios from "axios";

const getCoinsData = async () => {
  const response = axios.get("https://api.coingecko.com/api/v3/coins/list");

  return response;
};

export default getCoinsData;
