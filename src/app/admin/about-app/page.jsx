import { IconInfoCircle, IconCode, IconMail } from '@tabler/icons-react';
// Ini adalah "React Component" sederhana.
// Perhatikan, tidak ada 'use client' di atas. Artinya, ini adalah
// "Server Component" secara default di Next.js.
// Komponen ini tidak interaktif (tidak pakai useState, onClick, dll),
// jadi ia bisa disiapkan di server, yang membuatnya lebih cepat dimuat.
const AboutApp = () => {
    // `return` berisi struktur tampilan halaman yang ditulis dalam JSX.
    // JSX terlihat seperti HTML, tapi sebenarnya adalah JavaScript.
    return (
        <div className="p-10 text-black">
            <h1 className="text-4xl font-bold mb-6">Tentang Connect App</h1>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <p className="text-lg leading-relaxed text-gray-700">
                    <strong>Connect App</strong> adalah jembatan digital Anda untuk dunia informasi. Dibuat dengan semangat untuk menghubungkan individu dengan berita terbaru, wawasan mendalam, dan komunitas yang dinamis. 
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                    Misi kami adalah memberdayakan pengguna dengan menyediakan platform yang intuitif, cepat, dan andal untuk mengakses dan berbagi pengetahuan. Di Connect, kami percaya bahwa koneksi yang bermakna dimulai dari informasi yang tepercaya.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <IconInfoCircle size={48} className="text-blue-500 mb-3" />
                    <h2 className="text-2xl font-semibold mb-2">Versi Aplikasi</h2>
                    <p className="text-lg text-gray-600">1.0.0 (Beta)</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <IconCode size={48} className="text-green-500 mb-3" />
                    <h2 className="text-2xl font-semibold mb-2">Developer</h2>
                    <p className="text-lg text-gray-600">Connect App Team</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <IconMail size={48} className="text-yellow-500 mb-3" />
                    <h2 className="text-2xl font-semibold mb-2">Kontak</h2>
                    <a href="mailto:support@connectapp.com" className="text-lg text-blue-600 hover:underline">
                        support@connectapp.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutApp;

