import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Breadcrumb } from 'src/components/organisms/BreadCrumb';
import { Carousel } from 'src/components/organisms/Carousel';
import { SimpleCard } from 'src/components/organisms/SimpleCard';
import { Tags } from 'src/components/organisms/Tags';
import useSWR, { Fetcher } from 'swr';

import { Container, List } from 'src/styles/Home';
import { ShopItemDetailResponse } from 'src/types/schemas/ShopItemDetailResponse';
import styled, { css } from 'styled-components';
import { colors, fontSizes } from 'src/styles/Tokens';

const SmallWrapper = styled.span`
  font-size: ${fontSizes.fontSize14};
  color: ${colors.Gray};
`;

const BigWrapper = styled.span`
  font-size: ${fontSizes.fontSize24};
`;

const RedWrapper = styled.div<Pick<ShopItemDetailResponse, 'price'>>`
  ${(props) =>
    props.price.discounted &&
    css`
      color: ${colors.Red};
    `}
`;

const HStack = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const ShopItemDetailPage: NextPage = () => {
  const fetcher: Fetcher<ShopItemDetailResponse> = (url: string) =>
    fetch(url).then((res) => res.json());
  const router = useRouter();
  const shopItemId = router.query.id;

  const { data, error } = useSWR(
    'http://localhost:3000/shop_items/4dfd9672-5633-4328-b104-832e2f18c2a7',
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <Head>
        <title>{data.name} | Yumeshop</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumb
        crumbs={[
          {
            label: data.categories[0].name,
            url: `/${data.categories[0].id}`,
            isActive: false,
          },
          {
            label: data.name,
            url: '',
            isActive: true,
          },
        ]}
      />

      <Container>
        {/* <Main> */}
        <h1>{data?.name}</h1>
        <HStack>
          <Tags tags={data?.tags} />
          <HStack>
            税抜 <SmallWrapper>{data.price.original_price}→</SmallWrapper>
            <RedWrapper price={data.price}>
              <BigWrapper>{data.price.discount_amount}</BigWrapper>円
            </RedWrapper>
          </HStack>
        </HStack>
      </Container>
      <Carousel images={data.images} />
      <Container>
        {data.details.map((detail) => (
          <>
            <h2>{detail.header}</h2>
            <p>{detail.content}</p>
          </>
        ))}

        <h2>関連商品</h2>
        <List>
          {data.related_shop_items?.map((related_shop_item) => (
            <SimpleCard
              imageUrl={related_shop_item.thumbnail}
              description={related_shop_item.name}
            />
          ))}
        </List>
        {/* </Main> */}
      </Container>
    </>
  );
};

export default ShopItemDetailPage;
