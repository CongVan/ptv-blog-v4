import { ProjectMapper } from "../../models/Project";
import { NotionClient, Notion } from "../../service/notion";
import { parsePageId } from "notion-utils";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "../../service/notion/project";
import { NotionRenderer, CollectionRow, Collection } from "react-notion-x";
import "react-notion-x/src/styles.css";
import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import "rc-dropdown/assets/index.css";

const ProjectPage = ({ project, recordMap, pageId }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(recordMap?.block);
  }, [recordMap]);
  return (
    <Layout>
      {router.isFallback ? (
        "Loading..."
      ) : (
        <>
          <NotionRenderer
            recordMap={recordMap}
            fullPage
            mapImageUrl={(url, block) => {
              return url;
            }}
            pageCover={
              <div className="relative aspect-w-6 aspect-h-2 w-full">
                <Image
                  src={project.cover}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={project.cover}
                  placeholder="blur"
                  className=" object-top"
                ></Image>
              </div>
            }
            components={{
              collectionRow: CollectionRow,
              collection: Collection,
            }}
          />
        </>
      )}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  let projects = [];
  try {
    const { results } = await getProjects({ page_size: 100 });
    projects = results;
  } catch (error) {
    projects = [];
  }

  const paths = projects.map(({ slug }) => {
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

    const project = await Notion.pages.retrieve({ page_id: pageId });

    return {
      props: {
        project: project ? ProjectMapper(project) : null,
        recordMap: recordMap || null,
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
export default ProjectPage;
