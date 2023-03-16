import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Dimensions} from 'react-native';
const widthScreen = Dimensions.get('window').width;

class Description extends Component {
  render() {
    const {step, description} = this.props;

    return <Text style={styles.label}> {`${step}${description}`} </Text>;
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontFamily: 'Century Gothic',
    textAlign: 'justify',
    width: widthScreen - 50,
    marginTop: 5,
    marginBottom: 5,
  },
});

Description.propTypes = {
  step: PropTypes.string,
  description: PropTypes.string,
};

export default Description;
