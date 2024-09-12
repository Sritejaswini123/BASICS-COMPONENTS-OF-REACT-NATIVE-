import React from "react";
import { View, Image, StyleSheet, Button, ImageBackground } from 'react-native';

const ImageScreen = ({ navigation }) => {
  const image = { uri: 'https://c4.wallpaperflare.com/wallpaper/871/1013/108/minimalism-red-abstract-digital-art-wallpaper-preview.jpg' };

  return (

    <ImageBackground 
    source={image} 
    style={styles.backgroundImage}>
      <View style={styles.container}
      resizeMode='cover'>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('KeyboardScreen')}
            color="#2F363F"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
   
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  logo: {
    width: 66,
    height: 58,
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default ImageScreen;
