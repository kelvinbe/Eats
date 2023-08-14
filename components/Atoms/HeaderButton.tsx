import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface IHeaderButton {
  name: string;
  onPress?: () => void;
  bottonColor: string;
  textColor: string;
  activeTab: string;
  setActiveTab: (name: string) => void
}

const generateStyles = (props: IHeaderButton) => {
  return StyleSheet.create({
    headerButton: {
      backgroundColor: props.activeTab === props.name ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    },
    headerButtonText: {
      fontSize: 15,
      fontWeight: "900",
      color: props.activeTab === props.name ? 'white' : 'black',
    },
  });
};

export default function HeaderButton(props: IHeaderButton) {
  const {name, onPress, setActiveTab} = props;
  const styles = generateStyles(props);
  return (
    <View style={styles.headerButton}>
      <TouchableOpacity onPress={() => setActiveTab(name)}>
        <Text style={styles.headerButtonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
