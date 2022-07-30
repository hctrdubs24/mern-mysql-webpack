import { useNavigate } from "react-router-dom";
import { useTask } from "../../context/TaskContextProvider";

const TaskCard = ({ task }) => {
  const { deleteTask, toogleTaskDone } = useTask();
  const navigate = useNavigate();
  const handleDone = async () => await toogleTaskDone(task.id);

  return (
    <>
      <div className="bg-slate-700 text-white rounded-md p-4">
        <header className="flex justify-between">
          <h3 className="text-sm font-bold">{task.title}</h3>
          <span>{task.done == 1 ? "✅" : "❌"}</span>
        </header>
        <p className="text-xs">{task.description}</p>
        <span>{task.createdAt}</span>
        <div className="flex gap-x-2 flex-en">
          <button
            className="bg-red-600 px-2 py-1 text-white"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
          <button
            className="bg-slate-800 px-2 py-1 text-white"
            onClick={() => navigate(`/edit/${task.id}`)}
          >
            Edit
          </button>
          <button
            className="bg-green-600 px-2 py-1 text-white"
            onClick={() => handleDone(task.done)}
          >
            Toggle Task
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
