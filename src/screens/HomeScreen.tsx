import { View, StyleSheet } from "react-native";
import CardCarousel from "../components/CardCarousel";
import QuickActions from "../components/QuickActions";

export default function HomeScreen() {
    return <View style={styles.homeContainer}>
        <View style={styles.cardCarouselContainer}>
            <CardCarousel />
        </View>
        <QuickActions />
    </View>
}
const styles = StyleSheet.create({
    homeContainer: {
    },
    cardCarouselContainer: {
    },
    quickActionsContainer: {


    }
})