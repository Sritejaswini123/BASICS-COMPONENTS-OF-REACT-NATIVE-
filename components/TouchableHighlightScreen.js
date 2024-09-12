import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View,Button } from 'react-native';

const TouchableHighlightScreen = ({navigation}) => {
    const TouchableHighlightExample = () => {
        const [count, setCount] = useState(0);
        const onPress = () => setCount(count + 1);

        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={onPress}>
                    <View style={styles.button}>
                        <Text>Touch Here</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.countContainer}>
                    <Text style={styles.countText}>{count || null}</Text>
                </View>
                <View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('TouchableOpacityScreen')}
            color="#2F363F"
          />
        </View>

            </View>
        );
    };

    return <TouchableHighlightExample />; 
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
        color:'#2C3335',
        padding: 10,
        
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
    countText: {
        color: '#FF00FF',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingHorizontal: 20,
      },
});

export default TouchableHighlightScreen;
