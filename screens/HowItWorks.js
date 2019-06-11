import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text


} from "react-native";
import Footer from "../Components/Footer";



class HowItWorks extends React.Component {




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

                        <Text style={{ color: '#fff', fontSize: 22 }}>
                            Sample text
                        </Text>
                    </View>
                    <Footer navigation={this.props.navigation} />
                </ImageBackground>
            </View>
        );

    }
}
export default HowItWorks;

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
        flexGrow: 0.7,
    },
    logo: {
        width: 70,
        height: 55,
        position: 'absolute', top: 10
    },
    TopTextView: {
        marginTop: 20

    },


});