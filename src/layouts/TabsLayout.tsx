import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TempScreen from '../screens/TempScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabIcon from '../components/TabIcon';
import { useCallback } from 'react';
import { StyleSheet, } from 'react-native';
import HomeDrawer from '../navigation/HomeDrawer';
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
    midTabBarItemContainerStyle: {
        bottom: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        backgroundColor: "#608EE9",


    },
    tabBarItemStyle: {
        alignItems: 'center',
        flexDirection: 'row',
    }
})

export default function TabsLayout() {
    const homeIcon = useCallback(({ focused }: { focused: boolean }) => (
        <TabIcon source={require("../assets/icons/card.png")} focused={focused} />
    ), []);

    const tempIcon = useCallback(({ focused }: { focused: boolean }) => (
        <TabIcon source={require("../assets/icons/icon2.png")} focused={focused} />
    ), []);


    const walletIcon = useCallback(({ focused }: { focused: boolean }) => (

        <TabIcon source={require("../assets/icons/wallet.png")} focused={focused} />

    ), []);

    const profileIcon = useCallback(({ focused }: { focused: boolean }) => (
        <TabIcon source={require("../assets/icons/profile.png")} focused={focused} />
    ), []);
    return (
        <Tab.Navigator screenOptions={{ "tabBarShowLabel": false, tabBarStyle: { height: 90 }, }}>
            <Tab.Screen name='Home' component={HomeDrawer} options={{
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarIcon: homeIcon,
                headerShown: false

            }

            } />
            <Tab.Screen name='Temp' component={TempScreen} options={{
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarIcon: tempIcon
            }} />

            <Tab.Screen name='Wallet' component={WalletScreen} options={{
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarIcon: walletIcon
            }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarIcon: profileIcon
            }} />
        </Tab.Navigator >
    )
}