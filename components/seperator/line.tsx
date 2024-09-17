import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator: React.FC = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1, 
    backgroundColor: '#727272',
    width: '90%', 
    alignSelf: 'center', 
    marginVertical: 15,
  },
});

export default Separator;
