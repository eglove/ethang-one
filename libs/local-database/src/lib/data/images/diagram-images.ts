import { Image } from '../../models/image';

export const diagramImages = {
  keyGenerationService: new Image({
    altText: 'Key Genration Service Diagram',
    height: 191,
    url: '/diagrams/key-generation-service.svg',
    width: 461,
  }),
  pastebinHighLevel: new Image({
    altText: 'Pastebin high level design',
    height: 186,
    url: '/diagrams/pastebin-high-level.png',
    width: 351,
  }),
  pastebinLayerDesign: new Image({
    altText: 'Pastebin Layer Design',
    height: 346,
    url: '/diagrams/pastebin-layer-design.png',
    width: 601,
  }),
  pastebinTable: new Image({
    altText: 'Table design for pastebin',
    height: 363,
    url: '/diagrams/pastebin-table.svg',
    width: 155,
  }),
  shortenedUrl: new Image({
    altText: 'Class diagram of Shortened URL',
    height: 380,
    url: '/diagrams/shortened-url.svg',
    width: 155,
  }),
  shortenedUrlSystem: new Image({
    altText: 'System Diagram for URL shortner with added services.',
    height: 321,
    url: '/diagrams/url-shortner-system.svg',
    width: 646,
  }),
};
