import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';

const ListUserScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log('Calling API get_user.php'); // Pernyataan log
        const response = await axios.get('http://localhost/login/RestAPI/get_user.php');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>List User Screen</Text>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.header}>UserID</Text>
            <Text style={styles.header}>Username</Text>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.header}>Email</Text>
          </View>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}  // Menggunakan properti 'id' sebagai kunci unik
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text>{item.id}</Text>
                <Text>{item.username}</Text>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    fontWeight: 'bold',
  },
});

export default ListUserScreen;
