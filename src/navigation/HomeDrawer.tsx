/* eslint-disable react/no-unstable-nested-components */
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import HomeHeader from "../components/headers/HomeHeader";

const Drawer = createDrawerNavigator();
export default function HomeDrawer() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
                title: 'Home', headerStyle: {
                    backgroundColor: '#ffffff',
                },
                headerLeft: () => null,
                headerTitle: () => <HomeHeader navigation={navigation} />
            })} />
        </Drawer.Navigator>
    );
}