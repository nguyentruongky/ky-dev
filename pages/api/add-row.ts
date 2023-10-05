import { google } from 'googleapis';
import keys from '../../key.json';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Row } from '../../models/Row';

export default async function handler(req: any, res: any) {
  const row = req.body as Row;
  console.log("row", row)
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
  await sheet.setHeaderRow(['key', 'value']);
await sheet.addRow({ key: '', value: '' });
await sheet.addRow({ key: '', value: '' });
  await sheet.addRow({ key: 'Timestamp', value: row.timestamp });
  await sheet.addRow({ key: 'Hội Thánh', value: row.hoiThanh });
  await sheet.addRow({ key: 'Số lượng', value: row.soLuong });
  await sheet.addRow({ key: 'Trưởng đoàn', value: row.truongDoan.ten });
  await sheet.addRow({ key: '', value: row.truongDoan.email ?? '-' });
  await sheet.addRow({ key: '', value: `'${row.truongDoan.phone ?? '-'}` });
  await sheet.addRow({ key: 'Danh sách', value: '' });
  for (let i = 0; i < row.danhSach.length; i++) {
    const person = row.danhSach[i];
    await sheet.addRow({ key: '', value: person.name });
  }

  //   const rows = await sheet.getRows(); // can pass in { limit, offset }
  //   rows[0].set('Score', 5);
  //   await rows[0].save();
  res.send(200);
}
