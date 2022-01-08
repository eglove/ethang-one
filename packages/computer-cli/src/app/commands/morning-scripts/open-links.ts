import { execSyncCommand } from '@ethang-one/util-typescript';

import { Shell } from '../../constants';

const morningLinks = [
  'https://mail.google.com/chat/u/1/#chat',
  'https://mail.google.com/mail/u/1/#inbox',
];

const financeLinks = [
  'https://www.payscale.com/login.aspx',
  'https://www.paypal.com/',
  'https://smile.amazon.com/gp/css/order-history?ie=UTF8&ref_=nav_youraccount_orders&',
  'https://docs.google.com/spreadsheets/d/1NRRzw3Ok7my5xRIG6AKKoBadOK3Sca4ZoMg2vhKHxoA/edit',
  'https://themagnolia.residentportal.com/resident_portal',
  'https://www.ameren.com/',
  'https://www.chase.com/',
  'https://www.usaa.com/inet/ent_logon/Logon?redirectjsp=true',
  'https://www.lightstream.com/account',
  'https://www.wealthfront.com/',
  'https://www.lendingclub.com/',
  'https://app.monarchmoney.com/dashboard',
];

export const openLinks = (): void => {
  let linksToOpen = morningLinks;
  if (new Date().getDay() === 6) {
    linksToOpen = [...morningLinks, ...financeLinks];
  }

  for (const link of linksToOpen) {
    execSyncCommand(`Start-Process Chrome ${link}`, Shell.pwsh);
  }
};
