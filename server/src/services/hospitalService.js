const Hospital = require("../models/Hospital");
const DummyHospitals = require("../data/DummyHospital");

const seedHospitals = async () => {
  const count = await Hospital.countDocuments();

  if (count > 0) {
    return { message: "Already seeded" };
  }

  const data = DummyHospitals();
  await Hospital.insertMany(data);

  return { message: "Seeded successfully", total: data.length };
};

const getAllHospitals = async () => {
  return await Hospital.find();
};

const getHospitalsByCity = async (city) => {
  return await Hospital.find({
    address: { $regex: city, $options: "i" },
  });
};

const getHospitalsBySpecialization = async (spec) => {
  return await Hospital.find({
    "doctors.specialization": spec,
  });
};

module.exports = {
  seedHospitals,
  getAllHospitals,
  getHospitalsByCity,
  getHospitalsBySpecialization,
};