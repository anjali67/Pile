import { View, Text,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { styles } from './styles'
import { toggleFavorite , saveFavorites } from '../../../redux/eventSlice'
import { useSelector , useDispatch } from 'react-redux';
import { Share } from '../../../assets/icons/share';
import { Arrow } from '../../../assets/icons/arrow';
import { Heart } from '../../../assets/icons/heart_outline';

export default function RenderItem({item}) {
     const dispatch = useDispatch();
    const {  favorites } = useSelector((state) => state.event);

  return (
    <View style={styles.item}>
      <View style={styles.eventDetails}>
        <View style={styles.rowContainer}>
         <Image source={{uri:item.event_profile_img}} style={styles.image}/>
          <View style={styles.inner}>
            <View style={styles.innerContainer}>
            <Text style={styles.eventName}>{item.event_name}</Text>
            <View style={styles.arrowStyle}><Arrow/></View> 
            </View>
       
          <View style={styles.innerContainer}>
              <Text style={styles.date}>
                {item.readable_to_date
                  ? `${item.readable_from_date} - ${item.readable_to_date}`
                  : item.readable_from_date}
              </Text>
              <Text style={styles.textStyle}>{`${item.city}, ${item.country}`}</Text>
            </View>

            <Text style={styles.textStyle}>
              {item.event_price_from === 0 && item.event_price_to === 0
                ? 'Free'
                : `€${item.event_price_from} - €${item.event_price_to}`}
            </Text>
            
        <View style={styles.innerContainer}>
          <View style={styles.row}>{item.danceStyles.map((ds,index) => (<Text style={styles.category} key={index}>{ds.ds_name}</Text>))}</View>
    <View style={styles.row}>
    <Share/>
    <TouchableOpacity onPress={() => {
    dispatch(toggleFavorite(item.event_date_id));
    dispatch(saveFavorites());
    }}
    > 
        <Text style={styles.heart}>
          {favorites.includes(item.event_date_id) ? <Heart fill={'#21D393'}/> :  <Heart/>}
        </Text>
      </TouchableOpacity>
    </View>
        </View>
         </View>
        </View>  
      </View>
    </View>
  )
}


