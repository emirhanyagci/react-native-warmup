import { StyleSheet, Text } from "react-native"

export default function SectionTitle({ title }: { title: string }) {
    return <Text style={styles.title}>{title}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: "bold"
    }
})