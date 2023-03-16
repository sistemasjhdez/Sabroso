import {StyleSheet, Dimensions, Platform} from 'react-native';
import {WHITE, YELLOW, BLACK} from '../../utils/colors';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
const isiOS = Platform.OS === 'ios';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBack: {
    backgroundColor: YELLOW,
    width: '100%',
    height: 70,
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: WHITE,
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    width: widthScreen - 100,
  },
  contentIconHome: {
    marginTop: isiOS ? 25 : 10,
    height: heightScreen * 0.07,
    backgroundColor: YELLOW,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  iconPress: {
    height: 30,
    width: 30,
  },
  containerImage: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    width: widthScreen - 30,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 30,
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleSection: {
    color: BLACK,
    fontFamily: 'Century Gothic',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 22,
    width: 250,
    marginLeft: 15,
    marginTop: 15,
  },
  flatListIngredients: {
    marginLeft: 15,
    marginTop: 15,
  },
  description: {
    color: BLACK,
    fontFamily: 'Century Gothic',
    textAlign: 'justify',
    fontSize: 18,
    width: widthScreen - 30,
    marginLeft: 15,
    marginTop: 15,
  },
  buttonMaps: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: widthScreen,
  },
  textButton: {
    color: WHITE,
    backgroundColor: YELLOW,
    fontFamily: 'Century Gothic',
    textAlign: 'center',
    fontSize: isiOS ? 20 : 18,
    width: 250,
    fontWeight: 'bold',
    height: 50,
    padding: 8,
    overflow: 'hidden',
    borderRadius: 15,
  },
});

export default Styles;
