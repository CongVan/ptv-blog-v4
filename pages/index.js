import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Service from "../components/Service";
import Team from "../components/Team";
import { getTeam } from "../service/notion/team";
import { getProjects } from "../service/notion/project";
import Project from "../components/Project";
import Subscribe from "../components/Subscribe";

export default function Home({ team, projects }) {
  return (
    <>
      <Layout>
        <Hero />
        <Service />
        <Feature />
        <Team team={team} />
        <Project projects={projects} />
        {/* <Pricing /> */}
        <Subscribe />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getTeam();
  const projects = await getProjects();

  return {
    props: {
      team: data?.results || [],
      projects: projects?.results || [],
    },
    revalidate: 10,
  };
};
