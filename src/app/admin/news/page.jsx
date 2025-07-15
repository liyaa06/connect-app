'use client';

import UserCard from "@/components/ui/user-card";
import useSWR from "swr";

export default function NewsPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: posts,
    error,
    isLoading,
  } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher, { revalidateOnFocus: false });

  if (isLoading){
    return(
      <div className="p-10 text-black">
        <p>
          Loading...
        </p>
      </div>
    );
  }

  if (error){
    return(
      <div className="p-10 text-black">
        <p>
          Gagal memuat data
        </p>
      </div>
    );
  }

  return (
    <section id="content" className="bg-white w-full md:p-10 p-2">
      <div className="flex justify-center h-30 py-8">
        <input
          type="text"
          placeholder="Cari Berita"
          className="border-2 border-gray p-5 w-full rounded-lg text-black "
        />
      </div>
      
      {posts.map((post) => (
        <UserCard
          key={post.id}
          title={post.title}
          description={post.body}
          tag={`User ID: ${post.userId}`}
          statusText={`Post ID: ${post.id}`}
        />
      ))}
    </section>
  )
}


