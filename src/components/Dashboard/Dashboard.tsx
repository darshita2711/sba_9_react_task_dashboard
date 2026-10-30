import type { Task } from "../../types";
import { useState } from "react";
import TaskList from "../TaskList/TaskList";

export default function Dashboard() {
    // Create one sample task
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Learn React",
      description: "Practice React components",
      status: "Pending",
      priority: "High",
      dueDate: "2026-10-31"
    }
  ]);
  return (
    <div>
      <p>Manage your daily tasks in one place.</p>

    <TaskList
      tasks={tasks}
    //   update the status of a task
      onUpdateStatus={(id, newStatus) => {
        // Update the status of the task with the given id
        setTasks(tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
        console.log("Updated task:", id, newStatus);
      }}
    //   delete a task
      onDeleteTask={(id) => {
        // Filter out the task with the given id
        setTasks(tasks.filter((task) => task.id !== id));
        console.log("Deleted task:", id);
      }}
    />
    </div>
  );
}
