import { SelectList } from 'react-native-dropdown-select-list';
import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';

const IlacimiBul = () => {

  const [selected, setSelected] = useState("");
  
  const ilacData = [
      {key:'1', value:'Parol'},
      {key:'2', value:'Katarin'},
      {key:'3', value:'Illiadin'},
      {key:'4', value:'Majezik'},
      {key:'5', value:'Dodex'},
      {key:'6', value:'Farhex'},
      {key:'7', value:'Apranax'},
  ];

  return(
    <View style = {styles.container}>
    <SelectList style = {styles.selectList} 
        setSelected={(val) => setSelected(val)} 
        data={ilacData} 
        save="value"
        placeholder='İl'
    />
    <SelectList style = {styles.selectList}
        setSelected={(val) => setSelected(val)} 
        data={ilacData} 
        save="value"
        placeholder='İlçe'
    />
    <SelectList style = {styles.selectList}
        setSelected={(val) => setSelected(val)} 
        data={ilacData} 
        save="value"
        placeholder='İlaç Adı'
    />
    </View>
  );

};
export default IlacimiBul;
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    selectList: {
        marginBottom: 10,
    },
})