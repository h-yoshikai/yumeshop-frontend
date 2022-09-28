import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Carousel } from 'src/components/organisms/Carousel';

import { Container, Main, Title, TokenTest } from 'src/styles/Home';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Yumeshop</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Image src="/shopping-bag.jpg" alt="買い物袋" width={600} height={600} />

      <TokenTest>
        <Title>Welcome to Yumeshop</Title>
      </TokenTest>
    </Main>

    <Carousel
      images={[
        'http://placehold.jp/700x400.png?text=1',
        'http://placehold.jp/700x400.png?text=2',
        'http://placehold.jp/700x400.png?text=3',
        'http://placehold.jp/700x400.png?text=4',
      ]}
    />
  </Container>
);

export default Home;
