import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "../utils/baseUrl";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [dashboardId, setDashboardId] = useState("");
  const [dashboardInfo, setDashboardInfo] = useState("");
  const [roadmapInfo, setRoadmapInfo] = useState("");
  const [roadmapsList, setRoadmapsList] = useState([])

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
      const userInfo = JSON.parse(await AsyncStorage.getItem("userInfo"));
      const userId = userInfo.id;
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
        await AsyncStorage.setItem("dashboardInfo", JSON.stringify(body));
        console.log("DASHBOARD INFO", body);
        const dashboardId = body.id.toString();
        console.log("DASHBOARD ID: ", dashboardId);
        await AsyncStorage.setItem("dashboardId", dashboardId);
      } else {
        console.error("Dashboard data is missing in the response.");
      }
    } catch (error) {
      console.error("Erro na criação de dashboard:", error.response.data);
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
        console.log("JWT: ", authorizationHeader);
        AsyncStorage.setItem("userToken", authorizationHeader);

        const body = response.data;
        setUserInfo(body);
        console.log(body);
        AsyncStorage.setItem("userInfo", JSON.stringify(body));

        await postDashboard();
        refreshToken();
        fetchRoadmaps();
      }
    } catch (error) {
      console.error("Erro de login:", error.response.data);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setUserInfo(null);
    setDashboardId(null);
    setDashboardInfo(null);
    setIsLoading(false);
    deleteAll();
  };

  const deleteAll = () => {
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("dashboardId");
    AsyncStorage.removeItem("dashboardInfo");
    AsyncStorage.removeItem("roadmapInfo");
    AsyncStorage.removeItem("roadmaps");
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

  const createRoadmap = async (nomeRoadmap, tipoRoadmap, languageRoadmap) => {
    try {
      const dashboardId = await AsyncStorage.getItem("dashboardId");
      const authorizationHeader = await AsyncStorage.getItem("userToken");

      const response = await axios.post(
        `${API_URL}/api/v1/dashboards/${dashboardId}/roadmaps`,
        {
          title: nomeRoadmap,
          type: tipoRoadmap,
          language: languageRoadmap,
          color: 5,
        },
        {
          headers: {
            Authorization: authorizationHeader,
          },
        }
      );

      if (response.status === 200) {
        const body = response.data;
        setRoadmapInfo(body);
        await AsyncStorage.setItem("roadmapInfo", JSON.stringify(body));
        console.log("ROADMAP INFO", body);
      } else {
        console.error("Dashboard data is missing in the response.");
      }
    } catch (error) {
      console.error("Não foi possível criar o Roadmap: ", error.response.data);
    }

    fetchRoadmaps();
    await postStages(roadmapInfo.id)
  };

  const fetchRoadmaps = async () => {
    const dashboardId = await AsyncStorage.getItem("dashboardId");
    const authorizationHeader = await AsyncStorage.getItem("userToken");
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/dashboards/${dashboardId}/roadmaps`,
        {
          headers: {
            Authorization: authorizationHeader,
          },
        }
      );

      if (response.status === 200) {
        const body = response.data;
        setRoadmapsList(body)
      } else {
        console.error("Roadmap data is missing in the response.");
      }
    } catch (error) {
      console.error("Erro ao buscar a lista de roadmaps:", error.response.data);
    }
  };

  const postStages = async (roadmapId) => {
    const authorizationHeader = await AsyncStorage.getItem("userToken");
    console.log(authorizationHeader)
    try{
      const response = await axios.post(`${API_URL}/api/v1/roadmaps/${roadmapId}/stages/addStages`, 
      null,
      {
        headers: {
          Authorization: authorizationHeader,
        },
      })

      if(response.status === 200){
        const body = response.data;
        console.log(body)
        console.log("Criação dos STAGES ocorreu corretamente.")
      }
    }catch(error){
      console.error("Erro ao criar os Stages: ", error.response.data)
    }

    // postTasks()
  }

  const postTasks = async (stageId) => {
    const authorizationHeader = await AsyncStorage.getItem("userToken");
    try{
      const response = axios.post(`${API_URL}/api/v1/stages/${stageId}/tasks`, 
      null,
      {
        headers: {
          Authorization: authorizationHeader,
        }
      }
      )

      if(response.status === 200) {
        console.log("TASKS criadas com sucesso.")
      }
    }catch(error){
      console.log("Erro ao criar as TASKS: ", error.response.data)
    }
  }

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
        roadmapInfo,
        createRoadmap,
        fetchRoadmaps,
        login,
        logout,
        roadmapsList,
        postStages
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
