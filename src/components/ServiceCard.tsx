import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ServiceCard({ Icon, text, color }: { Icon: React.ReactElement, text: string, color: string }) {
    return <TouchableOpacity style={styles.card}>

        <View>
            <View style={{ ...styles.iconWrapper, backgroundColor: color }}>
                {Icon}
            </View>
        </View>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    card: {
        flex: 0.5,
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: 20,
        justifyContent: "flex-start",
        gap: 10,
        borderRadius: 16,
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 16
    }
})