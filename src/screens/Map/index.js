import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from './styles.js';
import WrapperConsumer from '../../store';
import {WHITE} from '../../utils/colors';

class Category extends React.Component {
  render() {
    const {recipeSelected} = this.props.context;

    return (
      <View>
        <View style={styles.headerBack}>
          <View style={styles.contentIconHome}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Detail')}
              style={styles.iconPress}>
              <Ionicons
                name={'ios-arrow-back'}
                size={30}
                color={WHITE}
                style={styles.iconBack}
              />
            </TouchableOpacity>
            <Text style={styles.title}> Mapa </Text>
          </View>
        </View>

        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: parseFloat(recipeSelected.location.latitude),
            longitude: parseFloat(recipeSelected.location.longitude),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          minZoomLevel={5}
          maxZoomLevel={12}
          zoomControlEnabled={true}>
          <Marker
            coordinate={{
              latitude: parseFloat(recipeSelected.location.latitude),
              longitude: parseFloat(recipeSelected.location.longitude),
            }}
          />
        </MapView>
      </View>
    );
  }
}

export default WrapperConsumer(Category);
