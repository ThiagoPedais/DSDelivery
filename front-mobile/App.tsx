import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Routes from './src/Routes';
import Header from './src/Header';

export default function App() {



  return (
    <NavigationContainer>
      <Header />
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
