import { View, StyleSheet } from "react-native";
import CardCarousel from "../components/CardCarousel";
import QuickActions from "../components/QuickActions";
import Service from "../components/Service";

export default function HomeScreen() {
    return <View style={styles.homeContainer}>
        <View style={styles.cardCarouselContainer}>
            <CardCarousel />
        </View>
        <QuickActions />
        <Service />
    </View>
}
const styles = StyleSheet.create({
    homeContainer: {
        gap: 40
    },
    cardCarouselContainer: {
    },
    quickActionsContainer: {


    }
})