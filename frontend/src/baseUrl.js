const BASE_URL = import.meta.env.PROD
  ? "https://ethio-parent-school-backend.vercel.app"
  : "http://localhost:5000";

export const fetchConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  mode: "cors",
};

export default BASE_URL;
