import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  NativeSyntheticEvent,
  NativePointerEvent,
} from 'react-native';

const DetectScreen: FC = () => {
  const [type, setType] = useState('Click on Blue');

  const onDown = (event: NativeSyntheticEvent<NativePointerEvent>): void => {
    const {
      nativeEvent: {offsetX, offsetY, pointerType},
    } = event;
    const message = `${pointerType} event at offset x:${offsetX} and y:${offsetY}`;
    setType(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.label}>{type}</Text>
      </View>
      <View style={styles.bottom} onPointerDown={onDown} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: 200,
    backgroundColor: 'orange',
  },
  bottom: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
  label: {
    margin: 50,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DetectScreen;
