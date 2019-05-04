import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.checkLogin();
    }
    checkLogin = async () => {
        const userToken = await AsyncStorage.getItem('@token');
        this.props.navigation.navigate(userToken ? 'app' : 'auth');
    };
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})