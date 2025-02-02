import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View , Button} from 'react-native';
const TouchableOpacityScreen = ({navigation}) => {

    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
  
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('TouchableWithoutFeedback')}
            color="#2F363F"
          />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingHorizontal: 20,
      },

  });
  
export default TouchableOpacityScreen