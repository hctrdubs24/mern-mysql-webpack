import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTask } from "../../context/TaskContextProvider";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <>
      <section>
        <Formik
          initialValues={task}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            console.log(values);
            if (params.id) {
              await updateTask(params.id, values);
            } else {
              await createTask(values);
            }
            navigate("/");
            setTask({
              title: "",
              description: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
              <h2 className="text-5xl font-bold uppercase text-center">
                {params.id ? "Edit Task" : "New Task"}
              </h2>
              <label htmlFor="title" className="block">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Write a title"
                onChange={handleChange}
                value={values.title}
                className="px-2 py-1 rounded-sm w-full"
              />
              <label htmlFor="description" className="block">
                Description
              </label>
              <textarea
                name="description"
                onChange={handleChange}
                placeholder="Write a description"
                value={values.description}
                className="px-2 py-1 rounded-sm w-full"
              ></textarea>
              <button
                className="block bg-indigo-700 px-2 py-1 text-white w-full rounded-md"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
}

export default TaskForm;
