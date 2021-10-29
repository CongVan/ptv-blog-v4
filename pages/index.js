import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Service from "../components/Service";
import Team from "../components/Team";
import { getTeam } from "../service/notion/team";

export default function Home({ team }) {
  return (
    <>
      <Layout>
        <Hero />
        <Service />
        <Feature />
        <Team team={team} />
        <Pricing />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getTeam();

  return {
    props: {
      team: data?.results || [],
    },
    revalidate: 10,
  };
};
