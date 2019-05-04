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


class LoginScreenReal extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            checked: false
            
        }
    }
        static navigationOptions = {
            header: null
        }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../src/loginBG.png')}
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
                                onPress={() => this.props.navigation.navigate('Home')}
                            >
                                <Image
                                    style={{
                                        flex: 1,
                                        width: 92,
                                        resizeMode: 'contain',
                                        marginRight:16

                                    }}
                                    source={require('../src/Icons/Sign_In.png')}
                                />
                            </TouchableHighlight>
                        </View>



                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Text style={{
                                color: '#fff', fontSize: 12, alignItems: 'center',
                                justifyContent: 'center',
                                alignContent: 'stretch',
                                marginTop: 20
                            }}>Click here to create an account</Text>
                        </TouchableOpacity>
                    </View>



                </ImageBackground>
            </View>
        );
    }
}
export default LoginScreenReal;

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
        paddingLeft:5,
        paddingRight:5,
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