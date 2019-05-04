import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import { Input } from 'react-native-elements';

class DiscoverHomeScreen extends React.Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../src/homeBG.png')}
                    style={{ width: '100%', height: '100%' }}>

                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../src/Icon.png')}

                        />
                    </View>

                    <View style={styles.BottomContainer}>
                        <Text style={{ color: '#fff', fontSize: 17 }}>Search Location</Text>
                        <Input
                            inputStyle={{ }}
                            containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5, marginTop: 2, paddingLeft:0 }}

                            placeholder='Search Maps'
                            leftIcon={{ type: 'font-awesome', name: 'search'}}
                        />

                        <Text style={{ color: '#fff', fontSize: 17, marginTop:13, }}>Search Date</Text>
                        <Input
                            inputStyle={{   }}
                            containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5, marginTop: 2, }}

                            placeholder='4/12/12'
                        />

                        <Text style={{ color: '#fff', fontSize: 17, marginTop:13, }}>Search Time Frame</Text>
                        <Input
                            inputStyle={{ }}
                            containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5, marginTop: 2, }}

                            placeholder='12:00PM-2:00PM'
                        />

                        <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('InputSubmitted')}
                            >
                                <Image
                                    style={{
                                        width: 120,
                                        alignSelf: 'flex-end',
                                        resizeMode: 'contain',

                                    }}

                                    source={require('../src/Icons/Submit_Request.png')}
                                />
                            </TouchableOpacity>
                    </View>


                </ImageBackground>
            </View>
        );
    }
}
export default DiscoverHomeScreen;

const styles = StyleSheet.create({
    container: {
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
    BottomContainer: {
        marginLeft: 25,
        flexGrow: 1,
        marginTop:110,        
        marginRight: 25,
    },

});