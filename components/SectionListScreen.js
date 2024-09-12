import React from "react";
import { View, Text,StyleSheet,SafeAreaView,SectionList,StatusBar,Button } from "react-native";

const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];
  
  const SectionListScreen = ({navigation}) => (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
<View style={styles.buttonContainer}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('SwitchScreen')}
            color="#2F363F"
          />
        </View>

    </SafeAreaView>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#4C4B4B',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 30,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingHorizontal: 20,
      },
  });
  
  export default SectionListScreen