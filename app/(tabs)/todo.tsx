import { Text, View, StyleSheet, TextInput, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";

export default function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState<{id: string; task: string; completed: boolean}[]>([]);
  const router = useRouter();
  function goToDetails(item: any){
    router.push({
      pathname: "../details",
      params: {
        task: item.task,
        completed: item.completed.toString()
      }
    })
  }
  function handleAdd(){
    if (task.trim() === ""){
      alert("Empty task!");
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      task: task,
      completed: false
    }

    setData([...data, newItem]);
    setTask("");
  }

  function toggleComplete(id: string) {
    setData(
      data.map(item =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }
    return (
      <View style={styles.container}>
        <TextInput
          style = {styles.input}
          value = {task}
          placeholder = 'Enter a task'  
          onChangeText = {setTask}      
        />
        <Pressable onPress={handleAdd} style={styles.button}>
          <Text style= {styles.buttonText} >Add</Text>
        </Pressable>

        <FlatList
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              No tasks yet
            </Text>
          }
          data = {data}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (
            <View style={[
              styles.item,
              item.completed && { backgroundColor: "#d3ffd3" }
            ]}>
            
              <Pressable
                style={{ flex: 1 }}
                onPress={() => goToDetails(item)}
              >
                <Text style={[
                  styles.text,
                  item.completed && styles.completedText
                ]}>
                  {item.task}
                </Text>
              </Pressable>
            
              <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                <Pressable onPress={() => toggleComplete(item.id)}>
                  <AntDesign name="check" size={24} color="green" />
                </Pressable>
              
                <Pressable onPress={() => {
                  setData(data.filter(i => i.id !== item.id))
                }}>
                  <AntDesign name="delete" size={24} color="red" />
                </Pressable>
              </View>
            
            </View>
          )}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    padding: 12,
  },

  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    height: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  item: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
  fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "gray",
  },

})