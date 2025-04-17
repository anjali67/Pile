import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import RenderItem from '../components/renderItem';
import Header from '../components/header';


export default function Favourites() {
  const { events, favorites } = useSelector((state) => state.event);
  const favoriteEvents = events?.events?.filter((event) =>
    favorites.includes(event.event_date_id)
  );
  
  const renderItem = ({ item }) => (
      <RenderItem item={item}/>
    );

  return (
    <View style={styles.container}>
      <Header/>
      <FlatList
        data={favoriteEvents}
        renderItem={renderItem}
        keyExtractor={(item) => item.event_date_id.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No favorite events</Text>}
      />
    </View>
  );
}
