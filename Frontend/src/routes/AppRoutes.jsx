import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import JobBoard from "../pages/JobBoard";
import Sidebar from "../components/Sidebar";
import Settings from "../pages/Setting";
import Messenger from "../pages/Messenger";

export default function AppRoutes() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/messages" element={<Messenger />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


