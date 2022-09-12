import { useLoginContext } from "components/login/LoginProvider";
import { Link } from "react-router-dom";

function Home() {
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
      <h1>here will be some data list rendering</h1>
      <p>work in progress.......</p>
    </>
  );
}

export default Home;
