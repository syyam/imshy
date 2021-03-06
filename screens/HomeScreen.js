import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,

    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import Footer from '../Components/Footer'


class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null
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


                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('HowItWorks')}
                        >
                            <Text style={{
                                color: '#fff', fontSize: 22, alignItems: 'center',
                                justifyContent: 'center',
                                alignContent: 'stretch',
                                marginTop: 10,
                                textDecorationLine: 'underline',
                            }}>How Does it Work?</Text>
                        </TouchableOpacity>


                        <View style={styles.buttonsView}>
                            <TouchableOpacity
                                style={{ marginTop: 90 }}
                                onPress={() => this.props.navigation.navigate('Vision')}
                            >
                                <Image
                                    style={{
                                        resizeMode: 'contain',
                                        width: 250
                                    }}
                                    source={require('../src/Icons/BE_BOLD.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginTop: 20 }}
                                onPress={() => this.props.navigation.navigate('DiscoverHome')}
                            >
                                <Image
                                    style={{
                                        resizeMode: 'contain',
                                        width: 250
                                    }}
                                    source={require('../src/Icons/DISCOVER.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <Footer navigation={this.props.navigation}/>
                    </View>



                </ImageBackground>
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 70,
        height: 55,

        position: 'absolute', top: 10
    },
    buttonsView: {

        justifyContent: 'center',

        alignItems: 'center'
    },



});