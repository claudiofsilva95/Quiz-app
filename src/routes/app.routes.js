import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Dashboard from '../screens/Dashboard';
import Question from "../screens/Question";
import Result from "../screens/Result";

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
                    // headerStyle: {
                    //     backgroundColor: '#1f1147',
                    //     borderBottomWidth: 1,
                    //     borderBottomColor: '#00b94a',                        
                    // },
                    // headerTintColor: '#fff',
                    // headerTitle: 'Voltar',
                    // headerBackTitleVisible: false
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
            
        </AppStack.Navigator>
    )
}

export default AppRoutes;