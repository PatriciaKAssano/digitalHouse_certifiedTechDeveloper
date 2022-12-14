import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({});

  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function fillLoginDataState({ token }) {

    localStorage.setItem(
      "@system_login",
      JSON.stringify({ token })
    );

    setLoginData({ ...loginData, token })
    setIsLogged(true);
  };

  function removeLoginData() {
    localStorage.removeItem("@system_login");
    //    localStorage.removeItem("favorites");
    //    localStorage.removeItem("@theme");
    setIsLogged(false);
  }


  useEffect(() => {
    const response = localStorage.getItem("@system_login");

    let user;

    if (response) {
      user = JSON.parse(response);

      fillLoginDataState({
        token: user.token,
      });
      // console.log();
      navigate("/home");
      navigate(location?.pathname);
    }
  }, []);


  return (
    <AuthContext.Provider
      value={{
        loginData,
        fillLoginDataState,
        isLogged,
        removeLoginData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;