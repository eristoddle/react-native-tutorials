import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Draggable from '../components/Draggable';

const DropScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.drop}>
        <Text style={styles.label}>Drop Zone</Text>
      </View>
      <View style={styles.circles} />
      <View style={styles.row}>
        <Draggable />
        <Draggable />
        <Draggable />
        <Draggable />
        <Draggable />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circles: {
    height: 200,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  drop: {
    height: 200,
    backgroundColor: 'orange',
  },
  label: {
    marginTop: 50,
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default DropScreen;
