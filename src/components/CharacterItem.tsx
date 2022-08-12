import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import tw from 'twrnc';

interface IProps {
  alias: string;
  name: string;
  image?: string;
  onPress?: () => void;
}

const CharacterItem = ({alias, name, image, onPress}: IProps) => {
  return (
    <Pressable
      style={tw`my-2 p-4 rounded-lg bg-white hover:bg-gray-100 active:bg-gray-400 flex flex-row`}
      onPress={onPress}>
      <View style={tw`flex justify-center items-center mr-4`}>
        {image ? (
          <Image source={{uri: image}} />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
      </View>
      <View style={tw`flex flex-col`}>
        <Text>{alias}</Text>
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
};

export default CharacterItem;
