import crypto from 'crypto';
import { env } from '../configs/env';

// Must be 256 bits (32 characters)
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || env.ENCRYPTION_KEY || 'agdjhjdhfjdjshkjgfghnbjkggnhhnbv'; // Must be 256 bits (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16
const ALGORITHM = 'aes-256-cbc';

/**
 * 
 * @param {*} text 
 * @param {*} encryptionKey 
 * @returns 
 */
export const encrypt = (text, encryptionKey = ENCRYPTION_KEY) => {
    let iv = Buffer.from(crypto.randomBytes(IV_LENGTH)).toString('hex').slice(0, IV_LENGTH);
    let cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(encryptionKey), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv + ':' + encrypted.toString('hex');
}

/**
 * 
 * @param {*} text 
 * @param {*} encryptionKey 
 * @returns 
 */
export const decrypt = (text, encryptionKey = ENCRYPTION_KEY) => {
    let textParts = text.includes(':') ? text.split(':') : [];
    let iv = Buffer.from(textParts.shift() || '', 'binary');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(encryptionKey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}