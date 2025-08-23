// components/Hr.tsx (or Hr.jsx)
import React from "react";
import { View } from "react-native";

type HrProps = {
  color?: string;
  thickness?: number;
  marginVertical?: number;
  width?: number;
};

export default function Hr({
  color = "#ccc",
  thickness = 1,
  marginVertical = 10,
}: HrProps) {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: thickness,
        marginVertical,
      }}
    />
  );
}
// Usage example in a component
// import Hr from '../../utilities/Hr';
