// "use client" menandakan bahwa komponen ini adalah "Client Component".
// Artinya, komponen ini bisa menggunakan fitur interaktif di browser,
// seperti mengelola state (useState) dan merespons klik dari pengguna (onClick).
// Ini penting karena kita punya sidebar yang bisa dibuka-tutup.
"use client";

// --- IMPORTS ---
// Di sini kita mengimpor semua "bahan" yang kita butuhkan.

// Mengimpor 'useState' dari React. Ini adalah "Hook" yang memungkinkan
// komponen kita untuk "mengingat" sesuatu. Dalam kasus ini, kita akan menggunakannya
// untuk mengingat apakah sidebar sedang terbuka atau tertutup.
import { useState } from "react";

// Mengimpor komponen 'Link' dari Next.js.
// 'Link' ini cerdas, ia membuat perpindahan antar halaman terasa cepat
// tanpa perlu me-reload seluruh halaman, sehingga pengalaman pengguna lebih baik.
import Link from "next/link";

// Mengimpor berbagai ikon dari library '@tabler/icons-react'.
// Menggunakan library ikon membuat tampilan aplikasi lebih menarik dan profesional.
import {
  IconLogout2,
  IconNews,
  IconUser,
  IconUserCog,
  IconHome,
  IconHelp,
  IconRobot,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

// --- KOMPONEN UTAMA ---
// Ini adalah komponen utama kita. 'AdminLayout' akan membungkus halaman-halaman lain.
export default function AdminLayout({ children }) {
  // Di sinilah kita menggunakan 'useState'.
  // 'isSidebarOpen' adalah variabel yang menyimpan kondisi (true/false).
  // 'setSidebarOpen' adalah fungsi untuk mengubah nilai 'isSidebarOpen'.
  // Nilai awalnya adalah 'false', artinya sidebar tertutup saat halaman pertama kali dimuat.
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Ini adalah cara yang rapi untuk menyimpan daftar link navigasi.
  // Kita membuat sebuah array of objects. Setiap object berisi data untuk satu link.
  // Jika nanti ingin menambah menu baru, cukup tambahkan satu object lagi di sini.
  const navLinks = [
    { href: "/admin/dashboard", icon: <IconHome />, label: "Dashboard" },
    { href: "/admin/users", icon: <IconUser />, label: "User" },
    { href: "/admin/roles", icon: <IconUserCog />, label: "Hak akses" },
    { href: "/admin/news", icon: <IconNews />, label: "Berita" },
    { href: "/admin/help", icon: <IconHelp />, label: "Help" },
    { href: "/admin/about-app", icon: <IconRobot />, label: "About App" },
  ];

  // 'return' berisi struktur HTML (ditulis dalam JSX) dari komponen ini.
  return (
    // 'div' utama yang membungkus seluruh layout.
    <div className="relative flex min-h-screen bg-gray-100">
      
      {/* Overlay untuk tampilan mobile */}
      {/* Ini adalah "conditional rendering".
          Overlay gelap ini hanya akan muncul jika 'isSidebarOpen' bernilai 'true'.
          'md:hidden' berarti overlay ini akan disembunyikan di layar ukuran medium ke atas (desktop). */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)} // Kalau overlay diklik, sidebar akan tertutup.
        ></div>
      )}

      {/* Sidebar (Menu Samping) */}
      <aside
        id="navigation"
        // ClassName ini dinamis.
        // Bagian `${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}` akan:
        // - Memberi class 'translate-x-0' (tampil) jika sidebar terbuka.
        // - Memberi class '-translate-x-full' (sembunyi ke kiri) jika sidebar tertutup.
        // Ini yang menciptakan efek animasi geser (slide).
        className={`fixed inset-y-0 left-0 z-30 flex w-72 transform flex-col bg-white p-6 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 border-r-2 border-gray-200 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Bagian atas sidebar: Judul dan tombol close */}
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-black">Connect</h1>
          <button
            className="text-black md:hidden" // Tombol close hanya muncul di mobile.
            onClick={() => setSidebarOpen(false)}
          >
            <IconX />
          </button>
        </div>

        {/* Navigasi utama */}
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-2">
            {/* Kita menggunakan '.map()' untuk me-render daftar link secara otomatis
                berdasarkan array 'navLinks' yang sudah kita buat di atas.
                Ini jauh lebih efisien daripada menulis setiap link satu per satu. */}
            {navLinks.map((link) => (
              // 'key' sangat penting di React. Ia membantu React mengenali setiap elemen
              // dalam list secara unik, ini penting untuk performa.
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setSidebarOpen(false)} // Setiap link diklik, sidebar otomatis tertutup (berguna di mobile).
                  className="flex items-center gap-3 rounded-lg p-3 text-lg font-bold text-gray-800 transition-colors hover:bg-black hover:text-white"
                >
                  {link.icon} {/* Menampilkan ikon */}
                  <span>{link.label}</span> {/* Menampilkan teks label */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bagian bawah sidebar: Tombol Logout */}
        <div>
          <button className="flex w-full items-center gap-3 rounded-lg p-3 text-lg font-bold text-gray-800 transition-colors hover:bg-black hover:text-white">
            <IconLogout2 />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Konten Utama */}
      <div className="flex flex-1 flex-col">
        {/* Header untuk tampilan mobile */}
        {/* Header ini hanya akan muncul di mobile ('md:hidden') */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 md:hidden">
          <h1 className="text-2xl font-bold text-black">Connect</h1>
          {/* Tombol hamburger menu untuk membuka sidebar */}
          <button onClick={() => setSidebarOpen(true)} className="text-black">
            <IconMenu2 />
          </button>
        </header>

        {/* Di sinilah konten dari setiap halaman akan dirender.
            '{children}' adalah properti khusus di React yang berisi komponen
            atau elemen yang "dibungkus" oleh komponen ini. Jadi, saat kamu membuka
            halaman /admin/dashboard, komponen Dashboard-lah yang akan menjadi 'children'. */}
        <main className="flex-1 bg-white">{children}</main>
      </div>
    </div>
  );
}