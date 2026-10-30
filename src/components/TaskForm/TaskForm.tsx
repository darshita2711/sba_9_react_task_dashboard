import { useState } from "react";
import React from "react";
import type { Priority,Status,TaskFormProps } from "../../types";
import { validateTask } from "../../utils/taskUtils";

// TaskForm component allows users to add a new task with title, description, priority, due date, and status.
function TaskForm({onSubmit,initialTask,onCancel}: TaskFormProps) {
    const [title, setTitle] = useState(initialTask?.title ?? "");
    const [description, setDescription] = useState(initialTask?.description ?? "");
    const [priority, setPriority] = useState<Priority>(initialTask?.priority ?? "Medium");
    const [dueDate, setDueDate] = useState(initialTask?.dueDate ?? "");
    const [status, setStatus] = useState<Status>(initialTask?.status ?? "Pending");
    const [error, setError] = useState<string | null>(null);

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const validationError = validateTask(title, description);

        if (validationError) {
            setError(validationError);
            return;
        }

        if (!dueDate) {
            setError("Due date is required.");
            return;
        }

        setError("");
        onSubmit({
            title,
            description,
            status,
            priority,
            dueDate,
        });

        if (!initialTask) {
            setTitle("");
            setDescription("");
            setStatus("Pending");
            setPriority("Medium");
            setDueDate("");
        }
    }
const inputStyle =
        "w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

    const labelStyle =
        "mb-2 block text-sm font-medium text-slate-700";
  return (
     <form onSubmit={handleSubmit}>
      <h2>{initialTask ? "Edit Task" : "Add New Task"}</h2>
      {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</p>}

        <div>
          <label className={labelStyle}>Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={inputStyle}
          />
        </div>
          <div>
          <label className={labelStyle}>Description</label>
          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
             rows={3}
            className={inputStyle}
          />
        </div>
         <div>
          <label className={labelStyle}>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
             className={inputStyle}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className={labelStyle}>Status</label>
        
            <select
                value={status}
                onChange={(event) =>
                setStatus(event.target.value as Status)
                }
                className={inputStyle}
                >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            </div>
        <div>
           <label className={labelStyle}>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
             className={inputStyle}
          />
        </div>
          <div className="flex flex-wrap gap-3">
        <button type="submit"
        className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >{initialTask ? "Update Task" : "Add Task"}</button>
        {/* Show the cancel button only when editing an existing task */}
        {initialTask && onCancel && (
          <button type="button" onClick={onCancel}
         className="rounded-lg bg-slate-200 px-6 py-2.5 font-medium text-slate-700 transition hover:bg-slate-300"
          >
            Cancel
          </button>
        )}
        </div>
      </form>
  );
}

export default TaskForm;