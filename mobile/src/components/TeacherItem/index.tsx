import React, { useState } from "react";
import { Text, View, Image, Linking } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unFavorite from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../../services";

import styles from "./styles";

export interface Teacher {
  avatar: string;
  bio: string;
  name: string;
  id: number;
  cost: number;
  subject: string;
  whatsapp: string;
}

interface TeacherCardProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherCardProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  
  async function handleToggleFavorited() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      // REMOVE FROM FAVORITES
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      // ADD TO FAVORITES

      favoritesArray.push(teacher);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  function handleLinkToWhatsapp() {
    api
      .post("/connections", {
        user_id: teacher.id,
      })
      .catch((error) => {
        alert("Erro em fazer conexão");
      });
    Linking.openURL(`whatsapp://phone=${teacher.whatsapp}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>

        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
        <Text style={styles.bio}>{teacher.bio}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>
            Preço/Hora {"   "}
            <Text style={styles.priceValue}> R$ {teacher.cost} </Text>
          </Text>

          <View style={styles.buttonsContainer}>
            <RectButton
              onPress={handleToggleFavorited}
              style={[
                styles.favoriteButton,
                isFavorited ? styles.favorited : {},
              ]}
            >
              {isFavorited ? (
                <Image source={unFavorite} />
              ) : (
                <Image source={heartOutlineIcon} />
              )}
            </RectButton>

            <RectButton
              onPress={handleLinkToWhatsapp}
              style={styles.contactButton}
            >
              <Image source={whatsappIcon} />
              <Text style={styles.contactButtonText}> Entrar em contato </Text>
            </RectButton>
          </View>
        </View>
    </View>
  );
};

export default TeacherItem;
