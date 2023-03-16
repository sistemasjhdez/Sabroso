import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {YELLOW} from '../../utils/colors';

const isiOS = Platform.OS === 'ios';

class Item extends Component {
  onPress() {
    this.props.onPress();
  }

  loadingRender() {
    const {img} = this.props;

    return (
      <TouchableHighlight
        style={styles.container}
        onPress={this.onPress.bind(this)}>
        <View>
          <Image source={{uri: img}} resizeMode="cover" style={styles.img} />
          <Text style={styles.label}> {this.props.label} </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return <View>{this.loadingRender()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50,
    height: 150,
    margin: 20,
  },
  img: {
    width: Dimensions.get('window').width - 50,
    height: '100%',
    borderRadius: 10,
  },
  label: {
    overflow: 'hidden',
    marginTop: -20,
    borderRadius: isiOS ? 10 : 10,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: YELLOW,
    width: '100%',
  },
});

Item.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  img: PropTypes.any,
};

export default Item;
