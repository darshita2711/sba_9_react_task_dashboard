import type { Task, Status } from "../../types";
import { formatDate } from "../../utils/taskUtils";


interface TaskItemProps {
  task: Task;
  onUpdateStatus: (id: string, newStatus: Status) => void;
  onDeleteTask: (id: string) => void;
  onEditTask?: (task: Task) => void;
}
function TaskItem({ task, onUpdateStatus, onDeleteTask, onEditTask }: TaskItemProps) {
  return (
    <div>
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <p>Priority: {task.priority}</p>

      <p>Due Date: {formatDate(task.dueDate)}</p>
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
      {onEditTask && (
        <button
          onClick={() => onEditTask(task)}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default TaskItem;