import { LinkComponent } from '../common/link-component/link-component';

export const CourseLink = ({
  url,
}: {
  url: string;
}): JSX.Element | undefined => {
  if (url.includes('zerotomastery')) {
    return <LinkComponent content="Zero To Mastery" href={url} />;
  }

  if (url.includes('udemy')) {
    return <LinkComponent content="Udemy" href={url} />;
  }

  if (url.includes('https://epicreact.dev/')) {
    return <LinkComponent content="Kent C. Dodds" href={url} />;
  }

  if (url.includes('egghead')) {
    return <LinkComponent content="Egghead" href={url} />;
  }

  if (
    url.includes('https://flexbox.io/') ||
    url.includes('https://cssgrid.io/') ||
    url.includes('https://mastergatsby.com/') ||
    url.includes('https://advancedreact.com/')
  ) {
    return <LinkComponent content="Wes Bos" href={url} />;
  }

  if (url.includes('https://odyssey.apollographql.com/')) {
    return <LinkComponent content="Apollo" href={url} />;
  }

  if (url.includes('realtoughcandy')) {
    return <LinkComponent content="RTC" href={url} />;
  }

  if (url.includes('appbrewery')) {
    return <LinkComponent content="App Brewery" href={url} />;
  }

  return null;
};
