import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';
import WrapperConsumer from '../../store';
import {WHITE} from '../../utils/colors';
import Ingredient from './Ingredient.js';
import Description from './Description.js';
import {Button} from '../../components';

class Shops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      modalPromotions: false,
    };

    this.InputEmail = null;
  }

  render() {
    const {recipeSelected} = this.props.context;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerBack}>
          <View style={styles.contentIconHome}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.iconPress}>
              <Ionicons
                name={'ios-arrow-back'}
                size={30}
                color={WHITE}
                style={styles.iconBack}
              />
            </TouchableOpacity>
            <Text style={styles.title}> {recipeSelected.recipeName} </Text>
          </View>
        </View>
        <View style={styles.containerImage}>
          <Image
            source={{uri: recipeSelected.imgURL}}
            resizeMode="stretch"
            style={styles.image}
          />
        </View>

        <Text style={styles.titleSection}>Ingredientes:</Text>

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={recipeSelected.ingredients}
          style={styles.flatListIngredients}
          renderItem={({item}) => {
            const {quantity, ingredient} = item;

            return <Ingredient quantity={quantity} ingredient={ingredient} />;
          }}
        />

        <Text style={styles.titleSection}>Preparación:</Text>

        <FlatList
          keyExtractor={item => item.step.toString()}
          data={recipeSelected.concoction}
          style={styles.flatListIngredients}
          renderItem={({item}) => {
            const {step, description} = item;

            return <Description step={step} description={description} />;
          }}
        />

        <View style={styles.buttonMaps}>
          <Button
            onPress={() => this.props.navigation.navigate('Map')}
            styleLabel={styles.textButton}
            label="Mapa"
          />
        </View>
      </ScrollView>
    );
  }
}

Shops.propTypes = {
  context: PropTypes.object,
};

export default WrapperConsumer(Shops);
