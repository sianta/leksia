import Header from '@components/Header';
import Head from 'next/head';
import React from 'react'
import Footer from '@components/Footer';

export default function Layout(props: LayoutInterface) {
    return (
        <div >
            <Head>
                <title>{props.title ? props.title : "Leksia"}</title>
                <meta name="description" content={props.description ? props.description : "Leksia adalah ensiklopedia terbuka, semua bisa turut andil berkontribusi."} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header Section */}
            <Header />







            {/* Main Section */}
            <main className='min-h-screen'>
                {props.children}
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};


interface LayoutInterface {
    title?: string,
    description?: string,
    children: React.ReactNode
};