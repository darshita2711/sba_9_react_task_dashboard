function TaskForm() {
  return (
    <div>
      <h2>Add New Task</h2>

      <form>
        <div>
          <label>Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
          />
        </div>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;