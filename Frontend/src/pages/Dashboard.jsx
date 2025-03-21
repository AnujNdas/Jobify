
import Landing from "./Landing";
import RecommendedJobs from "../components/Ui/Recommendation";

export default function Dashboard() {
  return (
    <div className="flex min-h-full">
      {/* Sidebar */}
      
      {/* Main Content */}
      <div className="flex-1 relative">
        <Landing/>
        <RecommendedJobs/>
      </div>
    </div>
  );
}
