const userModel = require("../models/userModel");

//Register
const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;

    // Validation
    if (!userName || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // check user
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Email Already Registered please Login",
      });
    }

    // create new user
    const user = await userModel.create({
      userName,
      email,
      password,
      phone,
      address,
    });
    res.status(201).send({
      success: true,
      message: "Sucessfully Registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

//Login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Email OR Password",
      });
    }

    // check user
    const user = await userModel.findOne({ email:email,password:password });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found OR password mismatched",
      });
    }

    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login API",
      error,
    });
  }
};

module.exports = { registerController, loginController };
