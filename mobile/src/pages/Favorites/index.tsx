import React, { useState, useEffect } from "react";

import { View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import PageHeader from "../../components/PageHeader";

import AsyncStorage from "@react-native-community/async-storage";

import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </View>
  );
}
