import TransferObject from "~/porto/Ship/Abstracts/TransferObject";

/**
 * @property {Number} dataSet.id
 * @property {String} dataSet.name
 * @property {Number} dataSet.authorId
 * @property {String} dataSet.preparingMethod
 * @property {Array} dataSet.ingredients
 * @property {Number} dataSet.ingredients.id
 * @property {String} dataSet.ingredients.quantity
 * @property {Array} dataSet.categories
 * @property {Number} dataSet.categories.*
 */
class UpdateRecipeByIdTransferObject extends TransferObject {

}

export default UpdateRecipeByIdTransferObject;