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

class InputDetailScreen extends React.Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
            time: '',
        };
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
            time: hours + ':' + min + ':' + sec
        });
    }

    render() {
        var date = new Date().getDate()
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../src/homeBG.png')}
                    style={{ width: '100%', height: '100%' }}>

                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../src/Icon.png')}

                        />

                    </View>


                    <View style={styles.main}>
                        <View style={styles.TopTextView}>
                            <Text style={{ color: '#fff', fontSize: 17 }}>Input Details</Text>
                            <Text style={{ color: '#fff', fontSize: 14, marginTop: 10 }}>LOCATION: WITHIN 1 MILE FROM CURRENT LOCATION</Text>
                            <Text style={{ color: '#fff', fontSize: 12, marginTop: 3 }}>Date: {this.state.date} </Text>
                            <Text style={{ color: '#fff', fontSize: 12, }}>Time: {this.state.time} </Text>
                        </View>

                        <View styly={styles.pictureContainer}>
                            <Text style={{ color: '#fff', fontSize: 12, marginTop: 50 }}>Take a picture (required) </Text>
                            <Image style={{
                                marginTop: 10, width: 190,
                                height: 180,
                            }}
                                source={require('../src/Icons/Upload.png')}

                            />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('InputSubmitted')}
                            >
                                <Image
                                    style={{
                                        width: 92,
                                        alignSelf: 'flex-end',
                                        resizeMode: 'contain',

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

        justifyContent: 'center'
    },

});