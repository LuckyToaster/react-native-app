import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//import React, {useState} from 'react';
import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function App() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const imgData = await fetchImgs(10);
      setImgs(imgData);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        {imgs.map((img, index) => 
          <Card 
            title={`Animal number ${index + 1}`}
            desc='Happy animal'
            img={img}
          />
        )}
      </ScrollView>
    </View>
  );
}

async function fetchImgs(count) {
  try {
    const response = await fetch(`http://shibe.online/api/shibes?count=${count}&urls=true&httpsUrls=true`);
    const json = await response.json();
    console.log(json); 
    return json;
  } catch (error) {
    console.error(error); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
