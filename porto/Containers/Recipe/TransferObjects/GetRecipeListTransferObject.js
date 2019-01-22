import TransferObject from "~/porto/Ship/Abstracts/TransferObject";

/**
 * @property {String} dataSet.name
 * @property {Array} dataSet.ingredients
 * @property {Number} dataSet.ingredients.*
 * @property {Array} dataSet.categories
 * @property {Number} dataSet.categories.*
 */
class GetRecipeListTransferObject extends TransferObject {

}

export default GetRecipeListTransferObject;