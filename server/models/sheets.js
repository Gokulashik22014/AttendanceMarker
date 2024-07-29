import mongoose, { Schema } from "mongoose";

const sheetSchema=mongoose.Schema({
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    data:{
        type:Map,
        of:Boolean
    },
    name:String,
})

const sheet=mongoose.model("sheet",sheetSchema);

export default sheet;