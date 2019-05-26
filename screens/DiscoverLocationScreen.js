import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    AsyncStorage
} from "react-native";


import MapView, { Marker } from 'react-native-maps';

import Geocoder from 'react-native-geocoding';

import { PermissionsAndroid } from 'react-native';

async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Location Permission',
                'message': 'This App needs access to your location ' +
                    'so we can know where you are.'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use locations ")
        } else {
            console.log("Location permission denied")
        }
    } catch (err) {
        console.warn(err)
    }
}


class DiscoverLocationScreen extends Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {


            mapRegion: null,
            lastLat: null,
            lastLong: null,

            search: '', //ye
        };
    }

    componentDidMount() {
        requestLocationPermission()
        this.watchID = navigator.geolocation.watchPosition((position) => {
            // Create the object to update this.state.mapRegion through the onRegionChange function
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            }
            console.log("current:" + region.latitude + " " + region.longitude)
            this.onRegionChange(region, region.latitude, region.longitude);
        }, (error) => console.log(error));


    }
    onRegionChange(region, lastLat, lastLong) {
        this.setState({
            mapRegion: region,
            // If there are no new values set the current ones
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onUserPinDragEnd(data) {
        console.log(data)
        this.setState({
            lastLong: data.longitude,
            lastLat: data.latitude
        })

    }

    updateValue = data => {
        console.log("User's data", data);
        this.setState({ search: data.search }, () => console.log(this.state.search))
    }

    //runs when user submits data
    getData = () => { 

   
        const searchQuery = JSON.parse(JSON.stringify(this.state.search));
        console.log(searchQuery);

        // Initialize the module (needs to be done only once)
        Geocoder.init("AIzaSyAX9sQf7e9D3xiQpGvD0XJHJOfxnMstcJo"); // use a valid API key
       

        Geocoder.from(searchQuery)
    
            .then(json => {
                
                const jsonResponse = JSON.parse(JSON.stringify(json.results[0].geometry.location));
                console.log('parsed responses:',jsonResponse);

        
                let region = {
                    latitude: jsonResponse.lat, 
                    longitude: jsonResponse.lng,
                    latitudeDelta: 0.00922 * 1.5,
                    longitudeDelta: 0.00421 * 1.5
                }
                
                this.setState({
                    lastLat: jsonResponse.lat,
                    lastLong:jsonResponse.lng,
                    mapRegion:region
                },()=>console.log("last coordinates",[this.state.lastLat,this.state.lastLong]))


                this._storeData()
                
                
            })
            .catch(error => console.warn(error));
    }

    _storeData = async () => {
        try {
          await AsyncStorage.setItem('lng', parseInt(this.state.lastLong).toString());
          await AsyncStorage.setItem('lat', parseInt(this.state.lastLat).toString());
        } catch (error) {
          console.log(error)
        }
      };
    render() {

        return (
            <View style={styles.containerTop}>
                <ImageBackground source={require('../src/homeBG.png')}
                    style={{ width: '100%', height: '100%' }}>

                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../src/Icon.png')}

                        />
                    </View>

                    <TouchableOpacity style={{
                        alignSelf: 'flex-end',
                        position: 'absolute', top: 15, right: 15
                    }} onPress={() => this.props.navigation.goBack()}>
                        <Image style={{

                        }}
                            source={require('../src/Icons/Cancel.png')}

                        />
                    </TouchableOpacity>

                    <View style={styles.BottomContainer}>
                        <Text style={{ color: '#fff', fontSize: 17 }}>Search Location</Text>
                        <View style={styles.inputBox}
                            onPress={() => this.props.navigation.navigate('DiscoverLocation')}>

                            <View style={styles.inputRow}>
                                <TouchableOpacity>
                                    <Image source={require('../src/Icons/search.png')} style={styles.inputIcons} />
                                </TouchableOpacity>
                                <TextInput

                                    style={styles.input}
                                    returnKeyType='go'
                                    placeholder="Search Maps..."
                                    onChangeText={search => this.updateValue({ search })}
                                    value={this.state.search}
                               
                                >

                                </TextInput>

                            </View>

                        </View>
                        <TouchableOpacity
                            onPress={this.getData} 
                        >
                            <Image
                                style={{
                                    width: 90,
                                    alignSelf: 'center',
                                    resizeMode: 'contain',
                                    marginTop: 10

                                }}

                                source={require('../src/Icons/Submit.png')}

                            
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container}>
                        <MapView
                            style={styles.map}
                            region={
                                this.state.mapRegion
                            }
                            onRegionChange={this.onRegionChange.bind(this)}
                            showsUserLocation={true}
                            followUserLocation={true}
                        >
                            <Marker
                                coordinate={{
                                    latitude: (this.state.lastLat + 0.00000),
                                    longitude: (this.state.lastLong + 0.00000)
                                }}
                                title={"My location"}
                                description={"Hey!"}
                                draggable
                                onDragEnd={(coords) => this.onUserPinDragEnd(coords.nativeEvent.coordinate)}
                                title={'You are here'}
                            />
                        </MapView>
                    </View>



                </ImageBackground>
            </View >
        );
    }
}
export default DiscoverLocationScreen;

const styles = StyleSheet.create({
    containerTop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',

        justifyContent: 'center'
    },
    logo: {
        width: 70,
        height: 55,
        position: 'absolute', top: 10
    },
    map: {
        marginLeft: 5,
        // flexGrow: 1,
        marginTop: 110,
        marginRight: 5,
    },

    container: {
        height: 500,
        width: "100%",
        marginLeft: 10,
        marginRight: 10,

        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

    BottomContainer: {
        marginLeft: 5,
        // flexGrow: 1,
        marginTop: 110,
        marginRight: 5,
    },
    inputBox: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 5,
        justifyContent: 'center'
    },
    inputRow: {
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 25,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },

    input: {
        paddingLeft: 10,
        paddingRight: 10,
        width: 290,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        fontSize: 15,
    },
    inputIcons: {
        marginLeft: 8
    },

});