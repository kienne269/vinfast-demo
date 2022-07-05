import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Pressable, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link } from '@react-navigation/native';
import TextInput from '../component/TextInput';
import Button from '../component/Button';
import {COLORS} from '../constants/index'
import { login } from '../redux/user/userSlice';
import { useDispatch, useSelector} from  'react-redux'
import { selectUser } from '../redux/user/userSlice';
import accountApi from '../api/account';

const Login = ({ navigation }) => {
  
  const dispatch = useDispatch(); 
  const user = useSelector(selectUser)
  const [checked, setChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  const handleSubmit = async () => {
    try {
        const res = await accountApi.login(email, password)
        setIsLogin(typeof(res.data) === 'object')

        if(typeof(res.data) === 'object') {
          navigation.navigate('Auth')
          dispatch(login({
            user_id: res.data.user_id,
            email: email,
            password: password,
            username: res.data.user_name,
            role: res.data.role,
            loggedIn: true,
          }))
        } else {
          alert("lỗi")
        }
    } catch(err) {
        alert(err)
    }
  }
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        backgroundColor: COLORS.white
      }}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={{marginVertical: 50}}>
          <Image 
              style={{width: 70, height: 70}}
              source={{uri:'http://192.168.234.1/images/logo-header.png'}}
          />
        </View>
        <Text style={{color: COLORS.black, fontWeight: '600', textAlign: 'center', fontSize: 26, marginBottom: 40 }}>
          Đăng nhập
        </Text>
        <View style={{ paddingHorizontal: 20, marginBottom: 20, width: '100%' }}>
          <TextInput
            icon='mail'
            placeholder='Email'
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
            keyboardAppearance='dark'
            returnKeyType='next'
            returnKeyLabel='next'
            onChangeText={(value) => {
              setEmail(value)
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 20, marginBottom: 20, width: '100%' }}>
          <TextInput
            icon='key'
            placeholder='Mật khẩu'
            secureTextEntry
            autoCompleteType='password'
            autoCapitalize='none'
            keyboardAppearance='dark'
            returnKeyType='go'
            returnKeyLabel='go'
            onChangeText={(value) => {
              setPassword(value)
            }}
          />
        </View>
        <View>
          <Button colorText="fff" disabled={email === "" && password === ""} backgroundColor="#ccc" label='Đăng nhập' onPress={handleSubmit} />
        </View>
        <View style={{paddingHorizontal: 20, width: '100%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
          <Pressable
              style={styles.button}
              onPress={() => alert(124)}
          >
              <Link to={{ screen: 'Car' }}>
                  <Text style={styles.text}>Quên mật khẩu</Text>
              </Link>
          </Pressable>
          <Pressable
              style={styles.button}
              onPress={() => alert(124)}
          >
              <Link to={{ screen: 'SignIn', }}>
                  <Text style={styles.text}>Tạo tài khoản</Text>
              </Link>
          </Pressable>
        </View>
      {/* </TouchableWithoutFeedback>   */}
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: COLORS.white,
        elevation: 0
    },
    text: {
        fontSize: 13,
        fontWeight: '600',
        textTransform: 'uppercase',
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: COLORS.blue,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: COLORS.blue,
    },
})