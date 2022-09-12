import { useLoginContext } from "components/login/LoginProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loging } from "services/loginAPI";
import "styles/style.scss";

export const Login = () => {
  const { setLogged } = useLoginContext();
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const {
      target: {
        elements: { name, password },
      },
    } = ev;
    setLoading(true);
    loging(name.value, password.value)
      .then((data) => {
        if (data) {
          setIsValid(true);
          setLogged(data);
          navigate("/");
        } else {
          setIsValid(false);
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <h3 className="loader" style={{ display: loading ? "block" : "none" }}>
        Waiting....
      </h3>
      <h4 style={{ ccolor: "red", display: !isValid ? "block" : "none" }}>
        invalid password... (correct is 12345 ) &#128513;
      </h4>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Introduce youself:</legend>
          <label htmlFor="name">
            Name:
            <input id="name" required />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" required />
          </label>
        </fieldset>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};
