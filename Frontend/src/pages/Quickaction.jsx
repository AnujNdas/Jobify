import React from "react";

export function PostJob() {
    return (
        <div className="p-6 bg-white dark:bg-darkBg min-h-full">
            <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
            <form className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Job Title" 
                    className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500" 
                />
                <textarea 
                    placeholder="Job Description" 
                    className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
                <button 
                    type="submit" 
                    className="bg-green-500 text-white py-2 px-4 rounded-lg w-full"
                >
                    Submit Job
                </button>
            </form>
        </div>
    );
}

export function SaveListings() {
    return (
        <div className="p-6 bg-white dark:bg-darkBg min-h-full">
            <h1 className="text-2xl font-bold mb-4">Saved Listings</h1>
            <ul className="space-y-4">
                <li className="p-3 rounded-lg bg-blue-100 dark:bg-blue-500">Job Title 1</li>
                <li className="p-3 rounded-lg bg-blue-100 dark:bg-blue-500">Job Title 2</li>
                <li className="p-3 rounded-lg bg-blue-100 dark:bg-blue-500">Job Title 3</li>
            </ul>
        </div>
    );
}
