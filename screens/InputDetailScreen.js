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


class InputDetailScreen extends React.Component {


    static navigationOptions = {
        header: null,

    }

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
            time: '',
            openCamera: false,
            displayPicture: '', // ye intial he right?
            src:''
        };
    }

    getSrc = (uri) => {
        return uri.length >= 1 ? {uri, isStatic: true} : require('../src/Icons/Upload.png')
    }
    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        that.setState({
            //Setting the value of the date time
            date: date + '/' + month + '/' + year,
            time: hours + ':' + min + ':' + sec,
            src: require('../src/Icons/Upload.png')
        });// ye nae chal rae
        
    }

    displayPicture(data) {
        const src = this.getSrc(data);
        this.setState({
            displayPicture: data,
            openCamera: false,
            src 
        })
    }
//cant find variable src
    render() {
        var date = new Date().getDate()
        //
        if (this.state.openCamera)
            return (<Camera displayPicture={this.displayPicture.bind(this)} />) 
        else {
            //console.log(this.state.src);
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
                            <View style={styles.TopTextView}>
                                <Text style={{ color: '#fff', fontSize: 17 }}>Input Details</Text>
                                <Text style={{ color: '#fff', fontSize: 14, marginTop: 10 }}>LOCATION: WITHIN 1 MILE FROM CURRENT LOCATION</Text>
                                <Text style={{ color: '#fff', fontSize: 12, marginTop: 3 }}>Date: {this.state.date} </Text>
                                <Text style={{ color: '#fff', fontSize: 12, }}>Time: {this.state.time} </Text>
                            </View>

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
                                        placeholder="Enter Brief Message"
                                        placeholderTextColor="#FFF"
                                        multiline={true}
                                        numberOfLines={5}
                                    >

                                    </TextInput>
                           
                                </View>


                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('InputSubmitted')}
                                >
                                    <Image
                                        style={{
                                            width: 90,
                                            alignSelf: 'center',
                                            resizeMode: 'contain',
                                            marginTop: 40

                                        }}

                                        source={require('../src/Icons/Submit.png')}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>

                    </ImageBackground>
                </View>
            );
        }
    }
}
export default InputDetailScreen;

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
        justifyContent: 'center',

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

        width: 200,
        marginTop: 10
    },
    input: {
        height: 70,
        backgroundColor: 'transparent',
        paddingLeft: 15,
        paddingRight: 15,
        color: "#fff",
        width: 200,
        textAlignVertical: "top",
        alignItems: this.multiline ? 'flex-start' : 'center',

    }

});