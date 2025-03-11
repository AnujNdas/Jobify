import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";

export default function JobFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [jobType, setJobType] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ searchTerm, location, salaryRange, jobType });
  };

  return (
    <div className="flex space-x-4 mb-4 bg-transparent p-4 rounded-lg shadow-md">
      <div className="relative w-1/3">
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search jobs..."
          className="border p-2 pl-10 w-full rounded-lg"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); handleFilterChange(); }}
        />
      </div>
      <div className="relative w-1/4">
        <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
        <select
          className="border p-2 pl-10 w-full rounded-lg"
          value={location}
          onChange={(e) => { setLocation(e.target.value); handleFilterChange(); }}
        >
          <option value="">All Locations</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Wroclaw">Wroclaw</option>
        </select>
      </div>
      <div className="relative w-1/4">
        <FaMoneyBillWave className="absolute left-3 top-3 text-gray-500" />
        <select
          className="border p-2 pl-10 w-full rounded-lg"
          value={salaryRange}
          onChange={(e) => { setSalaryRange(e.target.value); handleFilterChange(); }}
        >
          <option value="">All Salaries</option>
          <option value="8.8 - 13.7k PLN">8.8 - 13.7k PLN</option>
          <option value="8.2 - 13.5k PLN">8.2 - 13.5k PLN</option>
        </select>
      </div>
      <div className="relative w-1/4">
        <FaBriefcase className="absolute left-3 top-3 text-gray-500" />
        <select
          className="border p-2 pl-10 w-full rounded-lg"
          value={jobType}
          onChange={(e) => { setJobType(e.target.value); handleFilterChange(); }}
        >
          <option value="">All Job Types</option>
          <option value="Remote">Remote</option>
          <option value="Sketch">Sketch</option>
        </select>
      </div>
    </div>
  );
}
