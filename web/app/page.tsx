import { Pokemons } from "@/components/Pokemons";
import Layout from "@/containers/Layout";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Pokemons />
    </Layout>
  );
};

export default IndexPage;
