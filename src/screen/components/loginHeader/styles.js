import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";
import appFonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
     innerView:{
            margin:windowHeight(20),
            flex:0.4,
        },
        title:{
            fontSize:windowHeight(30),
            color:appColors.fontColor,
            textAlign:'center' ,
            fontFamily:appFonts.RobotoRegular,
          
        },
        imageView:{
            margin:windowHeight(30),
            alignItems:"center",
        },
        blankView:{
                height:windowHeight(30)
            },
})