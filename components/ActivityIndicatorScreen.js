import React from 'react';
import { ActivityIndicator, StyleSheet, View, Button } from 'react-native';

const ActivityIndicatorScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.activityContainer}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>

    <View style={styles.buttonContainer}>
      <Button
        title="Next"
        onPress={() => navigation.navigate('ImageScreen')}
        color="#2F363F"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 20,
  },
  activityContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    paddingBottom: 20, 
  },
});

export default ActivityIndicatorScreen;
