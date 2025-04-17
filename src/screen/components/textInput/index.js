import { View, TextInput, Text,TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import appColors from '../../../theme/appColors'
import { Eye } from '../../../assets/icons/eye'
import { EyeOff } from '../../../assets/icons/eyeOff'
import { styles } from './styles'

export default function TextInputView(props) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={[styles.inputContainer,  props.error && ({borderColor:appColors.error,borderWidth:1})]}>
        <TextInput
          value={props.value}
          onBlur={props.onBlur}
          style={styles.textInput}
          placeholder={props.placeholder}
          underlineColorAndroid="transparent"
          placeholderTextColor={appColors.placeholder}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry && !showPassword} 
          onChangeText={props.onChangeText}
        />
        {props.secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
            {showPassword  ? <Eye /> :  <EyeOff /> }
          </TouchableOpacity>
        )}
      </View>
      {props.error ? <Text style={styles.errorText}>{props.error}</Text> : null}
    </View>
  )
}
