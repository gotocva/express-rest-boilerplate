/**
 * 
 * @param {*} _lang 
 * @returns 
 */
module.exports = (_lang) => {
    const { applicationMessages, apiResponseMessages } =  require('./'+_lang+'/messages');
    return {
        applicationMessages, apiResponseMessages
    }
}