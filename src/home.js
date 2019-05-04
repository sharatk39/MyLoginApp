import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerTitleStyle: { fontSize: 16 },
        headerStyle: {
            backgroundColor: '#2699fb',
            elevation: 0
        },
        headerTintColor: '#fff',
    });
    constructor() {
        super();
    }
    onLogout = async () => {
        await AsyncStorage.clear();
        this.props.logout();
        this.props.navigation.navigate('auth');
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onLogout}
                    title="LOGOUT"
                    color="#841584"
                />
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        loggedIn: state.loggedIn
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: async () => {
            dispatch({ type: 'LOGOUT' });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});