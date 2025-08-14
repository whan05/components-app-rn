import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../../config/theme/theme"
import { useAnimation } from "../../hooks/useAnimation";
import { CustomView } from "../../components/ui/CustomView";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";


export const Animation101Screen = () => {

   const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()
   const { colors } = useContext(ThemeContext);

  return (
    <CustomView margin style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [{
              translateY: animatedTop
            }]

          },
        ]}
      />
      <Pressable
        onPress={ () => {
          fadeIn({});
          startMovingTopPosition({ initialPosition: -100, duration: 700, easing: Easing.elastic(2)})
        } 
        }
        style={{ marginTop: 10 }}
      >
        <Text style={{color: colors.text}}>FadeIn</Text>
      </Pressable>
      <Pressable
        onPress={ () => fadeOut({ callback: animatedTop.resetAnimation()}) }
        style={{ marginTop: 10 }}
      >
        <Text style={{color: colors.text}}>FadeOut</Text>
      </Pressable>
    </CustomView>
  );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    purpleBox: {
        backgroundColor: colors.primary,
        height: 150,
        width: 150,
    }
    
})