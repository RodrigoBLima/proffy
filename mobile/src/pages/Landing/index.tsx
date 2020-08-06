import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";

import studyImg from "../../assets/images/icons/study.png";
import giveClassesImg from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner}></Image>

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyImg} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesImg} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.totalConnections}>
        Total de 0 conexões já realizadas ! <Image source={heartIcon} />
      </Text>
    </View>
  );
}
