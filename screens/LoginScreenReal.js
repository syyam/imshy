import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from "react-native";
import { CheckBox } from 'react-native-elements'


class LoginScreenReal extends Component {

    constructor() {
        super();
        this.state = {
            UserName: "",
            UserPassword: "",
            checked: true

        }
    }
    static navigationOptions = {
        header: null
    }

    userLogin = () => {
        const { UserName } = this.state;
        const { UserPassword } = this.state;
        if (UserName) {
            if (UserPassword) {
                fetch('http://replicapakistan.com/user_login.php', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: UserName,
                        password: UserPassword
                    })

                }).then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson == 'Done') {
                            this.props.navigation.navigate('Home');
                        }
                        else {
                            Alert.alert(responseJson);
                        }
                    }).catch((error) => {
                        console.error(error);
                    });
            }
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../src/loginBG.png')}
                    style={{ width: '100%', height: '100%' }}>

                    <View style={styles.Container}>
                        <View style={styles.LogoContainer}>
                            <Image style={styles.logo}
                                source={require('../src/Icons/Logo.png')}

                            />
                        </View>
                        <Image
                            style={{}}
                            source={require('../src/DP.png')}

                        />

                        <View style={styles.inputBox}>

                            <View style={styles.inputRow}>
                                <Image source={require('../src/Icons/userIcon.png')} style={styles.inputIcons} />
                                <TextInput
                                    autoFocus={false}
                                    onChangeText={UserName => this.setState({ UserName })}
                                    style={styles.input}
                                    placeholder="Username..."
                                >
                                </TextInput>
                            </View>
                            <View style={styles.inputRow}>
                                <Image source={require('../src/Icons/passwordIcon.png')} style={styles.inputIcons} />
                                <TextInput
                                    onChangeText={UserPassword => this.setState({ UserPassword })}
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
                                onPress={this.userLogin}
                            >
                                <Image
                                    style={{
                                        flex: 1,
                                        width: 92,
                                        resizeMode: 'contain',
                                        marginRight: 16

                                    }}
                                    source={require('../src/Icons/Sign_In.png')}
                                />
                            </TouchableHighlight>
                        </View>

                        <Text style={{
                            color: '#fff', fontSize: 12,
                            alignItems: 'flex-end',
                            marginTop: 10
                        }}>Forgot password? Click here.</Text>


                        <Text style={{
                            color: '#fff', fontSize: 12,
                            alignItems: 'flex-end',
                            marginTop: 10
                        }}>OR</Text>

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

        marginTop: 5,
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
    Container: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',

    },
    LogoContainer: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 190,
        width: 140,

        resizeMode: 'contain'

    },


});
