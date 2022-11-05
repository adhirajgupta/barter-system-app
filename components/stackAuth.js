import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";

const Stack = createNativeStackNavigator()

export default function StackAuth(){
    return(
        <Stack.Navigator initialRouteName="LoginScreen"  screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginScreen" component={Login}/>
            <Stack.Screen name="SignUpScreen" component={SignUp}/>
            {/* <Stack.Screen name="HomeScreen" options={{headerShown:false}} /> */}
        </Stack.Navigator>
    )
}