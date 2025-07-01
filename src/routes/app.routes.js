import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Dashboard from '../screens/Dashboard';
import Question from "../screens/Question";
import Result from "../screens/Result";
import Settings from "../screens/Settings";
import About from "../screens/About";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import SendFeedback from "../screens/SendFeedback";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <AppStack.Navigator>

            <AppStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen 
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen 
                name='Question'
                component={Question}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen
                name='Result'
                component={Result}
                options={{
                    headerShown: false
                }}                
            />

            <AppStack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen
                name="About"
                component={About}
                options={{
                    headerShown: false
                }}
            />
            
            <AppStack.Screen
                name='PrivacyPolicy'
                component={PrivacyPolicy}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen 
                name="SendFeedback"
                component={SendFeedback}
                options={{
                    headerShown: false
                }}
            />
            
        </AppStack.Navigator>
    )
}

export default AppRoutes;