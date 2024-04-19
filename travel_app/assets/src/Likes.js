import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-gesture-handler'
import { Link } from '@react-navigation/native'

const Likes = () => {
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.inputTxt}>Email</Text>
        <TextInput placeholder='exammple@gmail.com' value='email' style={styles.input}></TextInput>

        <Text style={styles.inputTxt}>Password</Text>
        <TextInput placeholder='paasword' value='password' style={styles.input}></TextInput>

        {/* <Link>Forget password</Link> */}

        <Button style={styles.button} title='submit'></Button>
      </View>
    </View>
  )
}

export default Likes

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:6,
    justifyContent:'center',
    alignItems:'center',
    marginTop:70
  },
  input:{
    height:40,
    width:150,
    backgroundColor:'white',
    marginTop:10

  },
  inputTxt:{
    fontSize:16,
    color:'black'
  },
  button:{
    backgroundColor:'blue',
    
  }

})