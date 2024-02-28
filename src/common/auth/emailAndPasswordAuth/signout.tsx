import auth from '@react-native-firebase/auth';

const signOutCustom = async (): Promise<void> => {
  try {
    await auth().signOut();

    console.log('User signed out!');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error; // Propagate the error for further handling if needed
  }
};

export {signOutCustom};
