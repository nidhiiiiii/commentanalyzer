// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoPage from './logopage';
import CameraPage from './CameraPage';
// import ResultPage from './ResultPage';

const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoPage">
        {isLoading ? (
          <Stack.Screen name="LogoPage" component={LogoPage} />
        ) : (
          <>
            <Stack.Screen name="CameraPage" component={CameraPage} />
            {/* <Stack.Screen name="ResultPage" component={ResultPage} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;





