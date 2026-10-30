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
     <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            {task.title}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {task.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {task.status}
          </span>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            {task.priority}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Due Date: {formatDate(task.dueDate)}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => onUpdateStatus(task.id, "Completed")}
          className="rounded-md bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
        >
          Mark Completed
        </button>

        {onEditTask && (
          <button
            onClick={() => onEditTask(task)}
            className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onDeleteTask(task.id)}
          className="rounded-md bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;