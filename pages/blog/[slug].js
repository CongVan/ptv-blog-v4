import Layout from "../../components/Layout/Layout";
import { Notion, NotionClient } from "../../service/notion";
import { parsePageId } from "notion-utils";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import { PostMapper } from "../../models/Post";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import BreadCrumb from "../../components/shared/BreadCrumb";
import { useMemo, useRef } from "react";
import { getPosts } from "../../service/notion/post";
import RelatedPost from "../../components/RelatedPost";
import { NextSeo } from "next-seo";

import "gitalk/dist/gitalk.css";
import Styles from "./blog.module.scss";
import dynamic from "next/dynamic";
import PostSharing from "../../components/PostSharing";
import PostCard, { PostTag } from "../../components/PostCard";
const GitalkComponent = dynamic(() => import("gitalk/dist/gitalk-component"));

const PostPage = ({ post, recordMap = {}, relatedPost = [] }) => {
  const router = useRouter();
  const summaryRef = useRef(null);
  // const CONFIG = {
  //   GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  //   GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  //   GITHUB_REPO: process.env.GITHUB_REPO,
  //   GITHUB_OWNER: process.env.GITHUB_OWNER,
  // };
  // console.log("config", CONFIG);
  const links = useMemo(() => {
    if (router.isFallback) return [];
    return [
      {
        to: "/",
        label: "Home",
      },
      {
        to: "/blog",
        label: "Blog",
      },
      {
        to: post.slug,
        label: post.title,
        active: true,
      },
    ];
  }, [router.isFallback]);

  return (
    <Layout>
      <div className="">
        {router.isFallback ? (
          "Loading..."
        ) : (
          <>
            <NextSeo title={post.title} description={post.sapo} />
            <div className="mb-2 container px-0">
              <BreadCrumb links={links} />
            </div>

            <div className="">
              <div className={Styles.postContent}>
                <NotionRenderer
                  recordMap={recordMap}
                  fullPage={true}
                  bodyClassName={Styles.postBody}
                  minTableOfContentsItems={0}
                  showTableOfContents={true}
                  pageHeader={
                    <>
                      <div
                        ref={summaryRef}
                        id="postSummary"
                        className={` hidden md:flex w-full justify-between items-center md:pb-8`}
                      >
                        <div className="flex text-sm text-gray-600 items-center ">
                          <div className=" flex items-center relative w-8 h-8 rounded-full overflow-hidden ">
                            <Image
                              src={post.author.avatar}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="ml-2">
                            <span className="">{post.author.name}</span>
                            <span className="mx-2">/</span>
                            <span className=" ">{post.date}</span>
                          </div>
                        </div>
                        {post && process.browser && (
                          <div className="space-x-1">
                            <PostSharing post={post} />
                          </div>
                        )}
                      </div>
                      <div className="pb-4">
                        <PostTag tags={post.tags} />
                      </div>
                    </>
                  }
                  pageCover={
                    <div className="relative aspect-w-5 md:aspect-h-1 aspect-h-2 container">
                      <Image
                        src={post.cover}
                        layout="fill"
                        objectFit="cover"
                        blurDataURL={post.cover}
                        placeholder="blur"
                      ></Image>
                    </div>
                  }
                  pageFooter={
                    <div
                      ref={summaryRef}
                      id="postSummary"
                      className={Styles.postSummary}
                    >
                      <div className="flex text-sm text-gray-600 items-center">
                        <div className=" flex items-center relative w-8 h-8 rounded-full overflow-hidden ">
                          <Image
                            src={post.author.avatar}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="ml-2 flex flex-col md:flex-row">
                          <div className="">{post.author.name}</div>
                          <div className="hidden md:block mx-2">/</div>
                          <div className=" ">{post.date}</div>
                        </div>
                      </div>
                      {post && process.browser && (
                        <div className="space-x-1">
                          <PostSharing post={post} />
                        </div>
                      )}
                    </div>
                  }
                ></NotionRenderer>
              </div>

              <div
                className="max-w-notion mx-auto px-4 md:px-0"
                suppressHydrationWarning={true}
              >
                {process.browser && post && post.id && (
                  <GitalkComponent
                    options={{
                      clientID: "fa7caa253a8a19d8ea15",
                      clientSecret: "d55b6caef24e2013165e3c56372b0e21985572eb",
                      repo: "blog-comment", // The repository of store comments,
                      title: post.title,
                      owner: "PTV-Team",
                      admin: ["PTV-Team"],
                      id: post.id, // Ensure uniqueness and length less than 50
                      distractionFreeMode: false, // Facebook-like distraction free mode
                    }}
                  />
                )}
              </div>
            </div>
            <div className="container">
              <div className="header-1 md:my-12 text-center">Related Posts</div>
              <RelatedPost posts={relatedPost} />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  let posts = [];
  try {
    const { results } = await getPosts({ page_size: 1 });
    posts = results;
  } catch (error) {
    posts = [];
  }

  const paths = posts.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug || "";

  const pageId = parsePageId(slug, { uuid: false });
  try {
    const recordMap = await NotionClient.getPage(pageId);

    const post = await Notion.pages.retrieve({ page_id: pageId });
    const data = await getPosts({ page_size: 5 });
    const relatedPost = data.results;

    return {
      props: {
        post: post ? PostMapper(post) : null,
        recordMap: recordMap || null,
        relatedPost: relatedPost ? relatedPost : null,
        pageId,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PostPage;
