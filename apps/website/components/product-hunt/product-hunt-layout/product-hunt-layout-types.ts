export type ProductHuntData = {
  posts: Posts;
};

export type Posts = {
  edges?: EdgesEntity[];
};

export type EdgesEntity = {
  node: Node;
};

export type Node = {
  description: string;
  id: string;
  media: ProductMediaEntity[];
  name: string;
  productLinks?: ProductLinksEntity[];
};

export type ProductMediaEntity = {
  url: string | undefined;
  videoUrl: string | undefined;
};

export type ProductLinksEntity = {
  type: string;
  url: string;
};
