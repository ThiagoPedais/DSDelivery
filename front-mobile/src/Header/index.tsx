import { Image, StyleSheet, Text, View } from 'react-native';

import logo from '../assets/logo.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#da5c5c',
    height: 80,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  text: {
    fontWeight: 'bold' as 'bold',
    fontSize: 18,
    letterSpacing: -0.24,
    color: '#ffffff',
    marginLeft: 15
  }
});
