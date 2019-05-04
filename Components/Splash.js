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

class Splash extends React.Component {


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
                <ImageBackground source={require('../src/splash.png')}
                    style={{ width: '100%', height: '100%' }}>

                    

                </ImageBackground>
            </View>
        );
    }
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    buttonsView: {

        justifyContent: 'center',

        alignItems: 'center'
    }


});