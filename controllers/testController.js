const testUserController = (req, res) => {
  try {
    res.status(200).send({
      sucess: true,
      message: "test User Data API",
    });
  } catch (error) {
    console.log("error in Test API", error);
  }
};

module.exports = { testUserController };
