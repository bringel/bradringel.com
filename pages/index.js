import { Navigation } from '../components/Navigation';
import { Shell } from '../components/Shell';

const Index = props => {
  return (
    <Shell>
      <Navigation />
    </Shell>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description
    }
  };
}
