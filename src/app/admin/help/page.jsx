'use client';

import { useState } from 'react';
import { IconChevronDown, IconLifebuoy, IconMail } from '@tabler/icons-react';

// Data for FAQs
const faqData = [
    {
        question: "Apa fungsi utama dari Dasbor?",
        answer: "Dasbor adalah halaman utama Anda setelah login. Halaman ini memberikan ringkasan statistik penting secara real-time, seperti jumlah total pengguna terdaftar, total artikel berita yang telah dipublikasikan, dan menampilkan judul berita terbaru. Ini membantu Anda memantau aktivitas aplikasi secara sekilas."
    },
    {
        question: "Bagaimana cara mengelola pengguna?",
        answer: "Anda dapat mengelola pengguna melalui halaman 'User'. Di sana, Anda bisa melihat daftar semua pengguna, menambahkan pengguna baru dengan mengklik tombol 'Tambah Pengguna', mengedit informasi pengguna yang ada, atau menghapusnya dari sistem."
    },
    {
        question: "Apa itu 'Hak Akses' dan bagaimana cara kerjanya?",
        answer: "Halaman 'Hak Akses' (Roles) memungkinkan Anda membuat dan mengelola peran pengguna. Setiap peran dapat memiliki izin yang berbeda. Contohnya, peran 'Admin' memiliki akses penuh, sementara peran 'Editor' mungkin hanya bisa membuat dan mengedit berita. Ini penting untuk mendelegasikan tugas tanpa memberikan akses ke semua fitur."
    },
    {
        question: "Bagaimana cara mempublikasikan artikel berita baru?",
        answer: "Navigasikan ke halaman 'Berita' dari menu. Klik tombol 'Tambah Berita', lalu isi judul dan konten artikel pada form yang tersedia. Setelah selesai, klik 'Simpan' atau 'Publikasikan' untuk menayangkannya."
    },
    {
        question: "Apakah saya bisa mengedit artikel yang sudah dipublikasikan?",
        answer: "Ya, Anda bisa. Di halaman 'Berita', cari artikel yang ingin Anda ubah, lalu klik tombol 'Edit' atau ikon pensil di sebelahnya. Anda akan diarahkan kembali ke form editor di mana Anda dapat membuat perubahan dan menyimpannya kembali."
    },
    {
        question: "Bagaimana cara keluar (logout) dari aplikasi dengan aman?",
        answer: "Untuk keluar dari sesi Anda, cukup klik tombol 'Logout' yang berada di bagian bawah menu navigasi di sisi kiri layar. Ini akan memastikan sesi Anda berakhir dengan aman."
    }
];

const FaqItem = ({ faq, isOpen, onToggle }) => (
    <div className="border-b border-gray-200 py-4 last:border-b-0">
        <button
            onClick={onToggle}
            className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
        >
            <span className="flex-1 pr-2">{faq.question}</span>
            <IconChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
        </button>
        {isOpen && <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>}
    </div>
);

const Help = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index); // Toggle FAQ item open/close state
    };

    return (
        <div className="p-10 text-black">
            <div className="text-left  mb-12">
                <h1 className="text-4xl font-bold mb-2">Pusat Bantuan Connect App</h1>
                <p className="text-lg text-gray-600">Selamat datang! Kami di sini untuk membantu Anda memaksimalkan penggunaan aplikasi.</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Pertanyaan yang Sering Diajukan (FAQ)</h2>
                <div className="bg-white p-6 rounded-lg shadow-md border">
                    {faqData.map((faq, index) => ( // Render each FAQ item
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={openFaqIndex === index}
                            onToggle={() => handleFaqToggle(index)}
                        />
                    ))}
                </div>

                <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center shadow-sm border">
                    <h2 className="text-2xl font-bold mb-4">Masih Butuh Bantuan?</h2>
                    <p className="text-gray-700 mb-6">
                        Jika Anda tidak menemukan jawaban yang Anda cari di atas, jangan ragu untuk menghubungi tim dukungan kami. Kami siap membantu Anda.
                    </p>
                    <a href="mailto:support@connectapp.com" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                        <IconMail className="mr-2" size={20} />
                        Hubungi Dukungan
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Help;

