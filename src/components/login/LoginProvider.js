import { useStorage } from "features/useStorage";
import { createContext, useContext } from "react";

const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [logged, setLogged] = useStorage("logged");
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider value={{ logged, setLogged }}>{children}</LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
export default LoginProvider;
