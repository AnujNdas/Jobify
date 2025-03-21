import { useNavigate } from "react-router-dom";
import ProgressTracker from "./Progresstracker";
export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/jobs/${job.id}`)}
      className="cursor-pointer bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 rounded-lg shadow flex items-center space-x-4 hover:shadow-md transition"
    >
      {/* Company Logo */}
      <div className="w-12 h-12 flex-shrink-0">
        <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
      </div>

      {/* Job Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{job.title}</h3>
        <p className="text-black-500 text-sm">{job.company} - {job.location}</p>
        <div className="mt-2 flex space-x-2">
          {job.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-black px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
          {/* Progress Tracker */}
    <div className="mt-3">
        <ProgressTracker currentStep={job.status} />
    </div>
      {/* Job Details */}
      <div className="text-right">
        <p className="font-bold">{job.salary}</p>
        <p className="text-sm text-gray-500">{job.posted}</p>
      </div>
    </div>
  );
}
