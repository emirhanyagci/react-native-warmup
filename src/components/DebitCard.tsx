import { Text, View, StyleSheet, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

export default function DebitCard({ number, expiry, type }: { number: string, expiry: string, type: string }) {
    return (
        <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 1.0 }} colors={['#1E1D1D', '#535353']} style={styles.card}>
            <Image source={require("../assets/images/visa-soft.png")} style={styles.bgImage} />
            <View style={{ gap: 8 }}>
                <Text style={styles.cardText}>**** **** **** {number.slice(-4)}</Text>
                <Text style={styles.cardBoldText}>{type}</Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.cardText}>Exp {expiry}</Text>
                <Image source={require("../assets/images/visa.png")} />
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    card: {
        height: 220,
        borderRadius: 20,
        color: "#ffffff",
        padding: 35,
        justifyContent: "space-between"
    },
    bgImage: {
        position: "absolute",
        right: 0,
        resizeMode: "cover",
    },
    cardFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardText: {
        fontSize: 18,
        color: "white"
    },
    cardBoldText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18
    }
})