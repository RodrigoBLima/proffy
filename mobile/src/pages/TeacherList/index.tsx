import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import api from "../../services/index";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";

export default function TeacherList() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useEffect(() => {
    api.get("proffys").then((res) => {
      console.log(res.data);
      setTeachers(res.data);
    });
  }, []);

  function setFiltersVisible() {
    setFilterVisible(!filterVisible);
  }
  
  useFocusEffect(() => {
    loadFavorites();
  });

  async function handleFiltersSubmit() {
    // console.log({
    //   week_day,
    //   subject,
    //   time,
    // });

    loadFavorites();

    try {
      const response = await api.get("/classes", {
        params: {
          week_day,
          subject,
          time,
        },
      });
      // console.log('*********')
      // console.log(response.data)
      // console.log('*********')
      setFilterVisible(false);
      setTeachers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={setFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {filterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Matéria"
              value={subject}
              onChangeText={(text) => {
                setSubject(text);
              }}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia?"
                  onChangeText={(text) => setWeekDay(text)}
                  value={week_day}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual horário?"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>
            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
