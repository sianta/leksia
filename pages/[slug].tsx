import Layout from '@components/Layout';
import React from 'react';
import Image from 'next/image';
import fs from "fs";
import path from 'path';
import matter from 'gray-matter';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { PostBody } from '@components/Post';


export default function Detail({ meta, slug, content }: { meta: any, slug: any, content: any }) {
    return (
        <Layout title={meta.title}>
            <div className='max-w-6xl mx-auto md:mt-10'>

                {/* Featured Image */}
                <div className='md:w-[500px] w-full md:ml-10 md:mb-10 flex flex-col items-center border  md:float-right '>
                    {/* Image */}
                    <div className='p-4 w-full h-full'>
                        <div className='w-full  h-96 relative'>
                            <Image src={`${meta.featuredImage}`} alt={""} fill className="absolute w-full h-auto object-contain" />
                        </div>
                    </div>
                    {/* Caption */}
                    <div className='p-4 border-t '>
                        <div className='text-xs  h-fit w-fulll md:max-w-xl text-center'>{meta.featuredImageCaption}</div>
                    </div>
                </div>

                <div className='px-4 md:px-0'>
                    {/* Title*/}
                    <h1 className="font-serif font-extrabold text-5xl mb-5">{meta.title}</h1>
                    <div className='prose max-w-none prose-neutral '>

                        {/* Content */}
                        <PostBody content={content} />

                    </div>


                    <div className='mt-20 flex flex-col md:flex-row justify-between items-center text-base'>
                        <p>
                            Terahir disunting pada <span className='font-semibold mb-4 md:mb-0'>20 Desember 2022</span> oleh : <span className='font-semibold'>nazhoir</span>
                        </p>
                        <button className='flex space-x-2 px-5 py-2 bg-neutral-300 rounded-full'>
                            <div className='w-5 h-5'>
                                <PencilSquareIcon />
                            </div>
                            <span>Sunting artikel ini</span>
                        </button>
                    </div>
                </div>
            </div>

        </Layout>
    )
}


export async function getStaticPaths() {
    // Get Files from posts directory
    const files = fs.readdirSync(path.join("_posts"));

    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    }));
    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps({ params: { slug } }: { slug: string, params: any }) {

    const post = fs.readFileSync(path.join('_posts', slug + '.md'), 'utf-8');
    const { data: meta, content } = matter(post);
    return {
        props: {
            meta,
            slug,
            content,
        }
    };
};