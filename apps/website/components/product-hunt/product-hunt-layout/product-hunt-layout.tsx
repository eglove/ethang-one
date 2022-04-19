import { NextLink } from '@ethang/react-components';
import getYouTubeID from 'get-youtube-id';
import { useEffect, useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import { Container } from '../../common/container/container';
import { HeadTag } from '../../common/head-tag/head-tag';
import { LoadingImage } from '../../common/loading-image/loading-image';
import styles from './product-hunt-layout.module.css';
import { ProductHuntData } from './product-hunt-layout-types';

export function ProductHuntLayout(): JSX.Element {
  const [data, setData] = useState<ProductHuntData>();

  useEffect(() => {
    const headers = new Headers();
    headers.append(
      'Authorization',
      `Bearer ${process.env.NX_PRODUCT_HUNT_ACESS_TOKEN ?? ''}`
    );
    headers.append('Content-Type', 'application/json');

    const graphql = JSON.stringify({
      query:
        '{ posts(order: NEWEST) { edges { node { id name description media { url videoUrl } productLinks { type url }}}}}',
      variables: {},
    });
    const requestOptions = {
      body: graphql,
      headers,
      method: 'POST',
    };

    fetch('https://api.producthunt.com/v2/api/graphql', requestOptions)
      .then(async response => {
        return response.text();
      })
      .then(result => {
        setData(JSON.parse(result).data);
      })
      .catch(error => {
        console.error('error', error);
      });
  }, []);

  if (typeof data !== 'undefined') {
    <LoadingImage />;
  }

  if (data) {
    return (
      <Container>
        <HeadTag title="Product Hunt" />
        <div className={styles.ProductHuntContainer}>
          {data.posts.edges.map(post => {
            return (
              <div key={post.node.id}>
                <div className={styles.ProductHuntTitle}>{post.node.name}</div>
                <div>{post.node.description}</div>
                <div className={styles.Links}>
                  {post.node.productLinks.map(productLink => {
                    return (
                      <div key={productLink.url}>
                        <NextLink linkProperties={{ href: productLink.url }}>
                          {productLink.type}
                        </NextLink>
                        &emsp;
                      </div>
                    );
                  })}
                </div>
                <div>
                  {typeof post.node.media[0].videoUrl === 'string' ? (
                    <LiteYouTubeEmbed
                      id={getYouTubeID(post.node.media[0].videoUrl)}
                      title={post.node.name}
                    />
                  ) : (
                    <img
                      style={{ paddingTop: '1rem' }}
                      src={post.node.media[0].url}
                      alt={post.node.name}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }

  return null;
}
