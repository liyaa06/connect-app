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


