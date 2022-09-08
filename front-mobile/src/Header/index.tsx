import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';
import { PropsStack } from '../Models';

export default function Header() {

  const navigation = useNavigation<PropsStack>();


  const handleOnPress = () => {
    navigation.navigate('Home');
  };

  return (

    <View style={styles.container}>
      <Image source={logo} />
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={styles.text}>DS Delivery</Text>
      </TouchableOpacity>
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
