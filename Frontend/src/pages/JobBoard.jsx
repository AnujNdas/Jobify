import { useState } from "react";
import JobCard from "../components/Job-card";
import JobFilter from "../components/JobFilter";

const jobs = [
  {
    id: 1,
    title: "UX Designer",
    company: "Dropbox",
    location: "Warszawa",
    tags: ["Remote", "Sketch"],
    salary: "8.8 - 13.7k PLN",
    posted: "2 days ago",
    logo: "https://via.placeholder.com/40"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Twitch",
    location: "Wroclaw",
    tags: ["Remote"],
    salary: "8.2 - 13.5k PLN",
    posted: "2 days ago",
    logo: "https://via.placeholder.com/40"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Twitch",
    location: "Wroclaw",
    tags: ["Remote"],
    salary: "8.2 - 13.5k PLN",
    posted: "2 days ago",
    logo: "https://via.placeholder.com/40"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Twitch",
    location: "Wroclaw",
    tags: ["Remote"],
    salary: "8.2 - 13.5k PLN",
    posted: "2 days ago",
    logo: "https://via.placeholder.com/40"
  },
];

export default function JobBoard() {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleFilterChange = (filters) => {
    let filtered = jobs.filter((job) => {
      return (
        (!filters.searchTerm || job.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
        (!filters.location || job.location === filters.location) &&
        (!filters.salaryRange || job.salary === filters.salaryRange) &&
        (!filters.jobType || job.tags.includes(filters.jobType))
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Job Board</h1>
      <JobFilter onFilterChange={handleFilterChange} />
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
}