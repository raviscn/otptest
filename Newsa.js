import React, { useState, useEffect } from 'react'
import { Button, Text, TouchableOpacity, View, Platform, SafeAreaView, KeyboardAvoidingView, StatusBar, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Getotpcss';
import styless from './Logincss';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
const NOTSIGNIN = 'You are NOT logged in';
const SIGNEDIN = 'You have logged in successfully';
const SIGNEDOUT = 'You have logged out successfully';
const WAITINGFOROTP = 'Enter OTP number';
const VERIFYNUMBER = 'Verifying number (Country code +XX needed)';
function Newsa() {
    const navigation = useNavigation();
    const [message, setMessage] = useState('Welcome to Demo');
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [otp, setOtp] = useState('');
    const [number, setNumber] = useState('');
    const password = Math.random().toString(10) + 'Abc#';
    useEffect(() => {
        verifyAuth();
    }, []);
    const verifyAuth = () => {
        Auth.currentAuthenticatedUser()
            .then((user) => {
                setUser(user);
                setMessage(SIGNEDIN);
                setSession(null);
            })
            .catch((err) => {
                console.error(err);
                setMessage(NOTSIGNIN);
            });
    };
    const signOut = () => {
        if (user) {
            Auth.signOut();
            setUser(null);
            setOtp('');
            setMessage(SIGNEDOUT);
        } else {
            setMessage(NOTSIGNIN);
        }
    };
    const signIn = () => {
        setMessage(VERIFYNUMBER);
        Auth.signIn(number)
            .then((result) => {
                setSession(result);
                setMessage(WAITINGFOROTP);
            })
            .catch((e) => {
                if (e.code === 'UserNotFoundException') {
                    signUp();
                } else if (e.code === 'UsernameExistsException') {
                    setMessage(WAITINGFOROTP);
                    signIn();
                } else {
                    console.log(e.code);
                    console.error(e);
                }
            });
    };
    const signUp = async () => {
        const result = await Auth.signUp({
            username: number,
            password,
            attributes: {
                phone_number: number,
            },
        }).then(() => signIn());
        return result;
    };
    const verifyOtp = () => {
        Auth.sendCustomChallengeAnswer(session, otp)
            .then((user) => {
                setUser(user);
                setMessage(SIGNEDIN);
                setSession(null);
            })
            .catch((err) => {
                setMessage(err.message);
                setOtp('');
                console.log(err);
            });
    };
    const hula = () => {
        verifyOtp();
        navigation.navigate('webview');
    }
    return (
        <View>
            <Text>{message}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​</Text>
            {!user && !session && (
                <View>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
                        <View style={styless.container}>
                            <StatusBar backgroundColor="#5566ee" barStyle="light-content" />
                            <SafeAreaView style= {  styless.headerwraper}>
                            <View style={styless.header}>
                                    <View>
                                        <Icon name="chevron-left" size={24} style={styless.iconWhite} />
                                    </View>
                                    <View >
                                        <Text style={styless.headertext}>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
                                         Send code</Text>
                                    </View>
                                    <View style={{ width: 20 }} />
                                </View>
                                <View style={styless.headert}>
                                 
                                </View>
                            </SafeAreaView>
                            <View style={styless.content}>
                                <View>
                                    <Text style={styless.title}>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Personal info</Text>
                                </View>
                                <View style={styless.input}>
                                    <TextInput keyboardType={'phone-pad'}
                                        placeholder="(+xx)your Phone number"
                                        placeholderTextColor='#ababab'
                                        value={number}
                                        onChangeText={setNumber}
                                    />
                                </View>
                                <View>
                                    <Text style={styless.description}>
                                    we will send you averification code to your phone number</Text>
                                </View>
                                <View style={styless.buttonwrapper}>
                                    <TouchableOpacity style={styless.button} onPress={signIn}>
                                        <Icon name="arrow-right" size={25} style={styless.iconbutton} />
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                        <TouchableOpacity style={{
                                            padding: 20, backgroundColor: '#5566ee',
                                            marginRight: 25,
                                            borderRadius: 10,
                                        }} onPress={verifyAuth}>
                                            <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>
                                            am i sign in?</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                            padding: 20, backgroundColor: '#5566ee', borderRadius: 10,
                                            marginRight: 10
                                        }} onPress={signOut}>
                                            <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>
                                            Sign Out</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            )}
            {!user && session && (
                <View>
                    <KeyboardAvoidingView style={styles.container}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
                        <View style={styles.container}>
                            <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
                            <SafeAreaView>
                                <View style={styles.header}>
                                    <TouchableOpacity>
                                        <Icon name="chevron-left" size={24} style={styles.headericon} />
                                    </TouchableOpacity>
                                    <View >
                                        <Text style={styles.headertitle}>
                                        Verification code</Text>
                                    </View>
                                    <View style={{ width: 20, }} />
                                </View>
                            </SafeAreaView>
                            <View>
                                <View style={styles.svgWrapper}>
                                    <Svg viewBox="0 0 1440 320">
                                        <Path fill="#5566ee" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                                    </Svg>
                                </View>
                            </View>
                            <View style={styles.content}>
                                <Text style={styles.otptitle}>
                                Conformation</Text>
                                <Text style={styles.otpdescription}>
                                please type the varification code</Text>
                                <View style={styles.input}>
                                    <TextInput keyboardType={'phone-pad'}
                                        placeholder="Enter 6 digit otp"
                                        placeholderTextColor='#ababab'
                                        maxLength={6}
                                        value={otp}
                                        onChangeText={setOtp}
                                    />
                                </View>
                                <TouchableOpacity style={styles.button}>
                                    <Icon name="chevron-right" size={24} style={styles.iconbutton} onPress={verifyOtp} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            )}
        </View>
    )
}
export default Newsa;