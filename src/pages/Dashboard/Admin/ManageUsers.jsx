import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spiner from "../../../components/Spiner";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // Load users data from the backend
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users", search, roleFilter],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/allusers?search=${search}&filter=${roleFilter}`
      );
      return data;
    },
  });
  console.log(roleFilter);
  // // Filtered users based on search and role
  // const filteredUsers = users.filter((user) => {
  //   const matchesSearch = user.name
  //     .toLowerCase()
  //     .includes(search.toLowerCase());
  //   const matchesRole = roleFilter ? user.role === roleFilter : true;
  //   return matchesSearch && matchesRole;
  // });

  

  // if (isLoading) return <Spiner />;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-2xl font-bold text-cyan-600 mb-6 text-center">
        User Management
      </h2>

      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 ">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name"
          className="input input-bordered w-full md:w-1/4 border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter by Role */}
        <select
          className="select select-bordered w-full md:w-1/4 border-cyan-500 focus:ring-cyan-500 focus:border-cyan-500"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="tourist">Tourist</option>
          <option value="guide">Tour Guide</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto px-2 ">
        <table className="table table-zebra  mx-auto bg-white shadow-lg  rounded-lg">
          <thead>
            <tr className="bg-cyan-500 text-white text-center">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id} className="text-center">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4 capitalize">{user.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No users found.

                  {isLoading && <Spiner />}
                </td>
             
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
