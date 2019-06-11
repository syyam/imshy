import React, { Component } from "react";
import {
    View,

    StyleSheet,

    Image,


    TouchableOpacity
} from "react-native";

class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfile')}>
                    <Image
                        style={{ width: 30, resizeMode: 'contain', marginLeft: 10 }}
                        source={require('../src/Icons/Main.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Notification')}>
                    <Image
                        style={{ width: 30, resizeMode: 'contain', marginRight: 10, marginTop:5}}
                        source={require('../src/Icons/Message_Noti.png')} />
                </TouchableOpacity>
            </View>


        )
    }
}

export default Footer;


const styles = StyleSheet.create({
    footer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0


    }
})