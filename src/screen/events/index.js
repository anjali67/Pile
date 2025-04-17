import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents , loadFavorites } from '../../redux/eventSlice';
import { styles } from './styles';
import Header from '../components/header';
import RenderItem from '../components/renderItem';

export default function Events() {
  const dispatch = useDispatch();
  const { events, loading, error  } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(loadFavorites())
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <RenderItem item={item}/>
  );

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.error}>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Header/>
     <FlatList
        data={events.events}
        renderItem={renderItem}
        keyExtractor={(item) => item.event_date_id.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No events found</Text>}
      />
    </View>
  );
}
