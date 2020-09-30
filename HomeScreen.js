import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {

    render(){

        this.props.navigation.setOptions({ 
            headerBackTitle: '',
            headerShown: false ,
        })

        return(
            <View style={styles.container}>
        <Image
          style={{ width:"100%", height: 300 }}
          source={require('./assets/images/login-logo.png')}
          resizeMode="contain"
        />

        <Text style={{ fontSize: 40, fontWeight: 'bold' }} >Hello!</Text>
        <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center', marginHorizontal: 20 }} >Welcome to Login tutorial. A video of designing login screen</Text>

        <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
          <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('Login') }
            style={{ backgroundColor: '#0d47a1', padding: 10, width:150, borderRadius: 30, marginHorizontal: 2 }}
          >
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18 }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#FFF', padding: 10, width:150, borderRadius: 30, marginHorizontal: 2, borderWidth: 1, borderColor: '#0d47a1' }}
          >
            <Text style={{ textAlign: 'center', color: '#0d47a1', fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>
          
        </View>

        <Text style={{ fontSize: 16, marginTop: 10 }}>Or via social media</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
          </View>
          <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#f44336', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G</Text>
          </View>
          <View style={{ height: 40, width: 40, borderRadius: 40/2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>in</Text>
          </View>
        </View>


      </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})