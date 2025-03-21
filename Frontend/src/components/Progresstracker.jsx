import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useState } from "react";

const steps = ["Applied", "Interview Scheduled", "Offer Received"];

const getStepColor = (index) => {
    switch (index) {
        case 0: return "bg-red-500";      // Applied - Red
        case 1: return "bg-yellow-500";   // Interview - Yellow
        case 2: return "bg-green-500";    // Offer - Green
        default: return "bg-gray-300";    // Default Grey
    }
};

export default function ProgressTracker({ currentStep }) {
    return (
        <div className="flex items-center justify-center gap-4 p-6">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    {/* Step Icon */}
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                        index < currentStep
                            ? getStepColor(index)
                            : "bg-gray-300"
                    }`}>
                        {index < currentStep ? <FaCheckCircle /> : <FaRegCircle />}
                    </div>
                    
                    {/* Step Title */}
                    <p className={`ml-2 text-sm ${index < currentStep ? getStepColor(index).replace("bg-", "text-") + " font-bold" : "text-gray-400"}`}> 
                        {step} 
                    </p>

                    {/* Connecting Line (except last step) */}
                    {index !== steps.length - 1 && (
                        <div className="w-12 h-1 bg-gray-300 mx-2" 
                            style={{ backgroundColor: index < currentStep - 1 ? "#8B5CF6" : "#D1D5DB" }}>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
