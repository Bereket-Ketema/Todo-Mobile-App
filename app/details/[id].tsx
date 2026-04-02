import { View, Text, StyleSheet, Pressable} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext } from "react";
import { TaskContext } from "@/context/Taskcontext";

export default function Details() {
  const { id } = useLocalSearchParams();//read data that passed from another screen
  const router = useRouter();
  const { data } = useContext(TaskContext); //access the data of tasks from context, we can use this data to show the details of the task that we clicked on
  const taskItem = data.find((item: { id: string; }) => item.id === id); //find the task that we clicked on from the data of tasks, we can use this to show the details of the task that we clicked on
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Task: {taskItem.task}</Text>
        <Text style={styles.status}>
          Status: {taskItem.completed === "true" ? "Completed" : "Not Completed"}
        </Text>
      </View>
      <Pressable onPress={() => router.back()}>
        <Text>
          <AntDesign name="left" size={17} /> Back
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: "gray",
  },
  card: {
    backgroundColor: "#d1c9c9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    textAlign: "center",
  }
});