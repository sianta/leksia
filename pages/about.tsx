import Layout from '@components/Layout';
import { PostBody } from '@components/Post';
import React from 'react';

export default function About() {
    return (
        <Layout title='Tentang Leksia'>
            <div className='max-w-6xl mx-auto mt-10'>
                <PostBody content='# Tentang' />
            </div>
        </Layout>
    );
};
