const models = require('../database/models')

exports.getHourlyUsage = async (req, res) => {

  try {
    const result = await models.Hourly.findAll({
      include: [{
        model: models.Daily,
          as: 'daily'
      }]
     })
  
    if (!result.length)
      return res.status(404).json({
        status: 'success',
        message: 'No Result Found',
      });
  
    return res.status(200).json({
      status: 'success',
      result,
    });
  }
  catch (err) {  
    return res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
