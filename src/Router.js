import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Anasayfa from './pages/Anasayfa';
import IlacArama from './pages/IlacArama';
import IlacimiBul from './pages/IlacimiBul';
import Reçetem from './pages/Reçetem';

const Stack = createNativeStackNavigator();

function App(){
    return(
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Anasayfa' component={Anasayfa} options={{headerShown: false}}/>
                <Stack.Screen name='IlacArama' component={IlacArama} />
                <Stack.Screen name='IlacimiBul' component={IlacimiBul} />
                <Stack.Screen name='Reçetem' component={Reçetem} />
            </Stack.Navigator>
        </NavigationContainer> 
    );
}

export default App;