import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import ActivityIndicatorScreen from "./components/ActivityIndicatorScreen";
import ImageScreen from "./components/ImageScreen";
import KeyboardScreen from "./components/KeyboardScreen";
import ModalScreen from "./components/ModalScreen";
import PressableScreen from "./components/PressableScreen";
import RefreshControlScreen from "./components/RefreshControlScreen";
import SectionListScreen from "./components/SectionListScreen";
import SwitchScreen from "./components/SwitchScreen";
import StatusBarScreen from "./components/StatusBarScreen";
import TouchableHighlightScreen from "./components/TouchableHighlightScreen";
import TouchableOpacityScreen from "./components/TouchableOpacityScreen";
import TouchableWithoutFeedbackExample from "./components/TouchableWithoutFeedbackScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="ActivityIndicatorScreen" component={ActivityIndicatorScreen} />
                <Stack.Screen name="ImageScreen" component={ImageScreen}/>
                <Stack.Screen name="KeyboardScreen" component={KeyboardScreen}/>
                <Stack.Screen name="ModalScreen" component={ModalScreen}/>
                <Stack.Screen name="PressableScreen" component={PressableScreen}/>
                <Stack.Screen name="RefreshControlScreen" component={RefreshControlScreen}/>
                <Stack.Screen name="SectionListScreen" component={SectionListScreen}/>
                <Stack.Screen name="SwitchScreen" component={SwitchScreen}/>
                <Stack.Screen name="StatusBarScreen" component={StatusBarScreen}/>
                <Stack.Screen name="TouchableHighlightScreen" component={TouchableHighlightScreen}/>
                <Stack.Screen name="TouchableOpacityScreen" component={TouchableOpacityScreen}/>
                <Stack.Screen name="TouchableWithoutFeedback" component={TouchableWithoutFeedbackExample}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

