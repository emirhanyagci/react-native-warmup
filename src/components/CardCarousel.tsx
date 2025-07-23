import * as React from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import DebitCard from "./DebitCard";
import { window } from "../constant/sizes";

type DebitCard = {
    type: string,
    number: string,
    expiry: string
}

function CardCarousel() {
    const progress = useSharedValue<number>(0);


    return (
        <View
            id="carousel-component"

        >
            <Carousel
                data={require("../data/mock/cards.json")}
                pagingEnabled={true}
                snapEnabled={true}
                width={window.width}
                style={{
                    width: window.width,
                    height: 220
                }}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.85,
                    parallaxScrollingOffset: 65,
                }}
                onProgressChange={progress}
                renderItem={({ item }: { item: DebitCard }) => (<DebitCard number={item.number} expiry={item.expiry} type={item.type} />)}
            />
        </View>
    );
}

export default CardCarousel;
