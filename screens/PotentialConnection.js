import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import Footer from "../Components/Footer";



class PotentialConnection extends Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
            time: '',
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


                    <View style={styles.mainContainer}>

                        <Image
                            style={{
                                width: 90,
                                resizeMode: 'contain',
                                marginTop: 40

                            }}

                            source={require('../src/dummy.jpg')}
                        />

                        <View style={styles.subContainer}>
                            <Text style={{
                                color: '#fff', fontSize: 15, marginTop:20
                            }}>Syyam Jan</Text>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ConfirmUser')}
                            >
                                <Image
                                    style={{
                                        width: 95,
                                        resizeMode: 'contain',
                                        marginTop: 5

                                    }}

                                    source={require('../src/Icons/Connect.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <Footer navigation={this.props.navigation}/>
                </ImageBackground>
            </View>
        );
    }
}
export default PotentialConnection;

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
    mainContainer: {
        marginTop:20,
        marginLeft:30,
        alignItems: 'center',
        flexDirection:'row',
        
    },

    logo: {
        width: 70,
        height: 55,
        position: 'absolute', top: 10
    },
    TopTextView: {
        justifyContent: 'center',

    },

    subContainer:{
        marginLeft:15,
        justifyContent:'center'
    }


});