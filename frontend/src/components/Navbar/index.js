import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-neutral-800 flex justify-between px-20 py-4">
        <Link to="/" className="text-white font-bold">
          <h1>MERN STACK MYSQL</h1>
        </Link>

        <ul className="flex gap-x-1">
          <li>
            <Link to="/" className="bg-slate-200 px-2 py-1">Home</Link>
          </li>
          <li>
            <Link to="/new" className="bg-teal-400 px-2 py-1">Create Task</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
