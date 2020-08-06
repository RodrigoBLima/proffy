import React from "react";
import { Text, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { RectButton } from "react-native-gesture-handler";

import landingImg from "../../assets/images/landing.png";
import studyImg from "../../assets/images/icons/study.png";
import giveClassesImg from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

import styles from "./styles";

export default function App() {
  const { navigate } = useNavigation();

  function handleNavigatetoGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handleNavigatetoStudyPages() {
    navigate("Study");
  }
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner}></Image>

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigatetoStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyImg} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigatetoGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesImg} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de 0 conexões já realizadas ! <Image source={heartIcon} />
      </Text>
    </View>
  );
}
