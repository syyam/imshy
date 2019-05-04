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
import { CheckBox } from 'react-native-elements'
import  Splash  from '../Components/Splash'


class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            checked: false,
            showSplash: true,
        }
    }
    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ showSplash: false })
        }, 4000)
    }
    render() {
        if (this.state.showSplash)
            return (<Splash />)
        else {
            return (

                <View style={styles.container}>
                    <ImageBackground source={require('../src/BG.png')}
                        style={{ width: '100%', height: '100%' }}>

                        <View style={styles.logoContainer}>
                            <Image style={styles.logo}
                                source={require('../src/Icons/Logo.png')}

                            />
                            <Image
                                style={{ marginTop: 65 }}
                                source={require('../src/DP.png')}

                            />

                            <View style={styles.inputBox}>
                                <View style={styles.inputRow}>
                                    <Image source={require('../src/Icons/userIcon.png')} style={styles.inputIcons} />
                                    <TextInput
                                        autoFocus={false}
                                        onChangeText={(text) => this.setState({ name: text })}
                                        style={styles.input}
                                        placeholder="Username..."
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.inputRow}>
                                    <Image source={require('../src/Icons/emailIcon.png')} style={styles.inputIcons} />
                                    <TextInput
                                        autoFocus={false}
                                        onChangeText={(text) => this.setState({ email: text })}
                                        style={styles.input} placeholder="Email..."
                                        keyboardType='email-address'>
                                    </TextInput>
                                </View>
                                <View style={styles.inputRow}>
                                    <Image source={require('../src/Icons/passwordIcon.png')} style={styles.inputIcons} />
                                    <TextInput
                                        onChangeText={(text) => this.setState({ password: text })}
                                        style={styles.input}
                                        placeholder="Password..."
                                        secureTextEntry={true}>
                                    </TextInput>
                                </View>
                            </View>

                            <View style={styles.checkButtonView}>
                                <CheckBox

                                    checked={this.state.checked}
                                    onPress={() => this.setState({ checked: !this.state.checked })}
                                />

                                <Text style={{ color: '#fff', fontSize: 10, marginRight: 45 }}>I agree to the terms and conditions</Text>
                                <TouchableHighlight
                                    onPress={() => this.props.navigation.navigate('Home')} // Home
                                >
                                    <Image
                                        style={{
                                            flex: 1,
                                            width: 92,
                                            resizeMode: 'contain',
                                            marginRight: 16
                                        }}
                                        source={require('../src/Icons/Sign_Up.png')}
                                    />
                                </TouchableHighlight>
                            </View>


                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                <View style={{ width: 100, height: 1, backgroundColor: '#fff', marginRight: 14, alignSelf: 'center' }}></View>
                                <Text style={{ color: '#fff', fontSize: 12, }}> Or Connect With</Text>
                                <View style={{ width: 100, height: 1, backgroundColor: '#fff', marginLeft: 14, alignSelf: 'center' }}></View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        resizeMode: 'contain'

                                    }}
                                    source={require('../src/Icons/F.png')}
                                />
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        resizeMode: 'contain',
                                        marginLeft: 10,
                                        marginRight: 10
                                    }}
                                    source={require('../src/Icons/T.png')}
                                />
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        resizeMode: 'contain'
                                    }}
                                    source={require('../src/Icons/G.png')}
                                />



                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('LoginReal')}
                            >
                                <Text style={{
                                    color: '#fff', fontSize: 12, alignItems: 'center',
                                    justifyContent: 'center',
                                    alignContent: 'stretch',
                                    marginTop: 20
                                }}>Already have an account? Sign in</Text>
                            </TouchableOpacity>
                        </View>



                    </ImageBackground>
                </View>
            );
        }
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        backgroundColor: '#fff',
        alignItems: 'center',

        marginTop: 17,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    inputIcons: {
        marginLeft: 10
    },
    input: {
        width: 300,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        fontSize: 16,
    },

    checkButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'stretch',
        marginTop: 5
    },
    buttonText: {

        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 140,
        height: 100,

    },


});