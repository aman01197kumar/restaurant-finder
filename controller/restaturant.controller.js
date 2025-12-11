import { my_db } from "../db_config.js";

export const addNewRestaurant = async (req, res) => {
  try {
    const { restuarantName, city, dishName, dishPrice, orderCount } = req.body;
    if (!restuarantName || !city || !dishName || !dishPrice || !orderCount)
      return res
        .status(401)
        .json({ success: false, message: "Please mention all the fields" });

    const [rows] = await my_db.execute(
      `INSERT INTO restaurant(restaurantName, city, dishName, dishPrice, orderCount) VALUES(?,?,?,?,?)`,
      [restuarantName, city, dishName, dishPrice, orderCount]
    );

    return res
      .status(200)
      .json({ success: true, message: "data added successfully", data: rows });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, message: err });
  }
};

export const getRestaurant = async (req, res) => {
  try {
    const { dishName, minPrice, maxPrice } = req.query;

    if (!dishName || !maxPrice || !minPrice)
      return res.status(400).json({ success: false, status: 400 });

    console.log(dishName,'dis')

    const [result] = await my_db.execute(
      `SELECT * FROM restaurant WHERE dishName =? AND dishPrice BETWEEN ? AND ?`,[dishName,minPrice,maxPrice]
    );

    return res
      .status(200)
      .json({ success: true, status: 200, restaurants: result });
  } catch (err) {
    return res
      .status(500)
      .status({ success: false, status: 500, message: err });
  }
};
