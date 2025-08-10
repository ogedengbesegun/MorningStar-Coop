import { Link, useRouter } from "expo-router";
import React from "react";
import {
  findNodeHandle,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

type Props = {
  scrollRef: React.RefObject<ScrollView>;
  refWhy: React.RefObject<View>;
  refVision: React.RefObject<View>;
  refMission: React.RefObject<View>;
  refServices: React.RefObject<View>;
  setDialogMenu: (val: boolean) => void;
  toggleMenuIcon: () => void;
};

const ModalContent: React.FC<Props> = ({
  scrollRef,
  refWhy,
  refVision,
  refMission,
  refServices,
  setDialogMenu,
  toggleMenuIcon,
}) => {
  const router = useRouter();
  ///
  const scrollToRef = (ref: React.RefObject<View>) => {
    if (ref.current && scrollRef.current) {
      if (Platform.OS === "web") {
        // On web, ref.current should be an HTMLElement, not a React Native View
        const htmlElement = ref.current as unknown as HTMLElement | null;
        htmlElement?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      } else {
        const scrollHandle = findNodeHandle(scrollRef.current);
        const targetHandle = findNodeHandle(ref.current);

        if (targetHandle && scrollHandle) {
          UIManager.measureLayout(
            targetHandle,
            scrollHandle,
            () => console.warn("measure failed"),
            (x, y) => {
              scrollRef.current?.scrollTo({ y, animated: true });
            }
          );
        }
      }
    }
  };

  // const scrollToRef = async () => {
  //   if (Platform.OS === "web") {
  //     refVision.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  //   } else {
  //     const scrollHandle = findNodeHandle(scrollRef.current);
  //     const targetHandle = findNodeHandle(refVision.current);

  //     if (targetHandle && scrollHandle) {
  //       try {
  //         const { x, y } = await UIManager.measureLayoutRelativeToParent(
  //           targetHandle
  //         );
  //         scrollRef.current?.scrollTo({ y, animated: true });
  //       } catch (error) {
  //         console.warn("measure failed", error);
  //       }
  //     }
  //   }
  // };
  // const scrollRef = useRef<null | ScrollView>(null);
  // const refVision = useRef<null | View>(null);
  // const refMission = useRef<null | View>(null);
  return (
    <View
      style={{
        marginTop: 70,
        marginRight: "auto",
        marginLeft: "auto",
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
          { label: "🛒 Our Services" },
          { label: "🌱 Join Us Now" },
        ].map((item, i) => (
          <TouchableOpacity
            key={item.label}
            onPress={() => {
              setDialogMenu(false);
              toggleMenuIcon();
              if (i === 0) {
                router.navigate("adminlogin");
              } else if (i === 1) {
                scrollToRef(refWhy);
              } else if (i === 2) {
                scrollToRef(refVision);
              } else if (i === 3) {
                scrollToRef(refMission);
              } else if (i === 4) {
                scrollToRef(refServices);
              } else if (i === 5) {
                router.navigate("joinus");
              }
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
            }, 100);
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
