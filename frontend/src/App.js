import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import TaskForm from "./pages/TaskForm";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskContextProvider";

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen ">
      <Navbar />
      <div className="container mx-auto py-4 px-20 ">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;
