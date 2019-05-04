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

class InputSubmittedScreen extends React.Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time

        };
    }
    componentDidMount() {

    }

    render() {
        var date = new Date().getDate()
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
                                style={{ marginTop:30 }}
                                
                            >
                                <Image
                                    style={{
                                        width:160,
                                        height:120
                                    }}
                                    source={require('../src/Icon.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginTop:20 }}
                                

                            >
                                <Text style={{color:'#fff', fontSize:22}}>Input Submitted</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </ImageBackground>
            </View>
        );
    }
}
export default InputSubmittedScreen;

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