import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

class Ingredient extends Component {
  render() {
    const {quantity, ingredient} = this.props;

    return (
      <View>
        <Text style={styles.label}> {`${quantity} ${ingredient}`} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50,
    height: 150,
    margin: 20,
  },
  label: {
    height: 28,
    fontSize: 18,
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
  },
});

Ingredient.propTypes = {
  quantity: PropTypes.string,
  ingredient: PropTypes.string,
  onPress: PropTypes.func,
};

export default Ingredient;
