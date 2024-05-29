import React from "react";

const candidates = Array(10).fill({
  username: "John Smith",
  email: "johnsmith@gmail.com",
  date: "01-08-2024",
  cv: "view",
});

const CandidatesTable = () => {
  return (
    <div className="w-full mx-auto py-4 px-6 text-gray-950">
      <h1 className="text-2xl font-semibold mb-4">Candidates</h1>
      <div className="overflow-x-auto shadow-sm rounded-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-100 rounded-xl">
              <th className="py-4 px-6 text-gray-700 text-left">Username</th>
              <th className="py-4 px-6 text-gray-700 text-left">Email</th>
              <th className="py-4 px-6 text-gray-700 text-left">Date</th>
              <th className="py-4 px-6 text-gray-700 text-left">CV</th>
              <th className="py-4 px-6 text-gray-700 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} className="hover:bg-gray-200 transition ease-linear cursor-pointer">
                <td className="py-4 px-6 text-gray-700">{candidate.username}</td>
                <td className="py-4 px-6 text-gray-700">{candidate.email}</td>
                <td className="py-4 px-6 text-gray-700">{candidate.date}</td>
                <td className="py-4 px-6 text-blue-500 underline cursor-pointer">
                  {candidate.cv}
                </td>
                <td className="py-4 px-6 text-gray-700">
                  <span className="text-blue-500 cursor-pointer mr-4">
                    Edit
                  </span>
                  <span className="text-red-500 cursor-pointer">Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidatesTable;
