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

class VisionScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../src/blackBG.png')}
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


                    <View style={styles.buttonsView}>
                        <TouchableOpacity
                            style={{ marginTop: 30 }}

                        >
                            <Image
                                style={{
                                    
                                }}
                                source={require('../src/giphy.gif')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginBottom:15 }}
                            onPress={() => this.props.navigation.navigate('InputDetail')}

                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>Tap To Record Input</Text>
                        </TouchableOpacity>
                    </View>



                </ImageBackground>
            </View >
        );
    }
}
export default VisionScreen;

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