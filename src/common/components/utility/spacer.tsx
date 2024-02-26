import {View, Text} from 'react-native';
import React from 'react';
import {scaleSize} from '../../utils/scaleSheetUtils';

interface Props {
  height?: number;
}

const defaultProps: Props = {
  height: scaleSize(0),
};

const Spacer = (props: typeof defaultProps) => {
  const {height} = props;

  if (!height) {
    throw new Error('Spacer Requires a height');
  }
  const styles = {
    spacer: {
      height: height,
    },
  };
  return <View style={styles.spacer} />;
};

export default Spacer;
