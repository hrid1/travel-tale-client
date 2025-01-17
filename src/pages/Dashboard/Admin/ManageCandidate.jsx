import { useState, useEffect } from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spiner from "../../../components/Spiner";
import toast from "react-hot-toast";

const ManageCandidate = () => {
  //   const [, setCandidates] = useState([]);

  //   // Fetch candidates from the backend
  //   useEffect(() => {
  //     const fetchCandidates = async () => {
  //       try {
  //         const response = await axios.get("/api/candidates"); // Replace with your API endpoint
  //         setCandidates(response.data);
  //       } catch (error) {
  //         console.error("Error fetching candidates:", error);
  //       }
  //     };
  //     fetchCandidates();
  //   }, []);

  //   // Handle accept action
  //   const handleAccept = async (candidateId) => {
  //     try {
  //       await axios.post(`/api/candidates/${candidateId}/accept`); // Replace with your API endpoint
  //       setCandidates((prev) =>
  //         prev.filter((candidate) => candidate._id !== candidateId)
  //       );
  //       alert("Candidate accepted and promoted to tour-guide role.");
  //     } catch (error) {
  //       console.error("Error accepting candidate:", error);
  //       alert("Failed to accept candidate.");
  //     }
  //   };

  //   // Handle reject action
  //   const handleReject = async (candidateId) => {
  //     try {
  //       await axios.delete(`/api/candidates/${candidateId}`); // Replace with your API endpoint
  //       setCandidates((prev) =>
  //         prev.filter((candidate) => candidate._id !== candidateId)
  //       );
  //       alert("Candidate rejected and application deleted.");
  //     } catch (error) {
  //       console.error("Error rejecting candidate:", error);
  //       alert("Failed to reject candidate.");
  //     }
  //   };

  //   load all candidates
  const {
    data: candidates = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["candidate"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/users/requested");
      return data;
    },
  });
  // manage accept
  const handleAccept = async (id) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/manage/user/${id}`,
        {
          role: "guide",
          status: "Accepted",
        }
      );
      //   console.log(data);
      toast("👍 Request Accepted!");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  //   manage reject
  const handleReject = async (id) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/manage/user/${id}`,
        {
          role: "tourist",
          status: "Rejected",
        }
      );
      console.log(data);
      toast("👎 Requested Rejected!");
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) return <Spiner />;
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-2xl font-bold text-cyan-600 mb-6">
        Manage Candidates
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-cyan-500 text-white">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Application Title</th>
              <th className="py-2 px-4">CV</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.length > 0 ? (
              candidates.map((candidate, index) => (
                <tr key={candidate._id} className="">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{candidate.name}</td>
                  <td className="py-2 px-4">{candidate.role || "Tourist"}</td>
                  <td className="py-2 px-4">{candidate.info.title}</td>
                  <td className="py-2 px-4">{candidate.info.cvLink}</td>
                  <td className="py-2 px-4 flex ">
                    <button
                      className="btn btn-sm bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center "
                      onClick={() => handleAccept(candidate._id)}
                    >
                      <MdCheckCircle />
                      <span>Accept</span>
                    </button>
                    <button
                      className="btn btn-sm bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center "
                      onClick={() => handleReject(candidate._id)}
                    >
                      <MdCancel />
                      <span>Reject</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No candidates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCandidate;
