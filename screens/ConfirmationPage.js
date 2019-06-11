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

class ConfirmationPage extends React.Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time

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

                    <TouchableOpacity style={{
                        alignSelf: 'flex-end',
                        position: 'absolute', top: 15, right: 15
                    }} onPress={() => this.props.navigation.navigate('Home')}>
                        <Image style={{

                        }}
                            source={require('../src/Icons/Cancel.png')}

                        />
                    </TouchableOpacity>


                    <View style={styles.main}>

                        <Image style={{
                            width: 240,
                            height: 160,
                            resizeMode: 'contain',


                        }}
                            source={require('../src/Icons/Logo.png')}

                        />


                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('TakePicture')}
                        >
                            <Image
                                style={{
                                    width: 100,
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
export default ConfirmationPage;

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
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    logo: {
        width: 70,
        height: 55,
        position: 'absolute', top: 10
    },

    pictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        marginTop: 20
    },



});