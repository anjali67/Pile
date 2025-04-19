import { View, Text  , ScrollView,TouchableOpacity, ActivityIndicator,KeyboardAvoidingView} from 'react-native'
import React , {useState} from 'react'
import styles from './styles';
import SocialLogin from '../components/socialLogin';
import TextInputView from '../components/textInput';
import { ValidateEmail , ValidPassword } from '../../utills/Validation';
import { useSelector,useDispatch } from 'react-redux';
import { loginUser } from '../../redux/authSlice';
import { displayMessage } from '../../utills/function';
import LoginHeader from '../components/loginHeader';

export default function LoginScreen({navigation}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [emailError,setEmailerror] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const {loading} = useSelector((state) => state.auth)
    const dispatch = useDispatch()

  const handleLogin =  async() => {
      try {
        const emailValidationError =  ValidateEmail(email)
        const passwordValidationError = ValidPassword(password)
        if(emailValidationError || passwordValidationError) {
               setEmailerror(emailValidationError)
               setPasswordError(passwordValidationError)
               return
        }
        const response = await dispatch(loginUser({ email, password })).unwrap();  
        if (response) {
          setEmail("")
          setPassword("")
          displayMessage({ message:response.message || 'Login successful!'})
          navigation.navigate('BottomTab')
        } else {
          console.log(":response.message",response.message)
           displayMessage({ message:response.message || 'Login failed',type: "danger"})
        }
      } catch (error) {
        displayMessage({ message: error?.message || String(error), type: "danger" })
}}


  return (
   <KeyboardAvoidingView style={styles.container}>
         <LoginHeader/>
         <ScrollView contentContainerStyle={{paddingBottom:40}} style={styles.bottomView}>
            <TextInputView value={email} label={'Email'} placeholder={'email@gmail.com'} onChangeText={(text) => {
               setEmail(text)
            }}
            onBlur={() => setEmailerror(ValidateEmail(email))}
            error={emailError}
            />
            <TextInputView value={password} label={'Password'} placeholder={'******'}  secureTextEntry onChangeText={(text) => {
                setPassword(text)
            }}
            onBlur={() => setPasswordError(ValidPassword(password))}
            error = {passwordError}
            />
           <View style={styles.forgotView}>
             <View>
               <Text style={styles.forgotText}>Forgot Password?</Text>
               <TouchableOpacity style={styles.buttonView} onPress={() => handleLogin()}>
                {
                  loading ? <ActivityIndicator color={'white'}/> : <Text style={styles.button}>Sign In</Text>   
                }
            
               </TouchableOpacity>
             </View>
           </View>
           <View style={styles.signUp}>
             <Text>
               Not a member?{' '}
               <TouchableOpacity>
                 <Text style={styles.signUpText}>Sign Up Here</Text>
               </TouchableOpacity>
             </Text>
           </View>
           <SocialLogin navigation={navigation} />
         </ScrollView>
       </KeyboardAvoidingView>
  )
}