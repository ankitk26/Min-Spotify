import axios from "axios";
import history from "../history";

export default async function getToken(code) {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: "http://localhost:3000/callback",
  });

  const encodedString = btoa(
    `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
  );

  const config = {
    headers: {
      Authorization: `Basic ${encodedString}`,
    },
  };

  try {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      body,
      config
    );
    localStorage.setItem("token", res.data.access_token);
    history.push("/");
  } catch (err) {
    console.log("get token error" + err);
    history.push("/login");
  }
}
