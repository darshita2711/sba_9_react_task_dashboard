import type { Task } from "../../types";
import TaskList from "../TaskList/TaskList";

export default function Dashboard() {
    // Create one sample task
  const task: Task = {
    id: "1",
    title: "Learn React",
    description: "Practice React components",
    status: "Pending",
    priority: "High",
    dueDate: "2026-10-31"
  };
  return (
    <div>
      <p>Manage your daily tasks in one place.</p>

    <TaskList
      tasks={[task]}
      onUpdateStatus={(id, newStatus) => {
        console.log("Updated task:", id, newStatus);
      }}
      onDeleteTask={(id) => {
        console.log("Deleted task:", id);
      }}
    />
    </div>
  );
}
