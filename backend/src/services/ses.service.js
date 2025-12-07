
const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const REGION = process.env.AWS_REGION;
const client = new SESClient({ region: REGION });

async function sendEmail({ to, from, subject, body }) {
  if (!to || !from) throw new Error('SES to/from missing');
  const params = {
    Destination: { ToAddresses: [to] },
    Message: {
      Body: { Text: { Data: body } },
      Subject: { Data: subject }
    },
    Source: from
  };
  await client.send(new SendEmailCommand(params));
}

module.exports = { sendEmail };
