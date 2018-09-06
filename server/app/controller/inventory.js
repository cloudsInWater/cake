
exports.index = function* (ctx) {
    console.log(ctx.model)
    ctx.body = yield ctx.model.Inventory.find({});
}