import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {Picker} from '@react-native-community/picker';
import tagsContext from '../context/tags/tagsContext';

const SelectWaiting = ({waiting, setWaiting}) => {
	//get tagsState
	const tagContext = useContext(tagsContext);
	const {tags} = tagContext;
	const contactTags = tags.filter((tag) => tag.type === 'contact');

  return (
    <View style={styles.container}>
        <Picker
          selectedValue={waiting}
          style={{height: 56}}
          onValueChange={(itemValue, itemIndex) =>
            setWaiting(itemValue)
          }>
			  <Picker.Item label={"Not set"} value={undefined} />
			  {contactTags.map(tag => (
				  <Picker.Item key ={tag.id} label={tag.name} value={tag.name} />
			  ))}
        </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray', borderWidth: 1, marginVertical: 6, borderRadius: 2
  },
});

export default SelectWaiting;
