import {ActivityIndicator, Modal, View} from 'react-native';
import styles from './stylex';

interface Props {
  visible?: boolean;
}

const defaultProps: Props = {
  visible: false,
};

// parent component of all apps to show common loader

const AcitivtyIndc = (props: typeof defaultProps): React.ReactElement => {
  return (
    <Modal visible={props?.visible} transparent>
      <View style={styles.container}>
        <View style={styles.backgroundVw} />
        <View style={styles.mnVw}>
          <ActivityIndicator size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

export default AcitivtyIndc;
