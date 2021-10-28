import Layout from "../../components/Layout/Layout";
import { getPosts } from "../../service/notion/post";
import PostCard from "../../components/PostCard";
const BlogPage = ({ posts = [] }) => {
  return (
    <Layout>
      <div className="container">
        <div className="header-1 mb-8 pt-8">The Blogs</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 md:gap-14">
          {posts.map((post) => {
            return (
              <div key={post.id} className="mb-8 sm:mb-2">
                <PostCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  let posts = [];
  try {
    const data = await getPosts();
    posts = data.results;
  } catch (error) {
    posts = [];
  }

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
export default BlogPage;
