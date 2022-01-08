import {TwitchStreamDataByUserLogin} from '../types/hermit-craft-types';

export class HermitStream {
  public availableStreams;
  public hermitLoginIds = [
    'bdoubleo',
    'cubfan135',
    'docm77live',
    'ethotv',
    'falsesymmetry',
    'geminitay',
    'grian',
    'hypnotizd',
    'impulsesv',
    'iskall85',
    'ijevin',
    'joehills',
    'keralis',
    'thatmumbojumbo',
    'PearlescentMoon',
    'rendogtv',
    'goodtimeswithscar',
    'stressmonster101',
    'tangotek',
    'tinfoilchef',
    'VintageBeef',
    'welsknight',
    'xbcrafted',
    'xisuma',
    'ZedaphPlays',
    'zombiecleo',
  ];

  public urls: string[];

  constructor() {
    this.urls = this.hermitLoginIds.map(loginId => {
      return `https://api.twitch.tv/helix/streams?user_login=${loginId}`;
    });
  }

  getHermitStreams = async (): Promise<void> => {
    const responses = await Promise.all(
      this.urls.map(async url => {
        return fetch(url, {
          headers: {
            Authorization: `Bearer ${process.env.NX_TWICH_AUTHORIZATION ?? ''}`,
            'Client-Id': process.env.NX_TWITCH_CLIENT_ID ?? '',
          },
        });
      },
      ),
    );

    const data = await Promise.all(responses.map(async response => {
      return response.json();
    })) as TwitchStreamDataByUserLogin[];

    this.availableStreams = data
      .filter(stream => {
        return stream.data && stream.data.length > 0;
      })
      .map(dataElement => {
        return dataElement.data?.[0];
      });
  };
}
