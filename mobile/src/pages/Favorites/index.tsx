import React from "react";
import { Text, View, Image } from "react-native";
import PageHeader from "../../components/PageHeader";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}
