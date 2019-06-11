import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,

} from "react-native";
import Footer from '../Components/Footer'



class UserProfileOther extends React.Component {


    static navigationOptions = {
        header: null,

    }

    constructor(props) {
        super(props);
        this.state = {

            openCamera: false,
            displayPicture: '',
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


                        <View styly={styles.pictureContainer}>

                            <TouchableOpacity
                                onPress={() => this.setState({ openCamera: true })}
                            >
                                <Image style={{
                                    marginTop: 10, width: 190,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    height: 180,
                                }}


                                    source={require('../src/dummy.jpg')}


                                />
                            </TouchableOpacity>

                            <Text style={{
                                color: '#fff', fontSize: 12, marginBottom: 20, alignSelf: 'center',
                                justifyContent: 'center',
                            }}>Alia Khan</Text>



                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Messages')}
                            >
                                <Image
                                    style={{
                                        width: 110,
                                        alignSelf: 'center',
                                        resizeMode: 'contain',
                                    }}

                                    source={require('../src/Icons/Send_Message.png')}
                                />
                            </TouchableOpacity>

                            <Text style={{
                                color: '#fff', fontSize: 12, marginTop: 20, alignSelf: 'flex-start',
                                justifyContent: 'center',
                            }}>
                                Hello my name is Alia...
                            </Text>

                            <View style={styles.socialMediaContainer}>
                                <View style={styles.facebookContainer}>
                                    <Image
                                        source={require('../src/Icons/F.png')}
                                        style={{
                                            width: 30,
                                            resizeMode: 'contain',

                                        }}>

                                    </Image>
                                    <Text style={{ color: '#fff', marginLeft: 10, fontSize: 12 }}>
                                        Follow for Facebook
                                        </Text>
                                </View>

                                <View style={styles.facebookContainer}>
                                    <Image
                                        source={require('../src/Icons/T.png')}
                                        style={{
                                            width: 30,
                                            resizeMode: 'contain',

                                        }}>

                                    </Image>
                                    <Text style={{ color: '#fff', marginLeft: 10, fontSize: 12 }}>
                                        Follow for Twitter
                                        </Text>
                                </View>
                            </View>


                        </View>

                    </View>
                    <Footer />
                </ImageBackground>
            </View>
        );
    }

}
export default UserProfileOther;

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

    pictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#fff",
        backgroundColor: 'transparent',
        height: 70,

        justifyContent: 'center',

        width: 300,

    },
    input: {
        height: 70,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
        color: "#000",
        width: 300,
        textAlignVertical: "top",
        alignItems: this.multiline ? 'flex-start' : 'center',

    },
    socialMediaContainer: {
        marginTop: 20,

        width: 300,

    },

    facebookContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40

    }


});