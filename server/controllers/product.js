const Product = require('../models/Product');

exports.create = async (req, res) => {
  try {
    console.log(req.body)
    // const { name } = (req.body);
    const product = await new Product(req.body).save()
    res.send(product);
  } catch (err) {
    res.status(500).send('Create Product Error!!')
  }
};

exports.list = async (req, res) => {
  try {
    const count = parseInt(req.params.count)

    const product = await Product.find()
      .limit(count) //เรียกโชว์กี่ตัว
      .populate('category') //ใช้สำหรับ join table ที่ต้องการ
      .sort([["createdAt", "desc"]]) //ให้เรียงการที่สร้างล่าสุด
    res.send(product);
  } catch (err) {
    res.status(500).send('Create Product Error!!')
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.send(deleted);
  } catch (err) {
    res.status(500).send("Remove Product Error!!");
  }
};

exports.read = async (req, res) => {
  try {
    //code
    const product = await Product.findOne({ _id: req.params.id })
      .populate("category") //ใช้สำหรับ join table ที่ต้องการ
      .exec();
    res.send(product);
  } catch (err) {
    //err
    res.status(500).send("Read Product Error!!");
  }
};

exports.update = async (req, res) => {
  try {
    //code
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.send(product);
  } catch (err) {
    //err
    res.status(500).send("Update Product Error!!");
  }
};

exports.listBy = async (req, res) => {
  try {
    const { sort, order, limit } = req.body;
    const product = await Product.find()
      .limit(limit) //เรียกโชว์กี่ตัว
      .populate('category') //ใช้สำหรับ join table ที่ต้องการ
      .sort([[sort, order]]) //ให้เรียงการที่สร้างล่าสุด
    res.send(product);
  } catch (err) {
    res.status(500).send('ListBy Product Error!!')
  }
};

