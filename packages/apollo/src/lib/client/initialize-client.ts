import {
  ApolloCache,
  ApolloClient,
  ApolloLink,
  from,
  InMemoryCache,
  InMemoryCacheConfig,
  NormalizedCacheObject,
} from '@apollo/client';
import {BatchHttpLink} from '@apollo/client/link/batch-http';
import {onError} from '@apollo/client/link/error';
import {ENV_KEYS, getConst} from '@ethang-one/node-environment';
import {isBrowser} from '@ethang-one/util-typescript';
import {LocalStorageWrapper, persistCache} from 'apollo3-cache-persist';

export class ApolloClientInit {
  public cache?: ApolloCache<NormalizedCacheObject>;
  public client: ApolloClient<NormalizedCacheObject>;

  private authLink?: ApolloLink;
  private errorLink?: ApolloLink;
  private httpLink?: BatchHttpLink;
  private readonly cacheConfig;

  constructor(cacheConfig: InMemoryCacheConfig) {
    this.cacheConfig = cacheConfig;
    this.setCache();
    this.setAuthLink();
    this.setErrorLink();
    this.setHttpLink();
    this.setPersistCache();

    if (this.cache && this.authLink && this.errorLink && this.httpLink) {
      this.client = new ApolloClient({
        cache: this.cache,
        link: from([this.authLink, this.errorLink, this.httpLink]),
      });
    } else {
      throw new Error('Failed to initialize Apollo Client.');
    }
  }

  private readonly setAuthLink = (): void => {
    this.authLink = new ApolloLink((operation, forward) => forward(operation));
  };

  private readonly setCache = (): void => {
    this.cache = new InMemoryCache(this.cacheConfig);
  };

  private readonly setErrorLink = (): void => {
    this.errorLink = onError(({graphQLErrors, networkError}) => {
      if (graphQLErrors) {
        for (const error of graphQLErrors) {
          let errorMessage = '[GraphQL error]:';
          errorMessage += ` ${error.name}`;

          if (typeof error.extensions?.code !== 'undefined') {
            errorMessage += ` ${error.extensions.code as string} ${
              error.message
            }`;
          }

          console.error(errorMessage);
        }
      }

      if (networkError) {
        console.log(
          `[Network error]: ${networkError.name}: ${networkError.message}`,
        );
      }
    });
  };

  private readonly setHttpLink = (): void => {
    this.httpLink = new BatchHttpLink({
      uri:
        process.env.NODE_ENV === 'development'
          ? getConst(ENV_KEYS.NEXT_PUBLIC_GRAPHQL_ROOT)
          : getConst(ENV_KEYS.NEXT_PUBLIC_ROOT),
    });
  };

  private readonly setPersistCache = (): void => {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const awaitSetPersistCache = async (): Promise<void> => {
      if (isBrowser && this.cache) {
        await persistCache({
          cache: this.cache,
          storage: new LocalStorageWrapper(localStorage),
        });
      }
    };

    awaitSetPersistCache().catch((error: Error): void => {
      console.error(error.message);
    });
  };
}
