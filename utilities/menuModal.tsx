import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

type Props = {
  setDialogMenu: (val: boolean) => void;
  toggleMenuIcon: () => void;
};

const ModalContent: React.FC<Props> = ({ setDialogMenu, toggleMenuIcon }) => {
  return (
    
    <View
      style={{
        marginTop: 25,
        marginLeft: 30,
        width: 250,
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
      <View style={{ alignSelf: "center" }}>
        {[
          { label: "Admin Login", href: "#" },
          { label: "Why Morning Star?", href: "#" },
          { label: "🍀 Our Vision", href: "#" },
          { label: "🌱 Join Us Now", href: "#" },
          { label: "📞 Call Us for Inquiries", href: "(auth)/callus" },
        ].map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            onPress={() => {
              setDialogMenu(false);
              toggleMenuIcon();
            }}
            style={{ marginTop: i !== 0 ? 20 : 0 }}
          >
            <Text
              style={{
                color: "green",
                fontSize: 17,
                // textDecorationLine: "underline",
              }}
            >
              {item.label}
            </Text>
          </Link>
        ))}

        {/* Extra Mission item with TouchableOpacity */}
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            setDialogMenu(false);
            toggleMenuIcon();
          }}
        >
          <Text style={{ color: "green", fontSize: 15 }}>🌴 Our Mission</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalContent;
