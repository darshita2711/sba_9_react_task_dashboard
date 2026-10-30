import type {TaskListProps} from "../../types";
import TaskItem from "./TaskItem";


function TaskList({ tasks,onUpdateStatus,onDeleteTask }: TaskListProps) {
  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <TaskItem 
        key={task.id} 
        task={task} 
        onUpdateStatus={onUpdateStatus}
        onDeleteTask={onDeleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;