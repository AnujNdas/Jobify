import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "../pages/Landing";
import JobBoard from "../pages/JobBoard";
import Sidebar from "../components/Sidebar";
import Settings from "../pages/Setting";
import Messenger from "../pages/Messenger";
import { PostJob, SaveListings } from "../pages/Quickaction";
import { CompanyLogin, IndividualLogin } from "../pages/Logins";
import { CompanySignup, IndividualSignup } from "../pages/Signups";
import { useTheme } from "../context/ThemeContext";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/Admin/Dashboard";

function AppRoutes() {
  const { isDarkMode } = useTheme();
  const location = useLocation();

  // Define routes that should hide the sidebar
  const hideSidebarRoutes = [
    "/company-login",
    "/individual-login",
    "/company-signup",
    "/individual-signup",
  ];

  const isAdminRoute = location.pathname.startsWith("/admin");
  console.log("Current Path:", location.pathname);
  console.log("Is Admin Route:", isAdminRoute);

  return (
    <div className="flex">
      {!hideSidebarRoutes.includes(location.pathname) && !isAdminRoute && <Sidebar />}
      <div className="flex-1 p-2">
        <Routes>
          {/* Admin Dashboard (Full Screen) */}
          {isAdminRoute ? (
            <Route path="/admin/*" element={<AdminDashboard />} />
          ) : (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/jobs" element={<JobBoard />} />
              <Route path="/messages" element={<Messenger />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/company-login" element={<CompanyLogin />} />
              <Route path="/individual-login" element={<IndividualLogin />} />
              <Route path="/company-signup" element={<CompanySignup />} />
              <Route path="/individual-signup" element={<IndividualSignup />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/save-listings" element={<SaveListings />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
