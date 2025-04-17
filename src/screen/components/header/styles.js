import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { fontSizes, windowHeight } from "../../../theme/appConstant";
import appFonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:appColors.white,
        paddingTop:'10%',
        paddingBottom:'6%',
        paddingHorizontal:windowHeight(20),
        marginBottom:windowHeight(20)
    },
    title:{
        fontFamily:appFonts.RobotoBold,
        color:appColors.balck,
        fontSize:fontSizes.FONT24,
    },
    subTitle:{
        color:appColors.subTitle,
        fontFamily:appFonts.RobotoRegular,
        marginTop:windowHeight(3),
        fontSize:fontSizes.FONT19
    }
})