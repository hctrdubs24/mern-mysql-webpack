import { useEffect } from "react";
import TaskCard from "../../components/TaskCard";
import { useTask } from "../../context/TaskContextProvider";

export default function Home() {
  const { tasks, loadTask } = useTask();

  useEffect(() => {
    loadTask();
  }, []);

  const renderMain = () => {
    if (tasks.length === 0)
      return (
        <div className="min-w-full items-stretch my-6 col-span-4">
          <h2 className="text-5xl font-bold text-white w-full text-center">
            No task yet.⚠
          </h2>
        </div>
      );
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  };

  return (
    <>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <section className="grid grid-cols-4 gap-3">{renderMain()}</section>
    </>
  );
}
