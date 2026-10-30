import type {TaskListProps} from "../../types";
import TaskItem from "./TaskItem";


function TaskList({ tasks,onUpdateStatus,onDeleteTask,onEditTask }: TaskListProps) {
  return (
    <div>
      <h2>My Tasks</h2>
      {/* Render the list of tasks */}
      {tasks.map((task) => (
        <TaskItem 
        key={task.id} 
        task={task} 
        onUpdateStatus={onUpdateStatus}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}/>
      ))}
    </div>
  );
}

export default TaskList;