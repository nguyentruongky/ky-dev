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

  const sheet = doc.sheetsByTitle['Sheet2']; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  await sheet.setHeaderRow(["name", "email"])
const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
console.log("larryRow", larryRow)
  const rows = await sheet.getRows(); // can pass in { limit, offset }
  rows[0].set('Score', 5);
  await rows[0].save();
  res.send(200);
}
