const DummyHospitals = () => {
  const hospitalNames = [
    "City Hospital",
    "Care Hospital",
    "LifeCare Center",
    "Metro Hospital",
    "Global Health Clinic",
    "Sunrise Hospital",
    "Healing Touch Hospital",
    "Apex Hospital",
    "Green Valley Hospital",
    "Prime Care Hospital",
    "Harmony Hospital",
    "Wellness Hospital",
    "Hope Medical Center",
    "CurePoint Hospital",
    "Trinity Hospital",
    "Bright Future Hospital",
    "Pinnacle Hospital",
    "Serenity Hospital",
    "New Dawn Hospital",
    "Vitality Hospital",
    "Unity Hospital",
    "HealthFirst Hospital",
    "CarePoint Hospital",
    "Medicare Hospital",
    "Lifeline Hospital",
    "Healing Hands Hospital",
    "Sunshine Hospital",
    "Blue Cross Hospital",
    "Greenwood Hospital",
    "Silver Oak Hospital",
    "Golden Gate Hospital",
    "Harmony Health Hospital",
    "WellCare Hospital",
    "Hopewell Hospital",
  ];

  const specializations = [
    "Cardiologist",
    "Neurologist",
    "Orthopedic",
    "Dermatologist",
    "ENT Specialist",
    "Gynecologist",
    "General Physician",
    "Pediatrician",
    "Oncologist",
    "Psychiatrist",
    "Endocrinologist",
    "Gastroenterologist",
    "Urologist",
    "Nephrologist",
    "Pulmonologist",
    "Rheumatologist",
    "Hematologist",
    "Infectious Disease Specialist",
    "Allergist",
    "Ophthalmologist",
    "Radiologist",
    "Anesthesiologist",
    "Pathologist",
    "Plastic Surgeon",
    "Vascular Surgeon",
    "Cardiothoracic Surgeon",
    "Neurosurgeon",
    "Orthopedic Surgeon",
    "General Surgeon",
    "Pediatric Surgeon",
  ];

  const doctorNames = [
    "Aarav Sharma",
    "Isha Mehta",
    "Rohan Kapoor",
    "Neha Verma",
    "Kabir Singh",
    "Ananya Rao",
    "Vihaan Gupta",
    "Sara Khan",
    "Aditya Nair",
    "Priya Iyer",
    "Arjun Malhotra",
    "Sanya Desai",
    "Karan Mehta",
    "Anika Singh",
    "Riya Patel",
    "Devansh Joshi",
    "Maya Reddy",
    "Ayaan Verma",
    "Sofia Khan",
    "Reyansh Gupta",
    "Anjali Sharma",
    "Kabir Mehta",
    "Isha Kapoor",
    "Rohan Rao",
    "Neha Nair",
    "Arjun Iyer",
    "Sanya Malhotra",
    "Karan Desai",
    "Anika Singh",
  ];

  const locationClusters = [
    { city: "Gurgaon", areas: ["Sector 14", "Sector 22", "DLF Phase 2", "Sohna Road"] },
    { city: "Noida", areas: ["Sector 18", "Sector 62", "Sector 76", "Sector 137"] },
    { city: "Delhi", areas: ["Rohini", "Dwarka", "Karol Bagh", "Saket"] },
    { city: "Faridabad", areas: ["NIT", "Sector 15", "Green Field", "Sector 21C"] },
    { city: "Ghaziabad", areas: ["Indirapuram", "Vaishali", "Raj Nagar", "Kaushambi"] },
    { city: "Meerut", areas: ["Sadar Bazaar", "Shastri Nagar", "Garh Road", "Modipuram"] },
    { city: "Agra", areas: ["Civil Lines", "Fatehabad Road", "Tajganj", "Sadar Bazaar"] },
    { city: "Lucknow", areas: ["Gomti Nagar", "Aliganj", "Vikas Nagar", "Indira Nagar"] },
    { city: "Kanpur", areas: ["Civil Lines", "Rawatpur", "Kalyanpur", "Shivaji Nagar"] },
    { city: "Varanasi", areas: ["Sigra", "Bhelupur", "Lanka", "Gyanpur"] },
    { city: "Allahabad", areas: ["Civil Lines", "Kalyanpur", "Jhunsi", "Naini"] },
    { city: "Jodhpur", areas: ["Ratanada", "Soorsagar", "Shastri Nagar", "Raika Bagh"] },
    { city: "Jaipur", areas: ["C-Scheme", "Vaishali Nagar", "Malviya Nagar", "Sodala"] },
    { city: "Chennai", areas: ["T Nagar", "Adyar", "Velachery", "Anna Nagar"] },
    { city: "Bangalore", areas: ["Koramangala", "Indiranagar", "Whitefield", "Jayanagar"] },
    { city: "Hyderabad", areas: ["Banjara Hills", "Gachibowli", "Hitech City", "Madhapur"] },
    { city: "Pune", areas: ["Koregaon Park", "Viman Nagar", "Hinjewadi", "Baner"] },
    { city: "Mumbai", areas: ["Andheri", "Bandra", "Juhu", "Powai"] },
  ];

  const availabilitySlots = [
    ["09:30 AM", "01:30 PM"],
    ["10:00 AM", "03:00 PM"],
    ["11:00 AM", "04:30 PM"],
    ["08:30 AM", "12:30 PM"],
    ["02:00 PM", "06:00 PM"],
    ["09:00 AM", "01:00 PM"],
    ["10:30 AM", "02:30 PM"],   
    ["11:30 AM", "05:00 PM"],
    ["08:00 AM", "12:00 PM"],
    ["01:00 PM", "05:30 PM"],
  ];

  return hospitalNames.map((name, index) => {
    const cluster = locationClusters[index % locationClusters.length];
    const area = cluster.areas[index % cluster.areas.length];
    const specialization1 = specializations[index % specializations.length];
    const specialization2 = specializations[(index + 10) % specializations.length];
    const slot1 = availabilitySlots[index % availabilitySlots.length];
    const slot2 = availabilitySlots[(index + 5) % availabilitySlots.length];

    return {
      name,
      placeId: `dummy-place-${index + 1}`,
      rating: Number((3 + ((index % 20) * 0.1)).toFixed(1)),
      isGovernment: index % 4 === 0,
      address: `${area}, ${cluster.city}`,
      locations: [`${area}, ${cluster.city}`],
      location: {
        lat: 28.5 + index * 0.01,
        lng: 77.1 + index * 0.01,
      },
      doctors: [
        {
          name: `Dr. ${doctorNames[index % doctorNames.length]}`,
          specialization: specialization1,
          availability: slot1,
        },
        {
          name: `Dr. ${doctorNames[(index + 5) % doctorNames.length]}`,
          specialization: specialization2,
          availability: slot2,
        },
      ],
    };
  });
};

module.exports = DummyHospitals;