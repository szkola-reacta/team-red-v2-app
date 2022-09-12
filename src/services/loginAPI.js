import axios from "axios";

const loginAPI = axios.create({
  baseURL: "https://red-team-app-server.vercel.app/",
});

export const loging = (name, password) => {
  return loginAPI
    .get("/login", {
      auth: {
        username: name,
        password,
      },
    })
    .then((resp) => resp.data)
    .catch((err) => console.error(err));
};
