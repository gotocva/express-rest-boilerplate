
import Joi from 'joi';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const loginRequest = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required().error(new Error("Username is required")),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().error(new Error("Email is required")),
        is_primary: Joi.boolean(),
        phone_number: Joi.number().integer().min(1000000000).max(9999999999).required().messages({
            "number.base": "Enter the valid phone number",
            "number.min": "Phone number must be 10 digit number",
            "number.max": "Phone number must be 10 digit number",
            "any.required": "Phone number is required"
        }),
        wallet_address: Joi.string().required().error(new Error("Wallet address is required")),
        farmer_page_access: Joi.boolean().required().error(new Error("farmer_page_access is required")),
        buyer_page_access: Joi.boolean().required().error(new Error("buyer_page_access is required")),
        inventory_page_access: Joi.boolean().required().error(new Error("inventory_page_access is required")),
        product_page_access: Joi.boolean().required().error(new Error("product_page_access is required")),
        category_page_access: Joi.boolean().required().error(new Error("category_page_access is required")),
        subcategory_page_access: Joi.boolean().required().error(new Error("subcategory_page_access is required")),
        unit_access_access: Joi.boolean().required().error(new Error("unit_access_access is required")),
    });
    const { error, value } = schema.validate(req.body);
    if (error == undefined) {
        next();
    } else {
        return responseHandler.errorResponse(res, {}, error.message, 400);
    }
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const loginApi = (req, res) => {

}