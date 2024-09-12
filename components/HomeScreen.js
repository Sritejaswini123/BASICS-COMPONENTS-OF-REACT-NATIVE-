import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView, ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
    const [text, SetText] = useState('');
    const [number, setNumber] = useState('');

  

    return (
       
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text style={styles.title}>THIS IS THE HOMESCREEN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter the text"
                        onChangeText={SetText}
                        value={text}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter the number"
                        onChangeText={setNumber}
                        value={number}
                        keyboardType="numeric"
                    />
                    <Button
                        title="Next"
                        onPress={() => navigation.navigate('Details')}
                        color="#2F363F"
                    />
                </View>
            </SafeAreaView>
     
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
    },
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 20,
        color: '#2F363F', 
        marginBottom: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        backgroundColor: 'black', // Slightly transparent background for inputs
        borderColor: '#ccc',
    },
});
