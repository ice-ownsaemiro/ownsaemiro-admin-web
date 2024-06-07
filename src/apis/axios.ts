import axios from "axios";
import Cookies from "js-cookie";

const accessToken = Cookies.get("accessToken");
const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const instance = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      config.withCredentials = true;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const response = await axios.post(
            `${serverUrl}/api/v1/auth/reissue`,
            {},
            {
              withCredentials: true,
            }
          );

          if (response.status === 200) {
            const newAccessToken = response.data.accessToken;
            Cookies.set("access_token", newAccessToken, {
              path: "/",
              domain: "localhost",
            });
            originalRequest.headers["Authorization"] =
              `Bearer ${newAccessToken}`;
            originalRequest.withCredentials = true;
            return instance(originalRequest);
          }
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);
