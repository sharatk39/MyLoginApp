import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
class Login extends Component {
    constructor() {
        super();
    }
    componentWillMount(){
        console.warn(this.props.LoggedIn);
    }
    login = async () => {
        const { phone, password } = this.state;
        if (phone == '9876543210' && password == '123456') {
            let token = 'randomToken';
            this.props.authSuccess(token);
            this.props.navigation.navigate('loading');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.logoContainer}>
                        <Text>Login {this.props.LoggedIn}</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Mobile"
                                keyboardType='numeric'
                                textContentType='telephoneNumber'
                                maxLength={10}
                                returnKeyType='go'
                                onChangeText={(phone) => { this.setState({ phone }) }}
                                underlineColorAndroid="transparent"
                                placeholderTextColor='rgba(255,255,255,0.7)'
                            />
                        </View>
                        <View style={styles.inputBox}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                maxLength={10}
                                returnKeyType='go'
                                secureTextEntry
                                onChangeText={(password) => { this.setState({ password }) }}
                                underlineColorAndroid="transparent"
                                placeholderTextColor='rgba(255,255,255,0.7)'
                            />
                        </View>
                        <TouchableOpacity style={styles.submitButton} onPress={() => { this.login() }}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        LoggedIn: state.loggedIn
    }
}
function mapDispatchToProps(dispatch) {
    return {
        authSuccess: async (token) => {
            await AsyncStorage.setItem('@token', token);
            dispatch({ type: 'LOGIN_SUCCESS' });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2699fb'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'visible',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    formContainer: {
        padding: 20
    },
    inputBox: {
        width: '100%',
        paddingLeft: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    searchIcon: {
        padding: 10,
        color: '#fff'
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        color: '#fff',
    },
    submitButton: {
        paddingVertical: 10,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700'
    }
});