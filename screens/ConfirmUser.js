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



class ConfirmUser extends React.Component {


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



                        <View styly={styles.pictureContainer}>

                            <TouchableOpacity

                            >
                                <Image style={{
                                    marginTop: 70,
                                    width: 250, height: 190,
                                    alignSelf: 'center',
                                    justifyContent: 'center',

                                }}

                                    source={require('../src/dummy.jpg')}

                                />
                            </TouchableOpacity>

                            <View style={styles.TopTextView}>
                                <Text style={{ color: '#fff', fontSize: 17 }}>Syyam jani</Text>
                                <Text style={{ color: '#fff', fontSize: 14, marginTop: 10 }}>21 year</Text>
                                <Text style={{ color: '#fff', fontSize: 12, marginTop: 3 }}>3 km{this.state.date} </Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Hy, I saw your profile at iAMSHY, You had a blue jeans and brown shoes"
                                    multiline={true}
                                    numberOfLines={5}
                                >

                                </TextInput>

                            </View>


                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('TakePicture')}
                            >
                                <Image
                                    style={{
                                        width: 90,
                                        alignSelf: 'flex-end',
                                        resizeMode: 'contain',
                                        marginTop: 10

                                    }}

                                    source={require('../src/Icons/Submit.png')}
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
export default ConfirmUser;

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
    pictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center',
        marginTop: 30
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
        marginTop: 10
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

    }

});