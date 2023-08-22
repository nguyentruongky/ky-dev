import { google } from "googleapis";
import keys from "../../key.json";

export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: '10hdvDYX-UaVEUNlaY1jCHidTDjKeTV_TbkZH0AuT1m8',
                range: 'Form Responses 1'
            };

            let data = await gsapi.spreadsheets.values.get(opt);
            return res.status(200).send(JSON.stringify({error: false, data: data.data.values}));
        });
    } catch (e) {
        console.log("error", e)
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }
}