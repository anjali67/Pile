import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import { windowHeight , windowWidth , fontSizes } from "../../theme/appConstant";
import appFonts from "../../theme/appFonts";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:appColors.lightGray
    },
   
    bottomView:{
        backgroundColor:"white",flex:1,
        paddingTop:windowHeight(20),
    },
    forgotText: {
          color: appColors.placeholder,
          fontSize: fontSizes.FONT18,
          
        },
        forgotView:{
                flexDirection:"row",
                justifyContent:"flex-end",
                marginVertical:windowHeight(7),
                marginHorizontal:windowHeight(14)
        },
        buttonView:{
         marginTop:windowHeight(20),
         backgroundColor:appColors.button,
         paddingHorizontal:windowHeight(6),
         alignItems:"center",
         justifyContent:"center",
         borderRadius:windowHeight(5),
         paddingVertical:windowHeight(7),
         marginHorizontal:windowWidth(10)
        },
        button:{
            color:appColors.white,
            fontFamily:appFonts.RobotoMedium,
            fontSize:fontSizes.FONT20
        },
        signUp:{
           marginHorizontal:windowHeight(20),
            flexDirection:"row",
            justifyContent:"flex-end",
            bottom:windowHeight(3),
            alignItems:"center"
        },
        signUpText:{
            textDecorationLine:"underline",top:windowHeight(3)
        }
})