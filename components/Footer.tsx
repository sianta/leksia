import React from 'react'
import Logo, { LogoSianta } from '@components/Logo'
import Link from 'next/link'



const footerMenu = [
    {
        "name": "Kebijakan privasi",
        "href": "",
    },
    {
        "name": "Tentang Leksia",
        "href": "",
    },
    {
        "name": "Penyangkalan",
        "href": "",
    },
    {
        "name": "Pengembang",
        "href": "",
    },
    {
        "name": "Statistik",
        "href": "",
    },
    {
        "name": "Pernyataan kuki",
        "href": "",
    },
]



export default function Footer() {
    return (
        <footer className='py-10 text-xs'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-2 border-y border-y-black py-8 px-4 md:px-0 md:py-16 content-center'>
                    <div className='flex flex-col md:flex-row text-center md:text-left items-center md:space-x-5 '>
                        <Logo />
                        <p className='w-80 mt-3 '>Leksia merupakan sumber bacaan terbuka yang bisa disunting oleh siapa saja. Dibangun dengan semangat literasi mudah dan gratis untuk semua kalangan.</p>
                    </div>

                    <div className='flex items-center justify-center md:justify-end mt-6 md:mt-0'>
                        <p className='text-center md:text-right md:w-96'>
                            Leksia tidak bertanggung jawab atas isi yang ada didalamnya. Setiap penulis bertanggung jawab atas suntingannya masing-masing.
                        </p>
                    </div>
                </div>

                <div className='mt-8 grid md:grid-cols-3 px-4 md:px-0 content-center'>
                    <p className='text-center md:text-left'>
                        <span>Teks tersedia di bawah   </span>
                        <a
                            className='hover:underline'
                            href="https://creativecommons.org/licenses/by-sa/3.0/deed.id">
                            <strong> Lisensi Creative Commons Atribusi-Berbagi Serupa</strong>
                        </a>;
                        ketentuan tambahan mungkin berlaku. Lihat <Link href={"/"} className="hover:underline"> <strong>Ketentuan Penggunaan</strong></Link> untuk lebih jelasnya.
                    </p>




                    <div className='flex flex-col  justify-center items-center text-[11px] space-y-2 my-4 md:my-0'>
                        <p>
                            Disediakan secara gratis oleh
                        </p>
                        <LogoSianta />
                    </div>




                    <div className='flex flex-wrap justify-center md:justify-end space-x-3 h-fit '>
                        {footerMenu.map((menu) => (
                            <Link href={`/${menu.href}`} key={menu.name} className="mb-2 hover:underline" >
                                {menu.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>


        </footer>
    )
}
