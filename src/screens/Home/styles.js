import {StyleSheet, Dimensions, Platform} from 'react-native';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
const isiOS = Platform.OS === 'ios';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginTop: isiOS ? 40 : 20,
  },
  flatListCotainer: {
    height: heightScreen - 200,
  },
  imgNoFound: {
    width: 300,
    height: 200,
    marginTop: isiOS ? 40 : 20,
  },
});

export default Styles;
