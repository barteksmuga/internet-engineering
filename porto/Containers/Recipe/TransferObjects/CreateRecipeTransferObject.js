import TransferObject from "~/porto/Ship/Abstracts/TransferObject";

/**
 * @property {String} dataSet.name
 * @property {Number} dataSet.authorId
 * @property {String} dataSet.preparingMethod
 * @property {Array} dataSet.ingredients
 * @property {Number} dataSet.ingredients.id
 * @property {String} dataSet.ingredients.quantity
 * @property {Array} dataSet.categories
 * @property {Number} dataSet.categories.*
 */
class CreateRecipeTransferObject extends TransferObject {

}

export default CreateRecipeTransferObject;