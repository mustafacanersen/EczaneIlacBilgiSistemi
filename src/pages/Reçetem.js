import React, {useState, useMemo} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
import CheckBox from '@react-native-community/checkbox';

const Reçetem = () => {
    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'Çalışan',
            value: 'Calisan'
        },
        {
            id: '2',
            label: 'Emekli',
            value: 'Emekli'
        }
    ]), []);
    const [selectedId, setSelectedId] = useState('1');
    const [isSelected, setSelection] = useState(false);
    return(
        <View style = {styles.container}>
            <View style = {styles.body_container}>
           <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            />
            <View style={styles.checkbox}>
                <Text>Hasta Katılım Payından Muaf Mı?</Text>
                <View style = {styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                />
                <Text>Evet</Text>
                </View>
            </View>
            <View style = {styles.ilaclar}>  
            <Text>İlaç Adı - Fiyatı</Text>
            <Text>İlaç Adı - Fiyatı</Text>
            </View>
            <Text style = {styles.tutar}>Ödenecek Toplam Tutar: 0 TL</Text>
            </View>
        </View>
    );
}

export default Reçetem;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    body_container: {
        margin: 20,
    },
    ilaclar: {
        alignItems: 'center',
        marginTop: 30,
    },
    checkbox: {
        alignItems: 'center',
        marginTop: 30,
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    tutar: {
        marginTop: 30,
        fontWeight: 'bold',
        
    },
    
})