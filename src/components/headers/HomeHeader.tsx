import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeHeader({ navigation }: { navigation: DrawerNavigationProp<ParamListBase, string, undefined> }) {
    return (<View style={styles.header}>
        <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={require("../../assets/icons/home.png")} />
            </TouchableOpacity>
        </View>
        <View style={styles.notification}>
            <Image source={require("../../assets/icons/notification.png")} style={styles.icon} />
        </View>


    </View>)
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    notification: {
        width: 35,
        height: 35,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 10px"
    },
    icon: {
        width: 21
    }

})