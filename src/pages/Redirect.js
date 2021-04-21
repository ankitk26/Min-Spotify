import { useEffect } from "react";
import getToken from "../utils/getToken";

const Redirect = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      getToken(code);
    }
  }, []);

  return (
    <div>
      <h1>Redirecting to dashboard</h1>
    </div>
  );
};

export default Redirect;
