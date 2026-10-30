import { useState } from "react";
import type { Priority,Status,TaskFormProps } from "../../types";

// TaskForm component allows users to add a new task with title, description, priority, due date, and status.
function TaskForm({onSubmit,initialTask,onCancel}: TaskFormProps) {
    const [title, setTitle] = useState(initialTask?.title ?? "");
    const [description, setDescription] = useState(initialTask?.description ?? "");
    const [priority, setPriority] = useState<Priority>(initialTask?.priority ?? "Medium");
    const [dueDate, setDueDate] = useState(initialTask?.dueDate ?? "");
    const [status, setStatus] = useState<Status>(initialTask?.status ?? "Pending");

  return (
    <div>
      <h2>{initialTask ? "Edit Task" : "Add New Task"}</h2>

      <form onSubmit={(e) => {
        e.preventDefault();

        if (!title.trim()) {
        alert("Please enter a task title.");
        return;
        }
        if(!dueDate) {
          alert("Please enter a due date.");
          return;
        }
          onSubmit({ title, description, priority, dueDate, status });
          setTitle("");
          setDescription("");
          setPriority("Medium");
          setStatus("Pending");
          setDueDate("");
        }}
        >
        <div>
          <label>Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
          <div>
          <label>Task Description</label>
          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label>Task Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
            <label>Status</label>
            <select
                value={status}
                onChange={(event) =>
                setStatus(event.target.value as Status)
                }>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <button type="submit">{initialTask ? "Update Task" : "Add Task"}</button>
        {/* Show the cancel button only when editing an existing task */}
        {initialTask && onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default TaskForm;