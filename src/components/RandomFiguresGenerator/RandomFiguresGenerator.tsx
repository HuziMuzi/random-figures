import React, {memo, useState} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {AppButton} from '../AppButton/AppButton';

const SIZE = 130;

const shapes = [
  {
    shape: 'triangle',
    style: {
      borderStyle: 'solid' as 'solid',
      borderLeftWidth: SIZE / 2,
      borderRightWidth: SIZE / 2,
      borderBottomWidth: SIZE,
      borderColor: 'transparent',
      borderBottomColor: 'green',
    },
  },
  {shape: 'square', style: {width: SIZE, height: SIZE}},
  {shape: 'rectangle', style: {width: SIZE * 1.25, height: SIZE}},
  {
    shape: 'circle',
    style: {width: SIZE, height: SIZE, borderRadius: SIZE / 2},
  },
  {
    shape: 'rombo',
    style: {
      width: SIZE,
      height: SIZE,
      transform: [{rotate: '45deg'}, {rotateX: '-20deg'}],
    },
  },
  {
    shape: 'parallelogram',
    style: {
      width: SIZE,
      height: SIZE,
      transform: [{perspective: SIZE}, {rotateX: '-130deg'}],
    },
  },
];

type ShapeType = {
  shape: string;
  style: ViewStyle;
};

const getRandomColor = () =>
  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

const RandomShapeGenerator = () => {
  const [shape, setShape] = useState<ShapeType>(
    shapes[Math.floor(Math.random() * shapes.length)],
  );

  const generateShape = () => {
    let newShape = shapes[Math.floor(Math.random() * shapes.length)];
    while (newShape.shape === shape.shape) {
      newShape = shapes[Math.floor(Math.random() * shapes.length)];
    }
    setShape(newShape);
  };

  const color = shape.shape === 'triangle' ? 'transparent' : getRandomColor();

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.shape, shape.style, {backgroundColor: color}]} />
      </View>
      <AppButton title="Generate" onPress={generateShape} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shape: {
    margin: 20,
  },
});

export default memo(RandomShapeGenerator);
