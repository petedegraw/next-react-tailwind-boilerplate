import Layout from "components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Heading</h1>
    </Layout>
  );
}
