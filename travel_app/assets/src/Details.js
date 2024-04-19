import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../colors/colors'
import { Entypo } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

const Details = ({ route, navigation }) => {
  const { item } = route.params

  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Entypo name='chevron-left' size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name='location-pin' color={colors.white} size={24} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name='heart' size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}> hours</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonWrapper} onPress={() => alert('You booked a trip!')}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between'
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40

  },
  titleText: {
    fontSize: 32,
    color: colors.white
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5

  },
  locationText: {
    fontSize: 16,
    color: colors.white
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20
  },
  descriptionTitle: {
    fontSize: 24,
    color: colors.black
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    color: colors.darkGray
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop:5
  },
  infoItem: {

  },
  infoTitle: {
    fontSize: 12,
    color: colors.gray
  },
  infoTextWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'flex-end'
  },
  infoText: {
    fontSize: 24,
    color: colors.orange
  },
  infoSubText: {
    fontSize: 14,
    color: colors.gray
  },
  buttonText:{
    fontSize: 14,
    color: colors.white
  },
  buttonWrapper:{
    marginHorizontal:20,
    marginTop:30,
    backgroundColor:colors.orange,
    alignItems:'center',
    paddingVertical:15,
    borderRadius:10
  }
})