import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  setDialogMenu: (val: boolean) => void;
  toggleMenuIcon: () => void;
};

const ModalContent: React.FC<Props> = ({ setDialogMenu, toggleMenuIcon }) => {
  return (
    <View
      style={{
        marginTop: 9,
        marginLeft: 9,
        width: 300,
        backgroundColor: "white",
        borderRadius: 6,
        padding: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
      }}
    >
      <Text
        style={{
          textAlign: "center",
          backgroundColor: "grey",
          marginBottom: 10,
          padding: 10,
          color: "white",
          fontWeight: "bold",
        }}
      >
        Menu
      </Text>

      {/* Links */}
      <View style={{ alignSelf: "flex-start", marginLeft: 5 }}>
        {[
          { label: "🔐 Admin Login" },
          { label: "❓ Why Morning Star?" },
          { label: "🍀 Our Vision" },
          { label: "🌴 Our Mission" },
          { label: "🌱 Join Us Now" },
        ].map((item, i) => (
          <TouchableOpacity
            key={item.label}
            onPress={() => {
              setDialogMenu(false);
              toggleMenuIcon();
            }}
            style={{ marginTop: i !== 0 ? 20 : 0 }}
          >
            <Text
              style={{
                color: "green",
                fontSize: 20,
                // textDecorationLine: "underline",
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Extra Mission item with TouchableOpacity */}
        <Link
          href={"(auth)/callus"}
          style={{ marginTop: 20, marginBottom: 20 }}
          onPress={() => {
            setTimeout(() => {
              setDialogMenu(false);
              toggleMenuIcon();
            }, 500);
          }}
        >
          <Text style={{ color: "green", fontSize: 20 }}>
            📞 Call Us for Inquiries
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default ModalContent;
