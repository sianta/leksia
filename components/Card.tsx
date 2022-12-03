import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export interface PostInterface {
    slug: string,
    meta: {
        title: string,
        excerpt: string,
        featuredImage: string,
    },
    content: string,
};

export function BigCard() {
    return (
        <div className="grid md:grid-cols-2 gap-10 my-5  ">
            <div className="aspect-w-4 aspect-h-3 bg-black relative overflow-hidden">
                <Image src={"/image.jpeg"} alt={""} fill className="absolute w-full h-auto object-cover" />
            </div>
            <div className='px-4'>
                <span className="text-lg md:text-xl font-semibold text-neutral-500">Rekomendasi Hari Ini</span>
                <Link href={"/detail"}>
                    <h1 className="font-serif font-extrabold text-2xl md:text-4xl  hover:underline line-clamp-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur ex temporibus.</h1>
                </Link>

                <p className="line-clamp-[14] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, culpa similique! Sunt quia ipsa optio sequi aliquid tempore quibusdam sit dolores voluptatibus sed consequatur suscipit iste, earum quidem facere, qui perspiciatis itaque! Tempore, incidunt vero. Possimus suscipit vel rerum dolore earum ea quod dolorem, asperiores consequuntur deserunt? Dolore iusto quaerat incidunt deleniti, delectus enim dignissimos dicta officia illum minima voluptatum omnis quasi eligendi quas cumque officiis quo aut molestias possimus asperiores quis ullam! Totam laboriosam, aut non corporis voluptatibus id quo culpa harum mollitia ullam ipsum necessitatibus tempore tempora expedita iusto porro dolorem minima, possimus unde cum quia. Repudiandae facilis aliquam vero necessitatibus, in doloribus laboriosam et sint sed doloremque hic vitae commodi debitis, voluptatibus ullam esse possimus ipsa a harum nihil beatae? Nam alias omnis voluptatum, quae temporibus voluptatem repellendus placeat aperiam iure enim. Corporis, dicta dolorem! Ducimus ut accusantium doloribus enim, sequi esse porro dignissimos totam omnis neque expedita maxime ad pariatur distinctio error quae, magni ex veniam magnam maiores facere natus consequuntur quis iusto. Nesciunt vel vitae rerum provident ad sapiente corrupti ipsum veritatis excepturi, tempore voluptatibus.</p>
            </div>
        </div>
    );
};

export function MediumCard(props: PostInterface) {
    return (
        <div className="flex flex-col md:flex-row items-center space-x-5">
            <div className="w-full md:w-52 mb-4 md:mb-0">
                <div className="aspect-w-6 aspect-h-3 md:aspect-w-3 md:aspect-h-3  relative overflow-hidden">
                    <Image src={`${props.meta.featuredImage}`} alt={""} fill className="absolute w-full h-auto object-cover" />
                </div>
            </div>
            <div className="w-full">
                <Link href={`/${props.slug}`}>
                    <h1 className="font-serif font-extrabold text-xl  hover:underline line-clamp-3 ">{props.meta.title}</h1>
                </Link>
                <p className="line-clamp-3">{props.meta.excerpt}</p>
            </div>
        </div>
    );
};