
// Core types for the task management application.
export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Pending' | 'In Progress' | 'Completed';
export type SortOption = 'dueDate' | 'priority' | 'title';


// Task structure
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  dueDate: string; // Stored as an ISO string or YYYY-MM-DD
}


// Options used to filter and search tasks in the dashboard.
export interface FilterOptions {
  status: Status | 'All';
  priority: Priority | 'All';
  searchQuery: string;
}

// ==========================================
// Component Prop Interfaces
// ==========================================

//  Props for the main Dashboard container component.
export interface DashboardProps {
  initialTheme?: 'light' | 'dark';
}

//  Props for the TaskList and TaskItem components.
export interface TaskListProps {
  tasks: Task[];
  onUpdateStatus: (id: string, newStatus: Status) => void;
  onDeleteTask: (id: string) => void;
  onEditTask?: (task: Task) => void;
}

//  Props for the TaskForm component used for adding/editing tasks.
export interface TaskFormProps {
  onSubmit: (taskData: Omit<Task, 'id'>) => void;
  initialTask?: Task | null;
  onCancel?: () => void;
}

//  Props for the TaskFilter component controlling search and filters.
export interface TaskFilterProps {
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}