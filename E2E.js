const crypto = require('crypto');

const data = "java script";

const encryptionKey = crypto.randomBytes(32) 

const iv = crypto.randomBytes(16)

const cipher  = crypto.createCipheriv('aes-256-cbc',encryptionKey,iv)

let encryptedData = cipher.update(data,'utf-8','hex');
encryptedData += cipher.final('hex');


console.log('\n','E2E key = ',encryptedData,'\n');
