import "./global";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Web3 from "web3";

export default function App() {
  useEffect(() => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
    );

    web3.eth.getBlock("latest").then(console.log);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
