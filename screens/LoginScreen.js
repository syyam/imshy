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
import Splash from '../Components/Splash'


class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            UserName: "",
            UserEmail: "",
            UserPassword: "",
            checked: true,
            showSplash: true,
        }
    }

    static navigationOptions = {
        header: null
    }

    UserRegistration = () => {
        const { UserName } = this.state;
        const { UserEmail } = this.state;
        const { UserPassword } = this.state;
        const { checked } = this.state;

        console.log('functionc called')


        if (UserName) {
            console.log(UserName)

            if (UserEmail) {
                console.log(UserEmail)

                if (UserPassword) {
                    console.log(UserPassword)

                    if (checked == true) {
                        console.log('checked true')

                        fetch('http://replicapakistan.com/user_registration.php', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: UserName,
                                email: UserEmail,
                                password: UserPassword
                            })

                        }).then((response) => response.json())
                            .then((responseJson) => {
                                console.log(responseJson)

                                if (responseJson == 'Registration Successfull') {
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
        }
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
                                    <Image source={require('../src/Icons/emailIcon.png')} style={styles.inputIcons} />
                                    <TextInput
                                        autoFocus={false}
                                        onChangeText={UserEmail => this.setState({ UserEmail })}
                                        style={styles.input} placeholder="Email..."
                                        keyboardType='email-address'>
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
                                    onPress={this.UserRegistration} // Home
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
