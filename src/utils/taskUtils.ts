import type { Task, SortOption } from "../types";

// Filter tasks by search text, status, and priority
export function filterTasks(
  tasks: Task[],
  searchQuery: string,
  statusFilter: string,
  priorityFilter: string
): Task[] {
  return tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });
}

// Sort tasks by title, due date, or priority
export function sortTasks(
  tasks: Task[],
  sortBy: SortOption
): Task[] {
  const sortedTasks = [...tasks];

  sortedTasks.sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "dueDate") {
      return a.dueDate.localeCompare(b.dueDate);
    }

    if (sortBy === "priority") {
      const priorityOrder = {
        High: 1,
        Medium: 2,
        Low: 3
      };

      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }

    return 0;
  });

  return sortedTasks;
}

export function validateTask(
  title: string,
  description: string
): string | null {
  if (title.trim() === "") {
    return "Task title is required.";
  }

  if (description.trim() === "") {
    return "Task description is required.";
  }

  return null;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}