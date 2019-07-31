import React, { Component } from "react";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "store_f/configureStore";
import OneSignal from "react-native-onesignal";

class ReduxWrapper extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("155f3594-6eaa-4f62-b68b-9dead60f99e7");

    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
    OneSignal.configure(); // triggers the ids event
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log("Message: ", openResult.notification.payload.body);
    console.log("Data: ", openResult.notification.payload.additionalData);
    console.log("isActive: ", openResult.notification.isAppInFocus);
    console.log("openResult: ", openResult);
  }

  onIds(device) {
    console.log("Device info: ", device);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default ReduxWrapper;
