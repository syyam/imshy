import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,


} from "react-native";
import Footer from "../Components/Footer";



class Notification extends React.Component {


    static navigationOptions = {
        header: null,

    }

    constructor(props) {
        super(props);
        this.state = {


        };
    }


    componentDidMount() {

    }

    displayPicture(data) {
        const src = this.getSrc(data);
        this.setState({

        })
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



                        <View style={styles.firstRow}>
                            <View style={styles.pictureContainer}>

                                <TouchableOpacity

                                >
                                    <Image style={{
                                        width: 120, height: 100,
                                        alignSelf: 'center',
                                        justifyContent: 'center',

                                    }}

                                        source={require('../src/dummy.jpg')}

                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.firstRowColumn}>
                                <Text style={{ color: '#fff', fontSize:14 }}>
                                    Syyam Wants to connect!
                                    </Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfileOther')}>
                                        <Image
                                            style={{
                                                width: 100,
                                                alignSelf: 'flex-end',
                                                resizeMode: 'contain',

                                            }}

                                            source={require('../src/Icons/Accept_req.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            style={{
                                                width: 100,
                                                alignSelf: 'flex-end',
                                                resizeMode: 'contain',

                                            }}

                                            source={require('../src/Icons/Deny_req.png')}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>



                        </View>

                        <View style={styles.firstRow}>
                            <View style={styles.pictureContainer}>

                                <TouchableOpacity

                                >
                                    <Image style={{
                                        width: 120, height: 100,
                                        alignSelf: 'center',
                                        justifyContent: 'center',

                                    }}

                                        source={require('../src/dummy.jpg')}

                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.firstRowColumn}>
                                <Text style={{ color: '#fff', fontSize:14 }}>
                                    Syyam Wants to connect!
                                </Text>
                                <Text style={{ color: '#fff', marginTop:10, fontSize:12 }}>
                                    Hi,
                                    I saw your Profile at iMShy.
                                </Text>



                            </View>
                        </View>



                    </View>
                </ImageBackground>
            </View>
        );

    }
}
export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',

        justifyContent: 'center'
    },
    main: {
        justifyContent: 'center',
        flexGrow: 1,
        alignItems: 'flex-start',
        marginLeft: 40
    },
    logo: {
        width: 70,
        height: 55,
        position: 'absolute', top: 10
    },
    TopTextView: {
        marginTop: 20

    },
    firstRow: {
        flexDirection: 'row',
        marginTop: 30
    },
    firstRowColumn: {
        marginLeft: 10,
        marginTop: 20,
        marginRight:10,
    },
    pictureContainer: {

    },


});