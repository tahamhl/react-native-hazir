import React from "react";
import { LogBox } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AuthProvider from "./src/context/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  // Geliştirme sırasında belirli uyarıları görmezden gelmek için
  LogBox.ignoreLogs([
    "Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.",
  ]);

  // Geliştirme/üretim moduna göre uyarıları yönet
  if (process.env.NODE_ENV === "production") {
    LogBox.ignoreAllLogs(true);
  } else {
    LogBox.ignoreAllLogs(false);
  }

  return (
    <ActionSheetProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ActionSheetProvider>
  );
}
