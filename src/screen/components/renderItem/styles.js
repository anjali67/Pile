import { StyleSheet } from "react-native";
import { fontSizes ,  windowHeight, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

export const styles = StyleSheet.create({
        item: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor:appColors.white,
          marginVertical:windowHeight(7),
          marginHorizontal:windowHeight(12),
          borderRadius:windowHeight(8)
        },
        arrowStyle:{
          margin:windowHeight(-6)
        },
        category:{
          flexDirection:"row",
          marginRight:windowHeight(6),
          alignItems:"center",
          backgroundColor:'#F5F7FC',
          padding:windowHeight(2),
          borderRadius:windowHeight(6),
          fontSize:fontSizes.FONT16,
          paddingHorizontal:windowHeight(7),
          color:appColors.fontColor
        },
        row:{
          flexDirection:"row",
          alignItems:"center",
          marginTop:windowHeight(6)
        },

        inner:{
            paddingLeft:windowWidth(10)
        },
        image:{
          height:windowHeight(75),
          width:windowHeight(70),
          borderRadius:windowHeight(4),
          resizeMode:"cover",
        
        },
        date:{
         marginTop:windowHeight(3),
         color:appColors.date,
         fontSize:fontSizes.FONT17
        },
        textStyle:{
            color:"#828282",
            marginTop:windowHeight(3),
            fontSize:fontSizes.FONT17,
            fontWeight:"400"
        },
        innerContainer:{
          flexDirection: 'row', justifyContent: 'space-between', width: windowWidth(310)
        },
        rowContainer:{
          flexDirection:"row"
        },
        eventDetails: {
          paddingVertical:windowHeight(8),
          paddingHorizontal:windowWidth(12),
          
        },
        eventName: {
          fontSize: fontSizes.FONT19,
          fontWeight:'500',

        },
        eventDescription: {
          fontSize: 14,
          color: '#666',
        },
        heart: {
          fontSize: 24,
          marginHorizontal:windowHeight(2)
        },
        error: {
          color: 'red',
          textAlign: 'center',
          marginTop: 20,
        },
        sectionTitle: {
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 10,
        },
        favoriteItem: {
          padding: 10,
          backgroundColor: '#f0f0f0',
          marginBottom: 5,
          borderRadius: 5,
        },
        favoriteText: {
          color: 'red',
        },
      })
