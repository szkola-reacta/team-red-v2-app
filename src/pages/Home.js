import { CoinDataFull } from "../components/CoinDataFull";

function Home() {
  return (
    <>
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
      <CoinDataFull />
    </>
  );
}

export default Home;
