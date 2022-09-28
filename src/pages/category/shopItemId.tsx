import type { NextPage } from 'next';
import Head from 'next/head';
import { Breadcrumb } from 'src/components/organisms/BreadCrumb';
import { Carousel } from 'src/components/organisms/Carousel';
import { SimpleCard } from 'src/components/organisms/SimpleCard';
import { Tags } from 'src/components/organisms/Tags';

import { Container, Main } from 'src/styles/Home';

const ShopItemDetailPage: NextPage = () => (
  <>
    <Breadcrumb
      crumbs={[
        {
          label: '文房具の一覧',
          url: '/stationary',
          isActive: false,
        },
        {
          label:
            'シャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシル',
          url: '',
          isActive: true,
        },
      ]}
    />

    <Container>
      <Head>
        <title>商品詳細ページ | Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Main> */}
      <h1>商品名</h1>
      <div>
        <Tags
          tags={[
            {
              id: 'f2a63298-408b-41c0-b135-08bf15c2e66e',
              name: '新商品',
              color: 'orange',
              tag_group: 'shop_item',
            },
            {
              id: 'd77535c3-25f7-4fcd-94a7-9bd4e716c877',
              name: '期間限定',
              color: 'red',
              tag_group: 'shop_item',
            },
            {
              id: '0a0a7546-57d4-47a1-a17c-6e651e46cd1b',
              name: '特別価格',
              color: 'green',
              tag_group: 'shop_item',
            },
          ]}
        />
        <div>税抜 720→360円</div>
      </div>

      <Carousel
        images={[
          'http://placehold.jp/700x400.png?text=1',
          'http://placehold.jp/700x400.png?text=2',
          'http://placehold.jp/700x400.png?text=3',
          'http://placehold.jp/700x400.png?text=4',
        ]}
      />
      <h2>この夏一番のキャッチコピー！</h2>
      <p>
        商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文商品の説明文
      </p>

      <h2>関連商品</h2>
      <SimpleCard
        imageUrl="https://picsum.photos/id/1/300/200"
        description="テキストテキストテキストテキストテキストテキストテキストテキスト"
      />
      <SimpleCard
        imageUrl="https://picsum.photos/id/2/300/200"
        description="テキストテキストテキストテキストテキストテキストテキストテキスト"
      />
      <SimpleCard
        imageUrl="https://picsum.photos/id/3/300/200"
        description="テキストテキストテキストテキストテキストテキストテキストテキスト"
      />
      {/* </Main> */}
    </Container>
  </>
);

export default ShopItemDetailPage;
