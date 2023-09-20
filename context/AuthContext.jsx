import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import API_URL from "../configs";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [userId, setUserId] = useState("");
  const [dashboardId, setDashboardId] = useState("");
  const [dashboardInfo, setDashboardInfo] = useState("");

  const refreshToken = async () => {
    try {
      setUserToken(await AsyncStorage.getItem("userToken"));
      const response = await axios.get(`${API_URL}/refresh-token`, {
        headers: {
          Authorization: userToken,
        },
      });

      if (response.status === 200) {
        const newToken = response.headers.authorization;
        AsyncStorage.setItem("userToken", newToken);
        setUserToken(newToken);
      }
    } catch (error) {
      console.error("Erro ao atualizar o token:", error);
    }
  };

  const postDashboard = async () => {
    try {
      setUserInfo(await JSON.parse(AsyncStorage.getItem("userInfo")));
      setUserId(userInfo.id);
      const authorizationHeader = await AsyncStorage.getItem("userToken");

      const response = await axios.post(
        `${API_URL}/api/v1/dashboards/${userId}`,
        null,
        {
          headers: {
            Authorization: authorizationHeader,
          },
        }
      );

      if (response.status === 200) {
        const body = response.data;
        setDashboardInfo(body);
        AsyncStorage.setItem("dashboardInfo", JSON.stringify(body));
        setDashboardId(body.id);
        AsyncStorage.setItem("dashboardId", body.id.toString());
      } else {
        console.error("Dashboard data is missing in the response.");
      }
    } catch (error) {
      console.error("Erro na criação de dashboard:", error);
    }
  };

  const login = async (username, senha) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password: senha,
      });

      if (response.status === 200) {
        const authorizationHeader = response.headers.authorization;
        setUserToken(authorizationHeader);
        AsyncStorage.setItem("userToken", authorizationHeader);

        const body = response.data;
        setUserInfo(body);
        AsyncStorage.setItem("userInfo", JSON.stringify(body));

        postDashboard();
        refreshToken();
      }
    } catch (error) {
      console.error("Erro de login: ", error);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setUserInfo(null);
    setDashboardId(null);
    setDashboardInfo(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("dashboardId");
    AsyncStorage.removeItem("dashboardInfo");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem("userToken");
      const userInfo = JSON.parse(await AsyncStorage.getItem("userInfo"));

      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }

      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggedIn error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
    const intervalId = setInterval(refreshToken, 30 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        userInfo,
        dashboardId,
        dashboardInfo,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
