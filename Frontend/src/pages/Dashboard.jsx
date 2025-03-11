import Sidebar from "../components/Sidebar";
import JobBoard from "./JobBoard";
import Landing from "./Landing";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <Landing/>
      </div>
    </div>
  );
}
