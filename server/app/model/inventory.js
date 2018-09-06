module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const inventorySchema = new Schema({
      item: { type: String  },
      tags: { type: Array  },
      qty:Number,
      dim_cm:Array
    });
  
    return mongoose.model('Inventory', inventorySchema);
  }
  
  