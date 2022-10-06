const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')

const bucketName = process.env.S3_BUCKET
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.S3_KEY
const secretAccessKey = process.env.S3_SECRET

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }
    return s3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile 































//borrowed from Leah 

// const AWS = require("aws-sdk");
// // name of your bucket here
// const NAME_OF_BUCKET = "tyelp-bucket";


// const multer = require("multer");

// const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// const singlePublicFileUpload = async (file) => {
//     const { originalname, mimetype, buffer } = await file;
//     const path = require("path");
//     // name of the file in your S3 bucket will be the date in ms plus the extension name
//     const Key = new Date().getTime().toString() + path.extname(originalname);
//     const uploadParams = {
//         Bucket: NAME_OF_BUCKET,
//         Key,
//         Body: buffer,
//         ACL: "public-read",
//     };
//     const result = await s3.upload(uploadParams).promise();

//     // save the name of the file in your bucket as the key in your database to retrieve for later
//     return result.Location;
// };


// const storage = multer.memoryStorage({
//     destination: function (req, file, callback) {
//         callback(null, "");
//     },
// });

// const singleMulterUpload = (nameOfKey) =>
//     multer({ storage: storage }).single(nameOfKey);

// module.exports = {
//     s3,
//     singlePublicFileUpload,
//     singleMulterUpload,
// };