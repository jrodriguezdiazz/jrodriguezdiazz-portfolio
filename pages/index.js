import ContainerBlock from '../components/ContainerBlock';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';

export default function Home({ repositories }) {
  return (
    <ContainerBlock title="Jorge Rodríguez ~ Developer">
      <Hero />
      {/*<FavoriteProjects />*/}
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  return {
    props: {
      repositories,
    },
  };
};
