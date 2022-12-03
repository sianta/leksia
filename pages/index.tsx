import { BigCard, MediumCard, PostInterface } from "@components/Card";
import Layout from "@components/Layout";
import fs from "fs";
import path from 'path';
import matter from 'gray-matter';

export default function Home({ posts }: { posts: any }) {


  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* TODO add recomendation features */}
        {/* <BigCard /> */}
        {/* <div className="text-xl font-bold mt-10 mb-5 px-4 md:px-0">ARTIKEL LAINNYA</div> */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 mb-10 px-4 md:px-0 pt-10">
          {posts.map((post: any) => (
            <MediumCard key={post.slug} slug={post.slug}
              content={""} meta={{
                title: post.meta.title,
                excerpt: post.meta.excerpt,
                featuredImage: post.meta.featuredImage
              }} />
          ))}

        </div>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {
  // Get Files from posts directory
  const files = fs.readdirSync(path.join("_posts"))

  const posts = files.map(filename => {
    // Get Slug
    const slug = filename.replace('.md', '');
    // Get Meta
    const post = fs.readFileSync(
      path.join("_posts", filename),
      'utf-8',
    );

    const { data: meta } = matter(post);

    return {
      slug,
      meta,
    }

  })



  return {
    props: { posts: posts }
  }
}