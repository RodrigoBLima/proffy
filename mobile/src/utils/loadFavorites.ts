import React, {useState} from 'react'
import AsyncStorage from "@react-native-community/async-storage";
import { Teacher } from '../components/TeacherItem';


function loadFavorites() {
    const [favorites, setFavorites] = useState<number[]>([]);
    
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

  export default loadFavorites