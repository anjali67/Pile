import { StyleSheet } from "react-native";
import { fontSizes , windowHeight , windowWidth } from "../../../theme/appConstant";
import appFonts from "../../../theme/appFonts";
import appColors from "../../../theme/appColors";

export default styles = StyleSheet.create({
    signInView: {
        marginTop: windowHeight(38),
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight(20),
        marginBottom: windowHeight(7),
      },
      img: {
        width: windowWidth(430),
        height: windowHeight(2.4),
      },
      orText: {
        textAlign: 'center',
        fontFamily: appFonts.RobotoRegular,
        fontSize: fontSizes.FONT19,
        color:appColors.content ,
        position: 'absolute',
        marginHorizontal: windowWidth(30),
        padding: windowHeight(8),
        backgroundColor: appColors.white,
      },
      blank: {
        height: windowHeight(36),
      },
      textStyle: {
        fontSize: fontSizes.FONT19,
        marginBottom: windowHeight(10),
      },
      container:{
        backgroundColor:appColors.white,
          borderRadius: windowHeight(4),
              elevation: 5, 
              shadowColor: appColors.shadowColor, 
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              paddingVertical:windowHeight(13),
              alignItems:"center",
              justifyContent:"center",
              margin:windowHeight(10),
              paddingHorizontal:windowHeight(15)
      },
      mainView:{
        flexDirection:"row",
        marginTop:windowHeight(2),
        alignItems:"center",
        justifyContent:"center"
      },
      guestView:{
       alignItems:"flex-end", 
       marginTop:windowHeight(9)
      },
      guestText:{
        fontFamily: appFonts.RobotoRegular,
        fontSize: fontSizes.FONT19,
        color:appColors.content ,
        marginHorizontal:windowWidth(20),
        marginTop:windowHeight(8)
      }


})