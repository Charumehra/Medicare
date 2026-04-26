const service = require("../services/hospitalService");

const seed = async (req, res) => {
  try {
    const result = await service.seedHospitals();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getHospitals = async (req, res) => {
  try {
    const { city, specialization } = req.query;

    let data;

    if (city) {
      data = await service.getHospitalsByCity(city);
    } else if (specialization) {
      data =
        await service.getHospitalsBySpecialization(
          specialization
        );
    } else {
      data = await service.getAllHospitals();
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { seed, getHospitals };