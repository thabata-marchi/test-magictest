import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RegisterDeck = ({navigation, route}) => {
  const {id} = route.params;
  const [deckname, setDeckname] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchCards}
        placeholder={'Qual o nome do seu deck?'}
        placeholderTextColor="#fff"
        underlineColorAndroid="transparent"
        onChangeText={(text) => setDeckname(text)}
        value={deckname}
      />
      <TouchableOpacity
        style={styles.btnArrow}
        onPress={() => {
          navigation.navigate('SelectCard', {
            id: id,
            deckname: deckname,
          });
        }}>
        <Icon name="chevron-right" style={styles.arrow} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d1c25',
  },
  h1: {
    fontSize: 30,
    margin: 30,
    color: '#FFF',
  },
  searchCards: {
    borderWidth: 2,
    borderColor: '#5e4f67',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#242031',
    color: '#D7D7D7',
    fontSize: 20,
    textTransform: 'uppercase',
    width: 300,
    textAlign: 'center',
    opacity: 0.5,
  },
  btnArrow: {
    backgroundColor: '#5e4f67',
    borderRadius: 50,
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  arrow: {
    color: '#fff',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 42,
  },
});

export default RegisterDeck;
