import React, {useState, useEffect} from 'react';
import { TextInput, Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';


 const IlacArama = () => {
    
     data = [
        { id: 1, name: 'Parol' },
        { id: 2, name: 'Katarin' },
        { id: 3, name: 'Illiadin' },
        { id: 4, name: 'Dodex' },
        { id: 5, name: 'Majezik' },
        { id: 6, name: 'Farhex' },
        { id: 7, name: 'Apranax' },
      ]; 
    const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [showList, setShowList] = useState(false);

    const filterData = searchTerm => {
        const filtered = data.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
      }; 

    useEffect(() => {
        filterData(searchTerm);
        setShowList(searchTerm.length >= 3);
      }, [searchTerm]);
    
    
    return(
        <View style = {styles.container}>
        <TextInput style = {styles.input}
            placeholder="İlacın adını yazın.."
            onChangeText={text => {
            setSearchTerm(text);
            filterData(text);
            }}
            value={searchTerm}
        />
        {showList && (
        <FlatList style = {styles.FlatList}
            data={filteredData}
            renderItem={({ item }) => (<TouchableOpacity onPress={null}>
            <Text style = {styles.result}>{item.name}</Text>
            </TouchableOpacity>
            )}
            ItemSeparatorComponent={<View style = {styles.seperator}/>}
            keyExtractor={item => item.id.toString()}
        />
    )}
    </View>
    )
 }
 export default IlacArama;

 const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    input: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        borderColor: '#CDC5C3'
    },
    seperator: {
        borderWidth:1,
        borderColor: 'e0e0e0',
    },
    result: {
        fontWeight: 'bold',
    },
    FlatList: {
        marginLeft:10,
    }
 })