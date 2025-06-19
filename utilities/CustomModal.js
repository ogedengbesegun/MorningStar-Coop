import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';


export default function CustomModal({ visible, onClose, children }) {
    return (
        <>
            <Modal visible={visible}
                transparent
                animationType='slide'>
                {/* <View
                    style={{ flex: 1, justifyContent: "center", backgroundColor: "#000000aa" }}> */}
                <View style={{
                    // flex: 1,
                    position: "fixed",
                    top: "50%",
                    bottom: "50%",
                    margin: 20, padding: 20,
                    backgroundColor: "grey",
                    borderRadius: 10,
                    width: 300, height: 200,
                    alignSelf: "center",
                    justifyContent: "end",
                }}>
                    {children}
                    <TouchableOpacity onPress={onClose}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>

                {/* </View> */}

            </Modal>
        </>
    )
}
