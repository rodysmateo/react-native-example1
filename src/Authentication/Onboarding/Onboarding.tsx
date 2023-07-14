import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, interpolateColor, useAnimatedScrollHandler }  from 'react-native-reanimated';

import Slide, {SLIDE_HEIGTH} from "../Onboarding/Slide";

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGTH,
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1
    }
});

const Onboarding = () => {
    // const scroll = useRef<Animated.ScrollView>(null);
    const colorX = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        colorX.value = event.contentOffset.y;
      });
    const backgroundColor = interpolateColor(colorX.value,
        [0, width, width * 2, width * 3],
        ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"],
    );
        return (
        <View style={styles.container} >
            <Animated.View style={[styles.slider,  { backgroundColor } ]}>
                <Animated.ScrollView 
                    horizontal snapToInterval={width} 
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                    >
                   <Slide label="Relaxed" />
                   <Slide label="Playful" rigth />
                   <Slide label="Excentric" />
                   <Slide label="Funky" rigth />
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View 
                    style={{...StyleSheet.absoluteFillObject, backgroundColor }}
                />
                <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}
                />
            </View>
        </View>
    )
};

export default Onboarding;