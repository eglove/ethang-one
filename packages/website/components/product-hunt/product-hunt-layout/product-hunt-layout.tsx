import getYouTubeID from 'get-youtube-id';
import {useEffect, useState} from 'react';

import {Container} from '../../common/container/container';
import {HeadTag} from '../../common/head-tag/head-tag';
import {LinkComponent} from '../../common/link-component/link-component';
import {LoadingImage} from '../../common/loading-image/loading-image';
import {YouTubeEmbed} from '../../common/youtube-embed/youtube-embed';
import styles from './product-hunt-layout.module.css';
import {ProductHuntData} from './product-hunt-layout-types';

export const ProductHuntLayout = (): JSX.Element => {
  const [data, setData] = useState<ProductHuntData>();

  useEffect(() => {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer IWDedkSZEl-pjNJv8Rg_eQUM2ACQ_RG7-anzER-igGY');
    headers.append('Content-Type', 'application/json');

    const graphql = JSON.stringify({
      query: '{ posts(order: NEWEST) { edges { node { id name description media { url videoUrl } productLinks { type url }}}}}',
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
    <LoadingImage/>;
  }

  if (data) {
    return (
      <Container>
        <HeadTag title="Product Hunt"/>
        <div className={styles.ProductHuntContainer as string}>
          {data.posts.edges.map(post => {
            return (
              <div key={post.node.id}>
                <div className={styles.ProductHuntTitle as string}>{post.node.name}</div>
                <div>{post.node.description}</div>
                <div className={styles.Links as string}>
                  {post.node.productLinks.map(productLink => {
                    return (
                      <div key={productLink.url}><LinkComponent
                        content={productLink.type} href={productLink.url}/>&emsp;
                      </div>
                    );
                  })}
                </div>
                <div>{typeof post.node.media[0].videoUrl === 'string'
                  ? <YouTubeEmbed id={getYouTubeID(post.node.media[0].videoUrl)} title={post.node.name}/>
                  : <img style={{paddingTop: '1rem'}} src={post.node.media[0].url} alt={post.node.name}/>}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }

  return null;
};
