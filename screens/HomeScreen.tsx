import React, { useRef, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';
import albumData from '../AlbumData/albumData';
import icon from '../assets/images/icon.png';

const HomeScreen = ({ navigation }) => {

    // Create references for animations
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(500)).current;

    // Run animations when the component mounts
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, slideAnim]);

    // Render each item in the FlatList
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SongDetail', { youtubeLink: item.youtubeLink })}>
            <Animated.View style={[
                styles.albumContainer,
                { opacity: fadeAnim, transform: [{ translateX: slideAnim }] },
            ]}>
                <Image source={{ uri: item.coverImage }} style={styles.albumImage} />
                <View style={styles.textContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Album:</Text>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Artist:</Text>
                        <Text style={styles.artist}>{item.artist}</Text>
                    </View>
                </View>
            </Animated.View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={icon} style={styles.iconImage} />
                <Text style={styles.header}>Music App</Text>
            </View>
            <FlatList
                data={albumData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

// Styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
    },
    iconImage: {
        width: 36,
        height: 36,
        marginRight: 10,
        marginLeft: -15,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    albumContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: 350,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden',
    },
    albumImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        marginRight: 5,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    labelContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 5,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
    artist: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
