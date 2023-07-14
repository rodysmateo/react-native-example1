import React, { PureComponent } from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGTH = 0.61 * height;
const styles = StyleSheet.create({
    container: {
        width,  
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "Bold",
        color: "white",
        textAlign: "center"
    }
});
interface SlideProps {
    label: string,
    rigth?: boolean
}

const Slide = ({ label, rigth }: SlideProps) => {
    const transform = [
            {translateY: (SLIDE_HEIGTH - 100) / 2 }, 
            {translateX: rigth ? width / 2 -50 : -width / 2 + 50 },
            { rotate: rigth ? "-90deg" : "90deg" }
        ];
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    )
}  

export default Slide;