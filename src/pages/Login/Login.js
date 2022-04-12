import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { colors } from 'theme';
import AuthService from '../../services/AuthService';
import { login } from 'slices/app.slice'
import { useSelector, useDispatch } from 'react-redux'


const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightGrayPurple,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        margin: 10,
        fontSize: 20,
        backgroundColor: '#b3b3b3',
        width: '80%',
        padding: 15,
        borderRadius: 30
    },
    buttonContainer: {
        backgroundColor: '#2a80db',
        width: '80%',
        padding: 10,
        borderRadius: 30,
        margin: 10,
        marginBottom: 80
    },
    loginButton: {
        fontSize: 20,
        backgroundColor: 'red',
        color: 'white',
        width: '80%'
    }
})

const Login = ({ navigation }) => {

    const { checked, premiumUser, loggedIn } = useSelector((state) => state.app)

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayGenericLoginError, setDisplayGenericLoginError] = useState(false);

    return (
        <View style={styles.root}>
            <Text style={styles.title}>ClockedIn</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.nativeEvent.text)
                }}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                onChange={(e) => setPassword(e.nativeEvent.text)}
            />
            <View style={styles.buttonContainer}>
                <Button
                    color={"white"}
                    title="Login"
                    style={{ backgroundColor: 'red' }}
                    onPress={async () => {

                        const authData = await AuthService.login(email, password);
                        if (!authData) {
                            return setDisplayGenericLoginError(true);
                        }

                        dispatch(login(authData));
                    }}
                />
            </View>
        </View>
    )
}

Login.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
}

Login.defaultProps = {
    navigation: { navigate: () => null }
}

export default Login;
