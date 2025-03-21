import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const recommendedJobs = [
    { id: 1, title: "Frontend Developer", company: "Google", salary: "$100k - $120k", location: "Remote" },
    { id: 2, title: "Backend Engineer", company: "Amazon", salary: "$90k - $110k", location: "New York" },
    { id: 3, title: "Full Stack Developer", company: "Microsoft", salary: "$110k - $130k", location: "Remote" },
    { id: 4, title: "UI/UX Designer", company: "Spotify", salary: "$85k - $105k", location: "Berlin" },
];

export default function RecommendedJobs() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendedJobs.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + recommendedJobs.length) % recommendedJobs.length);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto p-1 rounded-lg shadow-md bg-gray-100">
            <h2 className="text-2xl font-bold mb-2">Recommended Jobs</h2>
            <div className="bg-purple-500 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-white">{recommendedJobs[currentIndex].title}</h3>
                <p className="text-yellow-400">{recommendedJobs[currentIndex].company} - {recommendedJobs[currentIndex].location}</p>
                <p className="text-green-500 font-bold mt-2">{recommendedJobs[currentIndex].salary}</p>
            </div>

            {/* Navigation Arrows */}
            <button
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white text-purple-500 p-2 rounded-full shadow-lg hover:bg-gray-100"
                onClick={prevSlide}
            >
                <FaChevronLeft />
            </button>

            <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white text-purple-500 p-2 rounded-full shadow-lg hover:bg-gray-100"
                onClick={nextSlide}
            >
                <FaChevronRight />
            </button>
        </div>
    );
}
