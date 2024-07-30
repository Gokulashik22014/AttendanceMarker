import sheet from "../models/sheets.js";
import Sheet from "../models/sheets.js";

export const createSheet = async (req, res) => {
  try {
    const { start, stop, id, name } = req.body;
    let v = {};
    for (let i = start; i <= stop; i++) {
      v[i] = false;
    }
    const result = await Sheet.create({ createdBy: id, data: v, name: name });
    res.json({ success: true, id: result._id });
  } catch (error) {
    console.log(error);
  }
};

export const markAttendence = async (req, res) => {
  try {
    const { rollno, id } = req.body;
    const updatedField = `data.${rollno}`;
    const update = { $set: { [updatedField]: true } };

    await sheet.findByIdAndUpdate(id, update, { new: true });
    res.json({ success: true, message: "updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllSheet = async (req, res) => {
  try {
    const { id } = req.query;
    // console.log(id);
    const sheets = await sheet.find({ createdBy: id });
    res.json({ success: true, message: sheets });
  } catch (error) {
    console.log(error);
  }
};
export const getOneSheet = async (req, res) => {
  try {
    const { id } = req.query;
    // console.log(id);
    const sheets = await sheet.findById(id);
    res.json({ success: true, message: sheets });
  } catch (error) {
    console.log(error);
  }
};
