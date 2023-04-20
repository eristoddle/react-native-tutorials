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
    console.log(offsetX, offsetY);
    const newPath = [...currentPath];

    // Create a new point
    const newPoint = `${newPath.length === 0 ? 'M' : ''}${offsetX.toFixed(
      0,
    )},${offsetY.toFixed(0)} `;

    // Add new point to older points
    newPath.push(newPoint);
    setCurrentPath(newPath);
  };
  console.log('currentPath', currentPath);

  return (
    <View style={styles.container} onPointerMove={onMove}>
      <Text style={styles.label}>Draw Something</Text>
      <Svg height={height * 0.7} width={width}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  label: {
    margin: 50,
    textAlign: 'center',
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DrawScreen;
