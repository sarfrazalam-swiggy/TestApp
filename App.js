import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash'
import dummy from "./dummy.json"

export default function App() {

  console.log(dummy)

  return (
    <View style={styles.container}>
      <Text>Welcome to Swiggy {_.camelCase("Hello World")}!</Text>
      <Text>
        Hello
      </Text>
      <StatusBar style="auto" />
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
