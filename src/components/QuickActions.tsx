import Ionicons from 'react-native-vector-icons/Ionicons';
import SectionTitle from "./SectionTitle";
import SectionContainer from "./SectionContainer";
import ActionCard from "./ActionCard";
import { ScrollView, StyleSheet } from 'react-native';

const actions = [
    {
        icon: <Ionicons name="call" size={30} color="#38D79F" />,
        bgColor: "rgba(56,215,159,0.08)",
        text: "Mobile Recharge"
    },
    {
        icon: <Ionicons name="card" size={30} color="#FF6E66" />,
        bgColor: "rgba(255,110,102,0.08)",
        text: "Bill Payments"
    }, {
        icon: <Ionicons name="paper-plane" size={30} color="#FFC633" />,
        bgColor: "rgba(255,198,51,0.08)",
        text: "Bank Transfer"
    }
    , {
        icon: <Ionicons name="cash" size={30} color="#6B75FF" />,
        bgColor: "rgba(54,66,218,0.08)",
        text: "Request Money"
    }, {
        icon: <Ionicons name="stats-chart" size={30} color="#6D5FFE" />,
        bgColor: "rgba(218,54,202,0.08)",
        text: "Transaction History"
    }
]
export default function QuickActions() {
    return <SectionContainer>
        <SectionTitle title="Frequently Used" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            {actions.map(({ icon, bgColor, text }) => (<ActionCard Icon={icon} color={bgColor} text={text} />))}
        </ScrollView>



    </SectionContainer>
}

const styles = StyleSheet.create({
    scrollContainer: {
        gap: 25
    }
})