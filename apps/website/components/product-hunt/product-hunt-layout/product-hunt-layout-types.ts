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
  description: string;
  id: string;
  media: ProductMediaEntity[];
  name: string;
  productLinks?: ProductLinksEntity[];
}

export interface ProductMediaEntity {
  url: string | undefined;
  videoUrl: string | undefined;
}

export interface ProductLinksEntity {
  type: string;
  url: string;
}
