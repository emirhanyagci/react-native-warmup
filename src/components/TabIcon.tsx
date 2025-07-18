import { Image, View, StyleSheet, ImageSourcePropType } from "react-native";

const styles = StyleSheet.create({
    container: {

    },
    icon: {
        width: 25,
        height: 25,
    },
    focused: {
        tintColor: '#608EE9',
    },
    unfocused: {
        tintColor: '#D4D8E2',
    },
    static: {
        tintColor: "#ffffff"
    }
})
export default function TabIcon({ focused, source, isStatic }: { focused?: boolean, source: ImageSourcePropType, isStatic?: boolean }) {



    return (
        <View style={styles.container}>
            <Image
                source={source}
                resizeMode='contain'
                style={[
                    styles.icon,
                    isStatic
                        ? styles.static
                        :
                        focused
                            ? styles.focused
                            : styles.unfocused,
                ]}
            />
        </View>
    );
}