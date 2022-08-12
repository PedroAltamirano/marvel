import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import tw from 'twrnc';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleSearch = ({nativeEvent}) => {
    console.log(nativeEvent);
    if (nativeEvent?.key === 'Enter') {
      console.log('searching...');
    }
  };

  return (
    <View style={tw`flex flex-row mb-2`}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={tw`mr-4 text-white`} />
      <TextInput
        style={tw`text-white`}
        placeholderTextColor="white"
        onChangeText={setSearch}
        onKeyPress={handleSearch}
        value={search}
        placeholder="Search..."
      />
    </View>
  );
};

export default Search;
