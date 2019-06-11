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



class Messages extends React.Component {


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
                                    width: 120, height: 100,
                                    alignSelf: 'center',
                                    justifyContent: 'center',

                                }}

                                    source={require('../src/dummy.jpg')}

                                />
                            </TouchableOpacity>

                            <View style={styles.chatBox}>
                                <View style={styles.chatRowRight}>
                                    <Text style={{alignSelf:'flex-end',backgroundColor:'#fff', paddingLeft:10, paddingRight:20, color:'#000'}}>
                                        Hi, How are you?
                                    </Text>

                                </View>

                                <View style={styles.chatRowLeft}>
                                    <Text style={{alignSelf:'flex-start',backgroundColor:'#fff', paddingLeft:10, paddingRight:20, color:'#000'}}>
                                        Fine bro. Yeet.!!!
                                    </Text>

                                </View>

                            </View>


                        </View>


                    </View>
                </ImageBackground>
            </View>
        );

    }
}
export default Messages;

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
        flexGrow: 0.4,
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
    },
    chatBox:{
        marginTop:50,
        height:20,
        justifyContent: 'flex-end',
    },
    chatRowRight:{
        marginRight:10,
        borderRadius: 8,
        backgroundColor:'#fff',
        padding:5,
        alignSelf:'flex-end',

    },
    chatRowLeft:{
        marginLeft:10,
        borderRadius: 8,
        backgroundColor:'#fff',
        padding:5,
        alignSelf:'flex-start',

    }

});