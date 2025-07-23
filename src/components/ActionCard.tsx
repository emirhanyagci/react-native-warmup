import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ({ Icon, color, text }: { Icon: React.ReactElement, color: string, text: string }) {
    return <TouchableOpacity style={styles.container}>
        <View style={{ ...styles.card, backgroundColor: color }} >
            {Icon}

        </View>
        <Text style={styles.subText}>{text}</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        gap: 10
    },

    card: {
        width: 80,
        height: 80,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    subText: {
        maxWidth: 80,
        textAlign: "center"
    }
})