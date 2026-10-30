import type { Task, SortOption } from "../../types";
import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";

import { filterTasks, sortTasks } from "../../utils/taskUtils";

export default function Dashboard() {
    // Create one sample task
    // State for filtering tasks by status
    const [statusFilter, setStatusFilter] = useState("All");
    //   State for search query
    const [searchQuery, setSearchQuery] = useState("");
    //   State for the task currently being edited
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    //   State for filtering tasks by priority
    const [priorityFilter, setPriorityFilter] = useState("All");
    //   State for sorting tasks
    const [sortBy, setSortBy] = useState<SortOption>("dueDate");
    // State for the list of tasks
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: "1",
            title: "Learn React",
            description: "Practice React components",
            status: "Pending",
            priority: "High",
            dueDate: "2026-10-31"
        },
        {
            id: "2",
            title: "Practice JavaScript",
            description: "Practice JavaScript functions",
            status: "In Progress",
            priority: "Medium",
            dueDate: "2026-11-01"
        },
        {
            id: "3",
            title: "Complete CSS Lab",
            description: "Finish the CSS assignment",
            status: "Pending",
            priority: "Low",
            dueDate: "2026-11-02"
        }
    ]);
    const filteredTasks = filterTasks(
    tasks,
    searchQuery,
    statusFilter,
    priorityFilter
    );

    const sortedTasks = sortTasks(filteredTasks, sortBy);

    return (
        <div>
            <p>Manage your daily tasks in one place.</p>

            <TaskForm
                key={editingTask?.id ?? "new"}
                initialTask={editingTask}
                onCancel={() => setEditingTask(null)}
                onSubmit={(taskData) => {
                    if (editingTask) {
                        // Update the existing task
                        setTasks(
                            tasks.map((task) =>
                                task.id === editingTask.id
                                    ? { ...task, ...taskData }
                                    : task
                            )
                        );

                        setEditingTask(null);
                    } else {
                        // Add a new task
                        const newTask: Task = {
                            ...taskData,
                            id: Date.now().toString()
                        };

                        setTasks([...tasks, newTask]);
                    }
                }}
            />
            <div>
                {/* Search input for tasks */}
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            {/* Task filtering and search section */}
            <div>
                <label>Filter by Status: </label>

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div>
                <label>Filter by Priority: </label>

                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <div>
                <label>Sort By: </label>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                >
                    <option value="title">Title (A-Z)</option>
                    <option value="dueDate">Due Date</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <TaskList
                tasks={sortedTasks}

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
                onEditTask={(task) => {
                    setEditingTask(task);
                }}
            />
        </div>
    );
}
