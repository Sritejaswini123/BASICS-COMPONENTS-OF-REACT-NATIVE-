import React, { useState } from "react";
import { RefreshControl ,SafeAreaView, ScrollView, StyleSheet, Text , Button} from "react-native";
const RefreshControlScreen = ({navigation}) => {
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);
    
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Text style = {styles.textStyle}>Pull down to see RefreshControl indicator</Text>
            <Button
            title="Next"
            onPress={() => navigation.navigate('SectionListScreen')}
            color="#2F363F"
          />


          </ScrollView>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      scrollView: {
        flex: 1,
        backgroundColor: '#2C3335',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textStyle : {
        color: 'white'
      }, buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        paddingHorizontal: 20,
      },
    });

    export default RefreshControlScreen
    