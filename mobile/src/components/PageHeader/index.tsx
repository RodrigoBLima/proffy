import React from "react";
import { Text, View, Image } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import backImg from "../../assets/images/icons/back.png";

import logoImg from "../../assets/images/logo.png";

import styles from "./styles";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backImg} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;
