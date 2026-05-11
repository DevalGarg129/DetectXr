const {
  getAnalytics
} = require(
  "../services/analytics.service"
);

const fetchAnalytics =
  async (req, res) => {

    try {

      const analytics =
        await getAnalytics();

      return res.status(200).json(
        analytics
      );

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        message:
          "Internal Server Error"
      });
    }
  };

module.exports = {
  fetchAnalytics
};