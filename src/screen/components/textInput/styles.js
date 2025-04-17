import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";
import appFonts from "../../../theme/appFonts";

export const styles = StyleSheet.create({
    container: {
        marginTop: windowHeight(11),
        marginHorizontal: windowWidth(30),
        marginBottom:4
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: appColors.white,
        borderRadius: windowHeight(7),
        elevation: 5, 
        shadowColor: appColors.shadowColor, 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingVertical:windowHeight(2)
      },
      textInput: {
        flex: 1,
        fontFamily: appFonts.RobotoRegular,
        color: appColors.fontColor,
        fontSize: fontSizes.FONT16,
        paddingHorizontal: windowWidth(20),
        paddingVertical: windowHeight(8),
      },
      label: {
        color: "#333333",
        fontSize: fontSizes.FONT20,
        marginBottom: windowHeight(5),
      },
      iconContainer: {
        padding: windowWidth(10),
       right:windowHeight(6)
      },
      inputError: {
        borderColor:appColors.error , 
        borderWidth: 1,
      },
      errorText: {
        color:appColors.error, 
        fontSize: fontSizes.FONT14,
        marginTop: windowHeight(4),
      },
})