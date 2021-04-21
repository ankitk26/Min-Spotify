import history from "../history";

export default function checkTokenExpiry(err) {
  if (err.response && err.response.data.error.status === 401) {
    history.push("/login");
    localStorage.removeItem("token");
  }
}
