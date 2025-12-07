
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const REGION = process.env.AWS_REGION;
const BUCKET = process.env.S3_BUCKET_NAME;
if (!REGION || !BUCKET) {
  console.warn('AWS S3 config missing in env (AWS_REGION or S3_BUCKET_NAME).');
}
const s3 = new S3Client({ region: REGION });

async function getPresignedUrl(key, contentType='application/octet-stream', expires=900) {
  const command = new PutObjectCommand({ Bucket: BUCKET, Key: key, ContentType: contentType });
  const url = await getSignedUrl(s3, command, { expiresIn: expires });
  return url;
}

module.exports = { getPresignedUrl };
