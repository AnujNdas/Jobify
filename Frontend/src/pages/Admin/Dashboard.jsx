
import { BarChart, Users, Briefcase, FileText, Settings } from "lucide-react";
import { Link, Routes, Route } from "react-router-dom";
import UsersPage from "./Users";
import JobsPage from "./Jobs";
import ApplicationsPage from "./Application";
import ReportsPage from "./Report";
import SettingsPage from "./Setting";
import Layout from "./Layout";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-500 shadow-md p-4">
        <h2 className="text-xl font-bold mb-6 text-white">Admin Panel</h2>
        <nav className="space-y-4">
          <Link to="/admin/users" className="flex items-center gap-2 text-white hover:text-purple-300">
            <Users size={20} /> Users
          </Link>
          <Link to="/admin/jobs" className="flex items-center gap-2 text-white hover:text-purple-300">
            <Briefcase size={20} /> Jobs
          </Link>
          <Link to="/admin/applications" className="flex items-center gap-2 text-white hover:text-purple-300">
            <FileText size={20} /> Applications
          </Link>
          <Link to="/admin/reports" className="flex items-center gap-2 text-white hover:text-purple-300">
            <BarChart size={20} /> Reports
          </Link>
          <Link to="/admin/settings" className="flex items-center gap-2 text-white hover:text-purple-300">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="*" element={<Layout/>}/>
          <Route path="users" element={<UsersPage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}
