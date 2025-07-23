import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from "react-native";

export default function Service() {
    return <SectionContainer>
        <SectionTitle title="Service" />
        <View style={styles.cardsWrapper}>
            <ServiceCard Icon={<Ionicons name="duplicate-outline" size={20} color="#F66F47" />} color="#FDEEEA" text="Open Account" />
            <ServiceCard Icon={<Ionicons name="card-outline" size={20} color="#4CA6A8" />} color="#E4F3F4" text="Open Account" />
        </View>
    </SectionContainer>
}

const styles = StyleSheet.create({
    cardsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20
    }
})