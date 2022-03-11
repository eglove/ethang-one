import {
  ApolloCache,
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
  InMemoryCacheConfig,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { isBrowser, JSON_HEADER } from '@ethang/util-typescript';
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist';

export class ApolloClientInit {
  public cache?: ApolloCache<NormalizedCacheObject>;
  public baseUrl: string;
  public client?: ApolloClient<NormalizedCacheObject>;

  private authLink?: ApolloLink;
  private errorLink?: ApolloLink;
  private httpLink?: HttpLink;
  private readonly cacheConfig;

  constructor(baseUrl: string, cacheConfig: InMemoryCacheConfig) {
    this.baseUrl = baseUrl;
    this.cacheConfig = cacheConfig;
    this.setup();

    if (this.cache && this.authLink && this.errorLink && this.httpLink) {
      this.client = new ApolloClient({
        cache: this.cache,
        link: from([this.authLink, this.errorLink, this.httpLink]),
        ssrForceFetchDelay: 100,
        ssrMode: true,
      });
    } else {
      throw new Error('Failed to initialize Apollo Client.');
    }
  }

  private readonly setup = (): void => {
    this.setCache();
    this.setAuthLink();
    this.setErrorLink();
    this.setHttpLink();
    this.setPersistCache();
  };

  private readonly setAuthLink = (): void => {
    this.authLink = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers }: { headers: HeadersInit }) => {
        return {
          headers: {
            ...JSON_HEADER,
            Authorization: `Bearer ${process.env.NX_8BASE_API_TOKEN ?? ''}`,
            ...headers,
          },
        };
      });

      return forward(operation);
    });
  };

  private readonly setCache = (): void => {
    this.cache = new InMemoryCache(this.cacheConfig);
  };

  private readonly setErrorLink = (): void => {
    this.errorLink = onError(({ graphQLErrors, networkError }) => {
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
        console.error(
          `[Network error]: ${networkError.name}: ${networkError.message}`
        );
      }
    });
  };

  private readonly setHttpLink = (): void => {
    this.httpLink = new HttpLink({
      uri: this.baseUrl,
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
