import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';

class Button extends Component {
  onPress() {
    this.props.onPress();
  }

  loadingRender() {
    const {loading, style, styleLabel, img} = this.props;

    if (loading) {
      return <ActivityIndicator size="large" color="black" />;
    }

    return (
      <TouchableHighlight
        style={{
          ...styles.button,
          ...style,
        }}
        onPress={this.onPress.bind(this)}>
        {img ? (
          <Image style={styles.tinyLogo} source={img} />
        ) : (
          <Text
            style={{
              ...styles.label,
              ...styleLabel,
            }}>
            {this.props.label}
          </Text>
        )}
      </TouchableHighlight>
    );
  }

  render() {
    return <View>{this.loadingRender()}</View>;
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
  style: PropTypes.object,
  styleLabel: PropTypes.object,
  img: PropTypes.any,
};

export {Button};
