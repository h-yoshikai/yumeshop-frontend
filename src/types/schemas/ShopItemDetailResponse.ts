import { Tag } from 'src/components/organisms/Tags';

export type ShopItemDetailResponse = {
  name: string;
  thumbnail: string;
  tags?: Tag[];
  categories: [
    {
      id: string;
      name: string;
      thumbnail: string;
    },
  ];
  campaigns: [
    {
      id: string;
      name: string;
      thumbnail: string;
    },
  ];
  details: [
    {
      header: string;
      content: string;
    },
  ];
  images: string[];
  relatedShopItems: [
    {
      id: string;
      name: string;
      thumbnail: string;
      price: {
        selling_price: number;
        original_price: number;
        discounted: boolean;
        discount_amount: number;
        discount_percentage: number;
      };
      categories: [
        {
          id: string;
          name: string;
          thumbnail: string;
        },
      ];
      campaigns: [
        {
          id: string;
          name: string;
          thumbnail: string;
        },
      ];
      tags: [
        {
          id: string;
          name: string;
          color: string;
          tag_group: string;
        },
      ];
    },
  ];
  id: string;
  price: {
    selling_price: number;
    original_price: number;
    discounted: boolean;
    discount_amount: number;
    discount_percentage: number;
  };
};
