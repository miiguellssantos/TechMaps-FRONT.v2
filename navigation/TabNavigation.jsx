import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import RoadmapsStackScreen from "./RoadmapStackScreen";
import DashboardStackScreen from "./DashboardStackScreen";

const TabNavigation = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
  
    const SCREEN_NAMES = {
      ROADMAPS: "ROADMAPS",
      DASHBOARD: "DASHBOARD",
    };
  
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          backBehavior="history"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#306B34",
            tabBarInactiveTintColor: "#306B34",
            tabBarStyle: {
              background: "linear-gradient(93deg, #EEE5E9 0%, #ACE894 100%)",
              bottom: 10,
              position: "absolute",
              borderRadius: 10,
              marginHorizontal: 10,
              elevation: 0,
              height: 50,
            },
            tabBarIcon: ({ color, focused }) => {
              let iconName;
  
              switch (route.name) {
                case SCREEN_NAMES.ROADMAPS:
                  iconName = focused ? "map" : "map-outline";
                  break;
                case SCREEN_NAMES.DASHBOARD:
                  iconName = focused ? "chart-line-stacked" : "chart-line";
                  break;
                default:
                  iconName = "map";
                  break;
              }
  
              return <Icon name={iconName} size={30} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name={SCREEN_NAMES.ROADMAPS}
            component={RoadmapsStackScreen}
          />
          <Tab.Screen
            name={SCREEN_NAMES.DASHBOARD}
            component={DashboardStackScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default TabNavigation;