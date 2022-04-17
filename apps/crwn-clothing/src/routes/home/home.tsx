import { Category } from '../../components/category-item/category-item';
import Directory from '../../components/directory/directory';

export function Home(): JSX.Element {
  const categories: Category[] = [
    {
      id: 1,
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      title: 'hats',
    },
    {
      id: 2,
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      title: 'jackets',
    },
    {
      id: 3,
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      title: 'sneakers',
    },
    {
      id: 4,
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      title: 'womens',
    },
    {
      id: 5,
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      title: 'mens',
    },
  ];

  return <Directory categories={categories} />;
}
