import { google } from 'googleapis';
import keys from '../../key.json';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export default async function handler(req, res) {
  const { content, row, column } = req;
  const serviceAccountAuth = new JWT({
    email: keys.client_email,
    key: keys.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const doc = new GoogleSpreadsheet(
    '10hdvDYX-UaVEUNlaY1jCHidTDjKeTV_TbkZH0AuT1m8',
    serviceAccountAuth
  );

  await doc.loadInfo();

  const sheet = doc.sheetsByTitle['Database'];

  const rows = await sheet.getRows();
  rows[0].set('Score', 5);
  await rows[0].save();
  res.send(200);
}
