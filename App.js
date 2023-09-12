import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumeroAleatorio from './componente/NumeroAleatorio';

export default function App() {
  return (
    <View>
    <NumeroAleatorio min={10} max={1000} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
