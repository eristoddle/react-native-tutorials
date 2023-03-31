import React, { FC, useState } from 'react';
import {
  NativePointerEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

const Draggable: FC = () => {
  const [pointerEnter, setPointerEnter] = useState(false);
  const isDragging = false;
  console.log('test');

  const onPointerEnter = (
    event: NativeSyntheticEvent<NativePointerEvent>,
  ): void => {
    console.log(
      'Over blue circle offset: ',
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY,
    );
  };

  return (
    <View
      style={styles.container}
      pointerEvents="auto"
      onPointerEnter={onPointerEnter}
    >
      <Text>Drag Me</Text>
    </View>
  );
};

export default Draggable;
