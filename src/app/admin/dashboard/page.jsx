'use client';

import useSWR from "swr";
import { IconUsers, IconNews, IconFileText } from "@tabler/icons-react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const { data: users, error: usersError, isLoading: usersLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher); 
  // Fetching users data dari JSONPlaceholder API
  const { data: news, error: newsError, isLoading: newsLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
  // Fetching news data dari JSONPlaceholder API

  const totalUsers = users ? users.length : 0; // Menghitung total pengguna, jika tidak ada data, akan menjadi 0
  const totalNews = news ? news.length : 0; // Menghitung total berita, jika tidak ada data, akan menjadi 0
  const latestNews = news ? news[0] : null; // Mengambil berita terbaru (pertama dari daftar)

  const isLoading = usersLoading || newsLoading; // Menentukan apakah salah satu dari permintaan masih dalam proses
  const error = usersError || newsError; // Menentukan apakah ada kesalahan dalam salah satu permintaan

  if (isLoading) {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        <p>Failed to load dashboard data.</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-black">Admin Dashboard</h2>
      <p className="text-gray-600 mb-8">Welcome to your admin dashboard! Here is a summary of your application.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Users Card */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md flex items-center">
          <IconUsers className="w-12 h-12 text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-4xl font-bold text-blue-600">{totalUsers}</p>
          </div>
        </div>

        {/* Total News Card */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md flex items-center">
          <IconNews className="w-12 h-12 text-green-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Total News Articles</h3>
            <p className="text-4xl font-bold text-green-600">{totalNews}</p>
          </div>
        </div>

        {/* Latest News Card */}
        {latestNews && (
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1">
             <div className="flex items-start">
                <IconFileText className="w-12 h-12 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Latest News</h3>
                    <p className="text-md font-medium text-yellow-800">{latestNews.title}</p>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;


