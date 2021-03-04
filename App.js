import { StatusBar } from 'expo-status-bar';
import { connect, Provider } from "react-redux";
import store from "./redux/store";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "components";
import {  Toast, WingBlank } from "@ant-design/react-native";
import { useNReduxDispatcher, useNReduxMapping } from "nredux";
import Routing from "./Routing";


const RootConnect = connect(useNReduxMapping, useNReduxDispatcher)(Root);
function Root(props) {
  return <Routing {...props} />;
}
export default function App(props) {
  return (
    <Provider store={store}>
      <RootConnect />
    </Provider>
  );
}


