// components/Hr.tsx (or Hr.jsx)
import React from "react";
import { View } from "react-native";

type HrProps = {
  color?: string;
  thickness?: number;
  marginVertical?: number;
  width?: number;
  marginTop?:number;
};

export default function Hr({
  color = "#ccc",
  thickness = 1,
  marginVertical = 10,
  marginTop=2,
}: HrProps) {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: thickness,
        marginVertical,
        marginTop,
      }}
    />
  );
}
// Usage example in a component
// import Hr from '../../utilities/Hr';
