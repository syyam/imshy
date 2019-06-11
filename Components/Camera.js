import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { RNCamera } from 'react-native-camera';


class Camera extends React.Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={{
                        flex: 1,
                        width: '100%',
                    }}
                    type={RNCamera.Constants.Type.front}
                >
                </RNCamera>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    takePicture = async function () { 
        if (this.camera) {
            
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options); 
            this.props.displayPicture(data.uri)           
            console.log(data.uri);
        }
    };
}
export default Camera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    buttonsView: {

        justifyContent: 'center',

        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },

});