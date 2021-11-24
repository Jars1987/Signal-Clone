import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState('');

  const createChat = () => {
    addDoc(collection(db, 'chats'), {
      chatName: input,
    })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        alert(error.message);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
      headBackTitle: 'Chats',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter a Chat name'
        value={input}
        onChangeText={text => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name='wechat' type='antdesign' size={24} color='black' />
        }
      />
      <Button
        disabled={!input.length}
        title='Create new Chat'
        onPress={createChat}
      />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    height: '100%',
  },
});
