import type {TaskListProps} from "../../types";
import TaskItem from "./TaskItem";


function TaskList({ tasks,onUpdateStatus,onDeleteTask,onEditTask }: TaskListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">My Tasks</h2>
      {/* Render the list of tasks */}
      <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem 
        key={task.id} 
        task={task} 
        onUpdateStatus={onUpdateStatus}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}/>
      ))}
    </div>
    </div>
  );
}

export default TaskList;