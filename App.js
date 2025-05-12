import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './Inicio';
import Login from './Login';
import Cadastro from './Cadastro';
import Menu from './Menu'; 
import Registro from './Registro';
import Sugestoes from './Sugestoes';
import Chat from './Chat';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#ffffff' },
          // Opcional: Transição entre telas
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 300 } },
            close: { animation: 'timing', config: { duration: 300 } },
          },
        }}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Sugestoes" component={Sugestoes} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}