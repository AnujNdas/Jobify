import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import Modal from "../components/Modal"; // Import the Modal component (you can reuse the Modal from earlier)

const jobs = [
  {
    id: 1,
    title: "UX Designer",
    company: "Dropbox",
    location: "Warszawa",
    tags: ["Remote", "Sketch"],
    salary: "8.8 - 13.7k PLN",
    posted: "2 days ago",
    logo: "https://via.placeholder.com/40",
    description: "We are looking for a UX Designer to join our team and help improve user experiences."
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Twitch",
    location: "Wroclaw",
    tags: ["Remote"],
    salary: "8.2 - 13.5k PLN",
    posted: "2 days ago",
    logo: "https://via.placeholder.com/40",
    description: "Join Twitch as a Product Designer and shape the future of streaming."
  }
];

export default function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  if (!job) {
    return <h2 className="text-center text-red-500">Job not found</h2>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Job Header */}
      <div className="flex items-center space-x-4 border-b pb-4 mb-4">
        <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <p className="text-gray-600 flex items-center">
            <FaBuilding className="mr-2 text-blue-500" /> {job.company}
          </p>
          <p className="text-gray-500 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-red-500" /> {job.location}
          </p>
        </div>
      </div>

      {/* Job Details */}
      <p className="text-gray-700">{job.description}</p>

      <div className="mt-4 flex space-x-2">
        {job.tags.map((tag, index) => (
          <span key={index} className="text-sm bg-gray-200 px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 text-lg font-semibold flex items-center">
        <FaMoneyBillWave className="text-green-500 mr-2" />
        {job.salary}
      </div>

      {/* Actions */}
      <div className="mt-6 flex space-x-4">
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)} // Open modal on click
        >
          Apply Now
        </button>
        <button className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400">Save Job</button>
      </div>

      {/* Modal Component */}
      <Modal isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>
  );
}
