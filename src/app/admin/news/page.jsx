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

/*
Note Belajar (Bagian Penting):

1.  import UserCard from "...": Kita mengimpor komponen `UserCard`. Walaupun namanya
    'UserCard', komponen ini bersifat fleksibel dan bisa kita gunakan kembali untuk
    menampilkan item lain, seperti postingan berita di halaman ini. Ini contoh bagus dari
    "reusability" (kemampuan untuk digunakan kembali).

2.  useSWR('URL', fetcher, options): Ini adalah hook utama untuk mengambil data.
    -   `'https://jsonplaceholder.typicode.com/posts'`: Ini adalah alamat API
        tempat data berita (posts) berada.
    -   `fetcher`: Fungsi yang memberitahu `useSWR` bagaimana cara mengambil data.
    -   `{ data: posts, ... }`: Kita mengambil `data` dari `useSWR` dan langsung
        mengganti namanya menjadi `posts` agar lebih mudah dimengerti.
    -   `{ revalidateOnFocus: false }`: Ini adalah bagian PENTING. Secara default,
        SWR akan mengambil ulang data setiap kali kamu kembali ke tab browser ini.
        Dengan opsi `false`, kita menonaktifkan perilaku itu. Ini berguna agar tidak
        terlalu sering memanggil API tanpa perlu.

3.  if (isLoading) / if (error): Sama seperti halaman lain, ini adalah cara terbaik
    untuk menangani kondisi saat data sedang dimuat atau ketika terjadi error. Ini
    memberikan pengalaman pengguna yang lebih baik.

4.  posts.map((post) => ...): Ini adalah "mantra" di React untuk mengubah sebuah
    array (kumpulan data `posts`) menjadi daftar elemen visual di layar.
    -   Untuk setiap `post` di dalam array `posts`, kita membuat satu komponen `<UserCard>`.

5.  <UserCard ... />: Di sinilah kita "mengoper" data dari setiap `post` ke dalam
    komponen `UserCard` melalui "props".
    -   `key={post.id}`: Prop wajib yang unik untuk setiap item dalam daftar.
    -   `title={post.title}`: Judul dari `post` dikirim ke prop `title` di `UserCard`.
    -   `description={post.body}`: Isi dari `post` dikirim ke prop `description`.
    -   Ini menunjukkan bagaimana komponen induk (`NewsPage`) berkomunikasi dan
        memberi data ke komponen anak (`UserCard`).
*/
