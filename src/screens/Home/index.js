import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles.js';
import WrapperConsumer from '../../store';
import {InputSearch} from '../../components';
import Recipe from './Recipe.js';
const IMG_LOGO =
  'https://static.vecteezy.com/system/resources/previews/006/431/822/non_2x/yummy-smile-emoji-with-tongue-lick-mouth-delicious-tasty-food-symbol-for-social-network-yummy-and-hungry-icon-savory-gourmet-enjoy-food-sign-illustration-isolated-on-yellow-background-vector.jpg';
const IMG_NO_RESULT = 'https://grupoleiros.com/static/product-not-found.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };

    this.InputEmail = null;
  }

  searchRecipes() {
    const {searchText} = this.state;
    const {recipes} = this.props.context;
    let filtersRecipes = [];

    if (searchText.length === 0) {
      filtersRecipes = recipes;

      return filtersRecipes;
    }
    const textLowerCase = searchText.toLowerCase();

    filtersRecipes = recipes.filter(recipe => {
      const ingredients = recipe.ingredients.map(
        ingredient => ingredient.ingredient,
      );
      const ingredientsString = ingredients.toString();

      return (
        recipe.recipeName.toLowerCase().lastIndexOf(textLowerCase) >= 0 ||
        ingredientsString.toLowerCase().lastIndexOf(textLowerCase) >= 0
      );
    });

    return filtersRecipes;
  }

  renderRecipes() {
    const filtersRecipes = this.searchRecipes();

    if (filtersRecipes.length) {
      return (
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={filtersRecipes}
          style={styles.flatListCotainer}
          renderItem={({item}) => {
            const {recipeName, imgURL} = item;

            return (
              <Recipe
                label={recipeName}
                onPress={() => {
                  this.props.context.changeRecipe(item);
                  this.props.navigation.navigate('Detail');
                }}
                img={imgURL}
              />
            );
          }}
        />
      );
    }

    return (
      <Image
        source={{uri: IMG_NO_RESULT}}
        resizeMode="stretch"
        style={styles.imgNoFound}
      />
    );
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image
            source={{uri: IMG_LOGO}}
            resizeMode="stretch"
            style={styles.logo}
          />
          <InputSearch
            placeHolder="Busca una receta"
            getText={searchText => this.setState({searchText})}
          />

          {this.renderRecipes()}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Home.propTypes = {
  context: PropTypes.object,
};

export default WrapperConsumer(Home);
