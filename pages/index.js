const Index = (props) => {
  return <h1 className="text-blue-500"></h1>;
}

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}