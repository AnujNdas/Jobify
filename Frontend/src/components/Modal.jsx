// Modal.js
import React from "react";

function Modal({ isModalOpen, closeModal }) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-95 hover:scale-100">
        <h2 className="text-lg font-semibold mb-2">Apply for this Job</h2>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-2"
          aria-label="Your Name"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded mb-2"
          aria-label="Your Email"
        />
        <input
          type="file"
          className="w-full p-2 border rounded mb-2"
          aria-label="Upload Resume"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded"
            aria-label="Cancel"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            aria-label="Submit Application"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
