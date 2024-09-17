import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const images = [
  { uri: 'https://placekitten.com/800/300' },
  { uri: 'https://placekitten.com/801/300' },
  { uri: 'https://placekitten.com/802/300' },
];

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 
import { DrawerNavigationProp } from '@react-navigation/drawer';

type CarouselProps = DrawerNavigationProp<RootStackParamList, 'Dashboard'>;

interface Props {
  navigation: CarouselProps;
}
const Carousel: React.FC<Props> = ({ navigation }) =>{
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.carouselContainer}>
      <Image source={images[currentImage]} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '95%',
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Carousel;
