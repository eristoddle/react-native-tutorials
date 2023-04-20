import React, {FC, useRef, useState} from 'react';
import {
  Animated,
  NativePointerEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const diameter = 70;

const Draggable: FC = () => {
  const [dragging, setDragging] = useState(false);
  // const [show, setShow] = useState(true);
  // const [pan, setPan] = useState(new Animated.ValueXY());
  // const [opacity, setOpacity] = useState(new Animated.Value(1));
  const pan = useRef(new Animated.ValueXY()).current;
  // const [val, setVal] = useState({x: 0, y: 0});
  // pan.addListener(value => setVal(value));

  const onDown = (): void => {
    // pan.setOffset({x: pan.x, y: pan.y});
    pan.setValue({x: 0, y: 0});
    setDragging(true);
  };

  const onUp = (): void => {
    setDragging(false);
  };

  const onMove = (event: NativeSyntheticEvent<NativePointerEvent>): void => {
    const {
      nativeEvent: {offsetX, offsetY},
    } = event;
    if (dragging) {
      console.log('x', pan.x, offsetX);
      console.log('y', pan.y, offsetY);
      console.log('layout', pan.getLayout());
      // console.log(val);
      Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      });
      // pan.setOffset({
      //   x: offsetX,
      //   y: offsetY,
      // });
      // pan.setValue({
      //   x: 0,
      //   y: 0,
      // });
    }
  };

  return (
    <Animated.View
      style={[{transform: pan.getTranslateTransform()}, styles.container]}
      // style={[pan.getLayout(), styles.container]}
      pointerEvents="auto"
      onPointerUp={onUp}
      onPointerDown={onDown}
      onPointerMove={onMove}>
      <Text style={styles.text}>Drag Me</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: diameter,
    height: diameter,
    borderRadius: diameter / 2,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Draggable;
