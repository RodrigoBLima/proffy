import React from 'react'
import { Text, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import PageHeader from '../../components/PageHeader';

export default function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"/>
        </View>
    )
}
