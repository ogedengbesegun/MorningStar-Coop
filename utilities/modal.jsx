import React from "react";
import { ActivityIndicator, Modal, Text, View } from "react-native";

export default function MyModal({
  visible,
  message = "Wait Loading...",
  color = "green",
  onDismiss,
  backgroundColor,
}) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onDismiss={onDismiss}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: backgroundColor || "rgba(221, 213, 213, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color, fontSize: 20, marginBottom: 12 }}>{message}</Text>
        <ActivityIndicator size="large" color={color} />
      </View>
    </Modal>
  );
}
