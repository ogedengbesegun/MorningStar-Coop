import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

const FetchExample = ({setLoading,loading}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://your-api-url.com/data');
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error('Fetch error:', error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <>
          <Button title="Fetch Data" onPress={fetchData} />
          {data && <Text style={styles.dataText}>{JSON.stringify(data)}</Text>}
        </>
      )}
    </View>
  );
};

export default FetchExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataText: {
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
});
