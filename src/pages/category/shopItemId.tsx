import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Container, Main, Title, TokenTest } from 'src/styles/Home';

const ShopItemDetailPage: NextPage = () => (
  <Container>
    <Head>
      <title>商品詳細ページ | Yumeshop</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Image src="/shopping-bag.jpg" alt="買い物袋" width={600} height={600} />

      <TokenTest>
        <Title>商品詳細ページ | Yumeshop</Title>
      </TokenTest>
    </Main>
  </Container>
);

export default ShopItemDetailPage;
