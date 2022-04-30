export interface ProductHuntData {
  posts: Posts;
}

export interface Posts {
  edges?: EdgesEntity[];
}

export interface EdgesEntity {
  node: Node;
}

export interface Node {
  id: string;
  name: string;
  media: ProductMediaEntity[];
  productLinks?: ProductLinksEntity[];
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
