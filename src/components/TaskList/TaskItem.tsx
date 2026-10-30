import type { Task, Status } from "../../types";

interface TaskItemProps {
  task: Task;
  onUpdateStatus: (id: string, newStatus: Status) => void;
  onDeleteTask: (id: string) => void;
}
function TaskItem({ task, onUpdateStatus, onDeleteTask }: TaskItemProps) {
  return (
    <div>
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <p>Priority: {task.priority}</p>

      <p>Due Date: {task.dueDate}</p>
      <button
        onClick={() => onUpdateStatus(task.id, "Completed")}
      >
        Mark Completed
      </button>

      <button
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;