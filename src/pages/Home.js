import { Link } from "react-router-dom";

import { useLoginContext } from "components/login/LoginProvider";
import { MarketDataFull } from "../components/MarketDataFull";

const Home = () => {
  const { logged, setLogged } = useLoginContext();
  return (
    <>
      <p>
        {logged ? (
          <>
            You are logged as &nbsp;
            <b>{logged}</b>
            <button style={{ marginLeft: "2em" }} type="button" onClick={() => setLogged("")}>
              Logout
            </button>
          </>
        ) : (
          <>
            You are not logged,
            <Link to="/login"> loggin please!</Link>
          </>
        )}
      </p>
      <div className="home__headline">
        <h2>Coins on market</h2>
        <p>
          Powered by&nbsp;
          <a
            href="https://www.coingecko.com/en/api"
            target="_blank"
            rel="noreferrer"
            className="home__link"
          >
            CoinGecko API
          </a>
        </p>
      </div>
      <MarketDataFull />
    </>
  );
};

export default Home;
