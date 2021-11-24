import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { collection, query, orderBy, onSnapshot } from '@firebase/firestore';
import { db } from '../firebase';

const customListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'chats', id, 'messages'),
        orderBy('timeStamp', 'asc')
      ),
      snapshot => {
        setChatMessages(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }
    );

    return unsubscribe;
  }, []);

  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages[0]?.data.photoURL ||
            'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
          {chatMessages[0]
            ? `${chatMessages[0]?.data.displayName}: ${chatMessages[0]?.data.message}`
            : 'Be the first to send a message!'}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default customListItem;

const styles = StyleSheet.create({});
