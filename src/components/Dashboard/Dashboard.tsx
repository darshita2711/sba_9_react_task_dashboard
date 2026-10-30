import type { Task } from "../../types";

export default function Dashboard() {
    // Create one sample task
  const task: Task = {
    id: 1,
    title: "Learn React",
    description: "Practice React components",
    status: "Pending",
    priority: "High",
    dueDate: "2026-10-31"
  };
  return (
    <div>
      <h1>My Task Dashboard</h1>
      <h2>Sample Task</h2>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Manage your daily tasks in one place.</p>
    </div>
  );
}
