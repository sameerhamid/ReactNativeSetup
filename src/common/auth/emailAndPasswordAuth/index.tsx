// import auth from '@react-native-firebase/auth';
// import {navigate} from '../../utils/navigatorUtils';
// import {NavScreenTags} from '../../constants/navScreenTags';
// import {Alert} from 'react-native';
// import {showToast} from '../../utils/alertUtils';

// const authWithEamilAndPass = async (email: string, password: string) => {
//   let message = '';
//   if (email === '' || email === undefined) {
//     message = 'Please enter valid email';
//   }

//   if (password === '' || password === undefined) {
//     message = 'Please Enter Valid password';
//   }

//   await auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(() => {
//       showToast('User account created & signed in!');
//     })
//     .catch(error => {
//       if (error.code === 'auth/email-already-in-use') {
//         console.log('');

//         Alert.alert('That email address is already in use!');
//       }

//       if (error.code === 'auth/invalid-email') {
//         Alert.alert('That email address is invalid!');
//       }

//       console.error(error);
//     });
// };

// export default authWithEamilAndPass;

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {showConsoler} from '../../constants/logUtils';
import {showToast} from '../../utils/alertUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const createUserWithEmailAndPasswordCustom = async (
  email: string,
  password: string,
): Promise<FirebaseAuthTypes.User> => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    showToast('User account created & signed in!');
    const userToke = userCredential.user.getIdToken();
    await AsyncStorage.setItem('userToken', JSON.stringify(userToke));
    return userCredential.user!;
  } catch (error) {
    //@ts-ignore\
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      Alert.alert('That email address is already in use!');
      //@ts-ignore
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    } else {
      showConsoler(`${error}`);
    }
    throw error; // Propagate the error for further handling if needed
  }
};

export {createUserWithEmailAndPasswordCustom};

const signInWithEmailAndPassCustom = async (
  email: string,
  password: string,
) => {
  try {
    const userCredentials = await auth().signInWithEmailAndPassword(
      email,
      password,
    );

    const user = userCredentials.user;
    const userToken = userCredentials.user.getIdToken();
    await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
    showToast('login successful');
    return user;
  } catch (error) {
    //@ts-ignore
    if (
      //@ts-ignore
      error.code === 'auth/user-not-found' ||
      //@ts-ignore
      error.code === 'auth/wrong-password'
    ) {
      Alert.alert('Invalid email or password. Please try again.');
    } else {
      console.error(error);
    }
  }
};

export {signInWithEmailAndPassCustom};
