import { useContext, useState } from "react";
import { createContext } from "react";

type Task = {
  id: string;
  task: string;
  completed: boolean;
};

export const TaskContext = createContext<any>(null); //create context to store the data of tasks, we can use this context in any screen to access the data

export function TaskProvider({ children }: any) {
  const [data, setData] = useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ data, setData }}>
      {children}
    </TaskContext.Provider>
  );
}