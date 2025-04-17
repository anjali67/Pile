import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EventsCalender } from '../../assets/icons/Calendar_Days';
import { SearchIcon } from '../../assets/icons/search';
import { Heart } from '../../assets/icons/faviouroteIcon';
import { ProfileIcon } from '../../assets/icons/user';
import Events from '../../screen/events';
import Favourites from '../../screen/favourites';
import Profile from '../../screen/profile';
import Search from '../../screen/search';
import { windowHeight, windowWidth } from '../../theme/appConstant';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: windowHeight(55),
          paddingTop: windowHeight(12),
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          const iconProps = {
            stroke: focused ? '#21D393' : '#1A1A1A',
            strokeWidth: 2.5,
          };

          const labelStyle = {
            fontSize: windowHeight(10),
            fontWeight: focused ? '500' : '400',
            color: focused ? '#21D393' : '#1A1A1A',
            textAlign: 'center',
            width:windowWidth(100),
            marginTop: windowHeight(2),
            
          };

          let IconComponent;
          let label;

          switch (route.name) {
            case 'Search':
              IconComponent = <SearchIcon {...iconProps} />;
              label = 'Search';
              break;
            case 'Events':
              IconComponent = <EventsCalender {...iconProps} />;
              label = 'Events';
              break;
            case 'Favorites':
              IconComponent = <Heart {...iconProps} />;
              label = 'Favorites';
              break;
            case 'Profile':
              IconComponent = <ProfileIcon {...iconProps} />;
              label = 'Profile';
              break;
          }

          return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              {IconComponent}
              <Text style={labelStyle}>{label}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Favorites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
