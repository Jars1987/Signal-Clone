import React, { useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back to Login',
    });
  }, [navigation]);

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(res.user, {
          displayName: name,
          photoURL:
            imageUrl ||
            'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg',
        });
      })
      .catch(e => {
        alertg(e.message);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior='Platform.OS === "ios" ? "padding" : "height"'
      style={styles.container}>
      <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          autofocus
          type='text'
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor='#D0D0D0'
        />
        <Input
          placeholder='Email'
          type='email'
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor='#D0D0D0'
        />
        <Input
          placeholder='Password'
          type='password'
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor='#D0D0D0'
        />
        <Input
          placeholder='Profile Picture Url (optional)'
          type='imageUrl'
          value={imageUrl}
          onChangeText={text => setImageUrl(text)}
          onSubmitEditing={register}
          placeholderTextColor='#D0D0D0'
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        title='Register'
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: { width: 300 },
  button: { width: 200, marginTop: 10 },
});
