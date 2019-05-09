import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";


class DiscoverHomeScreen extends React.Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isTimePickerVisible: false,
            selectedDate: "00-00-0000",
            selectedTime: "00:00-00:00",
        };
    }


    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
    };

    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };
    showTimePicker = () => {
        this.setState({ isTimePickerVisible: true });
    };

    hideTimePicker = () => {
        this.setState({ isTimePickerVisible: false });
    };

    handleDatePicked = date => {

        this.setState({ selectedDate: moment(date).format('DD-MM-YYYY') });
        this.hideDatePicker();
    };

    handleTimePicked = time => {
        var timeRange = moment(time).format('HH:mm') + "-" + moment(time).add(2, 'hours').format('HH:mm')
        this.setState({ selectedTime: timeRange });
        this.hideTimePicker();
    };


    render() {
        const { isDatePickerVisible, isTimePickerVisible, selectedDate, selectedTime } = this.state;
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

                    <View style={styles.BottomContainer}>
                        <Text style={{ color: '#fff', fontSize: 17 }}>Search Location</Text>



                        <View style={styles.inputBox}>

                            <View style={styles.inputRow}>
                                <TouchableOpacity>
                                    <Image source={require('../src/Icons/search.png')} style={styles.inputIcons} />
                                </TouchableOpacity>
                                <Text

                                    style={styles.input}

                                >
                                    Search Maps...
                                </Text>

                            </View>

                        </View>

                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 13, }}>Search Date</Text>

                        <View style={styles.inputBox}>

                            <View style={styles.inputRow}>

                                <Text
                                    style={styles.input}
                                >
                                    {selectedDate}
                                </Text>
                                <TouchableOpacity onPress={this.showDatePicker}>
                                    <Image source={require('../src/Icons/Date.png')} style={styles.dropDown}
                                    />
                                    <DateTimePicker
                                        isVisible={isDatePickerVisible}
                                        onConfirm={this.handleDatePicked}
                                        onCancel={this.hideDatePicker}
                                        datePickerModeAndroid={'spinner'}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 13, }}>Search Time Frame</Text>


                        <View style={styles.inputBox}>

                            <View style={styles.inputRow}>
                                <Text

                                    style={styles.input}
                                >
                                    {selectedTime}

                                </Text>
                                <TouchableOpacity style={{ width: 30 }} onPress={this.showTimePicker}>
                                    <Image source={require('../src/Icons/time.png')} style={styles.dropDown} />
                                    <DateTimePicker
                                        isVisible={isTimePickerVisible}
                                        onConfirm={this.handleTimePicked}
                                        onCancel={this.hideTimePicker}
                                        mode={'time'}
                                        is24Hour={false}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>




                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('PotCon')}
                        >
                            <Image
                                style={{
                                    width: 120,
                                    alignSelf: 'flex-end',
                                    resizeMode: 'contain',

                                }}

                                source={require('../src/Icons/Submit_Request.png')}
                            />
                        </TouchableOpacity>
                    </View>


                </ImageBackground>
            </View >
        );
    }
}
export default DiscoverHomeScreen;

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
    logo: {
        width: 70,
        height: 55,
        position: 'absolute', top: 10
    },
    BottomContainer: {
        marginLeft: 25,
        flexGrow: 1,
        marginTop: 110,
        marginRight: 25,
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
        justifyContent: 'center'
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    input: {
        width: 290,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        fontSize: 15,
    },
    inputIcons: {
        marginLeft: 10
    },
    dropDown: {
        marginRight: 10,
    },


});