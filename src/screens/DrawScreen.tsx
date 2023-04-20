import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  NativeSyntheticEvent,
  NativePointerEvent,
  Dimensions,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';

const {height, width} = Dimensions.get('window');

const DrawScreen: FC = () => {
  const [currentPath, setCurrentPath] = useState<string[]>([]);

  const onMove = (event: NativeSyntheticEvent<NativePointerEvent>): void => {
    const {
      nativeEvent: {offsetX, offsetY},
    } = event;
    const newPath = [...currentPath];

    // Create a new point
    const newPoint = `${newPath.length === 0 ? 'M' : ''}${offsetX.toFixed(
      0,
    )},${offsetY.toFixed(0)} `;

    // Add new point to existing points
    newPath.push(newPoint);
    setCurrentPath(newPath);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Draw Something</Text>
      <View style={styles.wrapper} onPointerMove={onMove}>
        <Svg height={height * 0.8} width={width}>
          <Path
            d={currentPath.join('')}
            stroke={'blue'}
            fill={'transparent'}
            strokeWidth={2}
            strokeLinejoin={'round'}
            strokeLinecap={'round'}
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    borderColor: 'blue',
    borderWidth: 2,
    height: height * 0.8,
    width,
  },
  label: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DrawScreen;
