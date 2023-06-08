import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import Button from '../components/Button/Button';


function Anasayfa({navigation}){

    
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source={require('../assets/eibs.png')}/>
            <View style = {styles.row}>
                <Button text={"İlaç Arama"} onPress={()=>navigation.navigate('IlacArama')}/>
                <Button text={"İlacımı Bul"} onPress={()=>navigation.navigate('IlacimiBul')}/>
            </View>
            <View style = {styles.row}>
                <Button text={"Reçetem"} onPress={()=>navigation.navigate('Reçetem')}/>
                <Button text={"Nöbetçi Eczaneler"} onPress={null}/>
            </View>
            <View style = {styles.row}>
                <Button text={"Yan Etki Bildir"} onPress={null}/>
                <Button text={"İlacımı Hatırlat"} onPress={null}/>
            </View>
        </View>
    );
}

export default Anasayfa;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100,
        borderRadius: 50,
        margin: 10,
    },
    container: {
        backgroundColor: 'white',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    }
})