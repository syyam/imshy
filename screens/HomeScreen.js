import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";

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
    }


});