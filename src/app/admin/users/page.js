'use client';

import UserCard from "@/components/ui/user-card";
import { dataUser } from "@/mock/data-user";
import {
  IconLogout,
  IconLogout2,
  IconUser,
  IconUserCog,
} from "@tabler/icons-react";
import useSWR from "swr";

export default function UserPage() {
  // `dataUser` dan ikon-ikon di atas diimpor tapi tidak digunakan di sini.
  // Ini adalah praktik yang baik untuk menghapus impor yang tidak terpakai agar kode tetap bersih.

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // Menggunakan hook useSWR untuk mengambil data dari API.
  const {
    data: users, // Data yang berhasil diambil akan disimpan di sini, dan kita beri nama 'users'.
    error,       // Jika terjadi error, informasinya akan disimpan di sini.
    isLoading,   // Bernilai `true` selama proses pengambilan data berlangsung.
  } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

  // Bagian ini akan tampil HANYA JIKA data sedang dimuat (isLoading === true).
  // Ini penting untuk memberi tahu pengguna bahwa aplikasi sedang bekerja.
  if (isLoading){
    return(
      <div className="p-10">
        <p className="text-black">
          Loading...
        </p>
      </div>
    );
  }

  // Bagian ini akan tampil HANYA JIKA terjadi kesalahan saat mengambil data.
  if (error){
    return(
      <div className="p-10">
        <p className="text-black">
          Gagal memuat data
        </p>
      </div>
    );
  }

  // Tampilan utama jika data berhasil dimuat dan tidak ada error.
  return (
    <section id="content" className="bg-white w-full p-4">
      {/* Ini adalah kolom pencarian, saat ini hanya tampilan. */}
      <div className="flex justify-center h-30 py-8">
        <input
          type="text"
          placeholder="Cari user"
          className="border-2 border-gray p-5 w-full rounded-lg text-black "
        />
      </div>

      {/* .map() adalah cara untuk mengulang setiap item dalam array 'users'. */}
      {/* Untuk setiap 'user' dalam data, kita akan membuat satu komponen UserCard. */}
      {users.map((user) => (
        <UserCard
          key={user.id} // 'key' wajib ada dan harus unik, membantu React mengidentifikasi item.
          title={user.name} // Mengirim nama user ke prop 'title' di UserCard.
          description={user.email} // Mengirim email ke prop 'description'.
          tag={user.company.name} // Mengirim nama perusahaan ke prop 'tag'.
          statusText={`ID: ${user.id}`} // Mengirim ID sebagai status.
        />
      ))}

      {/* Tombol untuk menambah user, saat ini hanya tampilan. */}
      <div className="text-right ">
        <button className="text-black text-4xl border-2 rounded w-full bg-gray-300 border-gray-300 ">
          +
        </button>
      </div>
    </section>
  );
}

/*
Note Belajar (Bagian Penting):

1.  'use client': Menandakan ini adalah "Client Component". Wajib digunakan jika kamu ingin
    memakai hooks seperti `useSWR` yang berinteraksi dengan browser (misalnya untuk fetching data).

2.  useSWR('URL', fetcher): Ini adalah "jantung" dari pengambilan data di halaman ini.
    -   `useSWR`: Hook (fungsi khusus) dari library SWR yang membuat pengambilan data jadi sangat mudah.
    -   `'https://jsonplaceholder.typicode.com/users'`: Alamat API tempat kita mengambil data daftar pengguna.
    -   `fetcher`: Fungsi sederhana yang kita buat untuk memberitahu SWR bagaimana cara mengambil data (yaitu dengan `fetch`).
    -   `{ data: users, error, isLoading }`: `useSWR` secara otomatis memberikan tiga variabel status yang sangat berguna:
        - `isLoading`: Benar/Salah, apakah data masih dalam proses diambil?
        - `error`: Benar/Salah, apakah ada error saat mengambil data?
        - `data`: Jika berhasil, data dari API akan ada di sini. Kita menamainya `users` agar lebih mudah dibaca.

3.  if (isLoading) / if (error): Ini disebut "Conditional Rendering" (Tampilan Bersyarat).
    - Ini adalah praktik terbaik untuk memberikan pengalaman yang baik bagi pengguna.
    - Daripada menampilkan halaman kosong, kita tampilkan pesan "Loading..." atau "Gagal memuat data".

4.  users.map((user) => ...): Ini adalah cara standar di React untuk menampilkan sebuah daftar (list).
    - `.map()` akan "mengunjungi" setiap objek pengguna di dalam array `users`.
    - Untuk setiap `user`, kita merender (menampilkan) satu komponen `<UserCard>`.

5.  <UserCard key={...} title={...} ... />:
    - Ini adalah cara kita menggunakan komponen lain (`UserCard`) dan mengirimkan data ke dalamnya.
    - Data ini disebut "props". Jadi, kita mengirim `name` dari API sebagai prop `title` ke komponen `UserCard`.
    - `key={user.id}`: Ini sangat penting. React butuh `key` yang unik untuk setiap item di dalam list agar bisa mengelola list dengan efisien, terutama saat ada perubahan data.

*/
