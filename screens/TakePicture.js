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

} from "react-native";
import Camera from "../Components/Camera";
import Footer from '../Components/Footer'



class TakePicture extends React.Component {


    static navigationOptions = {
        header: null,

    }

    constructor(props) {
        super(props);
        this.state = {

            openCamera: false,
            displayPicture: '',
            src: ''
        };
    }

    getSrc = (uri) => {
        return uri.length >= 1 ? { uri, isStatic: true } : require('../src/Icons/Upload.png')
    }
    componentDidMount() {
        
    }

    displayPicture(data) {
        const src = this.getSrc(data);
        this.setState({
            displayPicture: data,
            openCamera: false,
            src
        })
    }
    render() {
       
        if (this.state.openCamera)
            return (<Camera displayPicture={this.displayPicture.bind(this)} />)
        else {
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
                                <Text style={{
                                    color: '#fff', fontSize: 12, marginTop: 50, alignSelf: 'center',
                                    justifyContent: 'center',
                                }}>Take a picture (required) </Text>

                                <TouchableOpacity
                                    onPress={() => this.setState({ openCamera: true })}
                                >
                                    <Image style={{
                                        marginTop: 10, width: 190,
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        height: 180,
                                    }}


                                        source={this.state.src}


                                    />
                                </TouchableOpacity>

                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Add Message here..."
                                        multiline={true}
                                        numberOfLines={5}
                                    >

                                    </TextInput>

                                </View>


                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('ConfirmationPage')}
                                >
                                    <Image
                                        style={{
                                            width: 90,
                                            alignSelf: 'flex-end',
                                            resizeMode: 'contain',
                                            marginTop: 20

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
}
export default TakePicture;

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