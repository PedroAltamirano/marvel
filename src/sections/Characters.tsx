import React from 'react';
import {ScrollView} from 'react-native';
import tw from 'twrnc';
import CharacterItem from '../components/CharacterItem';
import Search from '../components/Search';

const CHARACTERS = [
  {
    id: 1,
    alias: 'Luke',
    name: 'Luke Skywalker',
    image: '',
  },
  {
    id: 2,
    alias: 'Loco 1',
    name: 'Pedro Altamirano',
    image: '',
  },
  {
    id: 3,
    alias: 'Loco 2',
    name: 'Mario Anchundia',
    image: '',
  },
];

const Characters = () => {
  const handlePress = (id: number) => {
    console.log(id);
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior={'automatic'}
      style={tw`p-4 bg-red-700`}>
      <Search />
      {CHARACTERS.map((character, index) => (
        <CharacterItem
          key={index}
          alias={character.alias}
          name={character.name}
          image={character.image}
          onPress={() => handlePress(character.id)}
        />
      ))}
    </ScrollView>
  );
};

export default Characters;
