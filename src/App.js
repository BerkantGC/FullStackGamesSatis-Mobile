import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

const Stack = createNativeStackNavigator();

const App = ()=> {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="Main" component={Main}/>
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
                <Stack.Screen options={{headerShown:false}} name="Profile" component={Profile}/>
                <Stack.Screen options={{headerShown:false}} name="Favorites" component={Favorites}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
