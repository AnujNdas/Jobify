import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "../pages/Landing";
import JobBoard from "../pages/JobBoard";
import Sidebar from "../components/Sidebar";
import Settings from "../pages/Setting";
import Messenger from "../pages/Messenger";
import { CompanyLogin, IndividualLogin,  } from "../pages/Logins";
import {CompanySignup, IndividualSignup} from "../pages/Signups"
function AppRoutes() {
  const location = useLocation();

  // Define routes that should hide the sidebar
  const hideSidebarRoutes = [
    "/company-login",
    "/individual-login",
    "/company-signup",
    "/individual-signup",
  ];

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {!shouldHideSidebar && <Sidebar />}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jobs" element={<JobBoard />} />
          <Route path="/messages" element={<Messenger />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/company-login" element={<CompanyLogin />} />
          <Route path="/individual-login" element={<IndividualLogin />} />
          <Route path="/company-signup" element={<CompanySignup />} />
          <Route path="/individual-signup" element={<IndividualSignup />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
