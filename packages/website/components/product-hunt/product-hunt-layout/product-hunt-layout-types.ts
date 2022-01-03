
export interface ProductHuntData {
  posts: Posts;
}

export interface Posts {
  edges?: (EdgesEntity)[] | undefined;
}

export interface EdgesEntity {
  node: Node;
}

export interface Node {
  id: string;
  name: string;
  media: ProductMediaEntity[];
  productLinks?: (ProductLinksEntity)[] | undefined;
  description: string;
}

export interface ProductMediaEntity {
  url: string | undefined;
  videoUrl: string | undefined;
}

export interface ProductLinksEntity {
  type: string;
  url: string;
}
