import { Button, StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import colors from '../colors/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, Feather } from '@expo/vector-icons'
import profile from '../images/person.png'
import discoverData from '../data/discoverData'
import activitiesData from '../data/activitivesData'
import learnMoreData from '../data/learnMoreData'

Feather.loadFont();
Entypo.loadFont();

const Home = ({ navigation }) => {
    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {
                item: item
            })}>
                <ImageBackground source={item.image} style={[styles.discoverItem, { marginLeft: item.id === 'discover-1' ? 20 : 0 },]} imageStyle={styles.discoverItemImage}>
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo name='location-pin' size={18} color={colors.white} />
                        <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderActivityItem = ({ item }) => {
        return (
            <View style={[styles.activityWrapperItems, { marginLeft: item.id === 'activities-1' ? 20 : 0, }]}>
                <Image source={item.image} style={styles.activitiesItemImage}></Image>
                <Text style={styles.activitiesItemText}>{item.title}</Text>
            </View>
        )
    }
    const renderLearnMoreItem = ({ item }) => {
        return (
            <ImageBackground
                source={item.image} style={[styles.learnMoreItem, { marginLeft: item.id === 'learnMore-1' ? 20 : 0, }]} imageStyle={styles.learnMoreItemImage}>
                <Text style={styles.learnMoreItemText}>{item.title}</Text>
            </ImageBackground>
        )
    }



    return (
        <View style={styles.container}>
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <Feather name='menu' size={32} color={colors.black} style={styles.menuIcon} />
                        <Image source={profile} style={styles.profileImage} />

                    </View>
                </SafeAreaView>

                <View style={styles.discoverWrapper}>
                    <Text style={styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCatWrapper}>
                        <Text style={[styles.discoverCatText, { color: colors.orange }]} > All</Text>
                        <Text style={styles.discoverCatText}>Destinations</Text>
                        <Text style={styles.discoverCatText}>Cities</Text>
                        <Text style={styles.discoverCatText}>Experiences</Text>
                    </View>
                    <View style={styles.discoverWrapperItems}>
                        <FlatList data={discoverData}
                            renderItem={renderDiscoverItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false} />
                    </View>
                    <View style={styles.activitiesWrappers}>
                        <Text style={styles.activitiesTitle}>Activities</Text>
                        <View style={styles.activitiesWrapperItems}>
                            <FlatList data={activitiesData}
                                renderItem={renderActivityItem}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false} />
                        </View>
                    </View>

                    <View style={styles.learnMoreWrapper}>
                        <Text style={styles.learnMoreTitle}>Learn More</Text>
                        <View style={styles.learnMoreWrapperItems}>
                            <FlatList data={learnMoreData}
                                renderItem={renderLearnMoreItem}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false} />
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white,
    },
    menuWrapper: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImage: {
        width: 52,
        height: 52,
        borderRadius: 10
    },
    discoverWrapper: {
        // marginHorizontal: 20,
        marginTop: 20,
    },
    discoverTitle: {
        fontSize: 32,
        marginHorizontal: 20,
        fontWeight: 'bold'

    },
    discoverCatWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20
    },
    discoverCatText: {
        marginRight: 30,
        fontSize: 16,
        color: colors.gray
    },
    discoverItemImage: {
        borderRadius: 20
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20
    },
    discoverWrapperItems: {
        paddingVertical: 20,


    },
    discoverItemTitle: {
        fontSize: 18,
        color: colors.white

    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontSize: 14,
        color: colors.white
    },
    discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    activitiesTitle: {
        marginHorizontal: 20,
        fontSize: 24,
        color: colors.black,
        fontWeight: 'bold'
    },
    activityWrapperItems: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20
    },
    activitiesItemImage: {
        width: 36,
    },
    activitiesItemText: {
        marginTop: 5,
        fontSize: 15,
        color: colors.gray
    },
    learnMoreWrapper: {
        marginTop: 10
    },
    learnMoreWrapperItems:{
        paddingVertical:20
    },
    learnMoreTitle: {
        marginHorizontal: 20,
        fontSize: 24,
        color: colors.black,
        fontWeight: 'bold'
    },
    learnMoreItem: {
        width: 170,
        height: 180,
        justifyContent: 'flex-end',
        marginRight: 20
    },
    learnMoreItemImage: {
        borderRadius: 20

    },
    learnMoreItemText: {
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 10,
        marginVertical: 20

    }
})