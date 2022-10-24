const models = require('../database/models')

exports.getDailyUsage = async (req, res) => {

  const { date } = req.query;

  if (!date) {
    return res.status(422).json({ 
      status: "error",
      message: "Invalid Date" 
    });
  }

  const result = await models.Daily.findAll({
    where: { date },
    include: [{
      model: models.Hourly,
      attributes: [['time', 'label'], ['usage', 'value']],
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
};
