import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from './screens/Home';
import ImageDownload from './screens/Image';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Search' component={Home} />
        <Stack.Screen name='Image' component={ImageDownload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
