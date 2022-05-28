import data from "../data/refdata.js";

function getName(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomItem(type) {
  return data[type][getRandomInt(data[type].length)];
}
function randomList(type) {
  return data[type][getRandomInt(data[type].length)];
}

function randomCaste(type) {
  return data["caste"][type][getRandomInt(data["caste"][type].length)];
}
function randomDistrict(type) {
  let obj = data["district"][type];
  return obj[getRandomInt(obj.length)];
}

function getSalary() {
  return 15000 * getRandomIntInclusive(0, 25);
}

function getRandomSubarray(type, subtype) {
  // console.log(type, subtype);
  var arr = subtype ? data[type][subtype] : data[type];
  var size = getRandomIntInclusive(1, arr.length);
  size = size > 3 ? size / 3 : size;
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - size,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min).map((a) => a.id);
}

const getNewCustomer = (index) => {
  let religion = randomItem("Religion"),
    caste = randomCaste(religion.value),
    education = randomItem("education"),
    educationInDetail = randomItem("educationInDetail"),
    jobCategory = randomItem("jobCategory"),
    jobInDetail = randomItem("jobCategoryInDetail"),
    gender = randomItem("gender"),
    state = randomItem("state"),
    maritalStatus = randomItem("MaritalStatus");
  return {
    uniqId: index,
    gender,
    name: `${getName(10)} ${getName(10)}`,
    whatsappNumber: "Not Specified",
    bodyType: randomItem("BodyType"),
    age: getRandomIntInclusive(18, 50),
    complexion: randomItem("Complexion"),
    height: randomItem("Height"),
    physicalStatus: "Normal",
    weight: randomItem("Weight"),
    hobbies: "Not Specified",
    interests: "Not Specified",
    bloodGroup: randomItem("BloodGroup"),
    maritalStatus,
    noOfChildren: "0",
    eatingHabits: randomItem("EatingHabits"),
    drinkingHabits: randomItem("DrinkingHabits"),
    aadharNumber: "Not Specified",
    describeInYourWords: "",
    address: {
      presentAddress: "Not Specified",
      permanentAddress: "Not Specified",
      communicationAddress: "Not Specified",
      routeToResidence: "Not Specified",
    },
    religionInformation: {
      religion,
      caste,
      casteNoBar: "No",
      star: randomItem("star"),
      raasi: randomItem("raasi"),
      typeOfJathakam: "Not Specified",
      religionUnionLocation: "Not Specified",
      religiousRequirements: "Not Specified",
    },
    location: {
      country: randomItem("country"),
      district: randomDistrict(state.value),
      state,
      city: "Koothattukulam",
    },
    professionalInformation: {
      education,
      educationInDetail,
      jobCategory,
      jobInDetail,
      jobLocation: "Not Specified",
      monthlyIncome: getSalary(),
    },
    familyDetails: {
      fathersName: "Not Specified",
      jobCategory: "Not Specified",
      jobInDetails: "Not Specified",
      jobDescription: "Not Specified",
      educationCategory: "Not Specified",
      educationDetails: "Not Specified",
      familyValue: randomItem("familyvalues"),
      guardianIfAny: "Not Specified",
      brothers: "Married-0, Unmarried-0",
      jobProfileOfSibling: "Not Specified",
      motherName: "Not Specified",
      familyType: "Not Specified",
      sisters: "Married-0, Unmarried-0",
      financialStatus: "Not Specified",
    },
    motherTongue: randomItem("languagesknown"),
    horoscopeDetails: {
      birthHour: "Not Specified",
      birthMinute: "Not Specified",
      placeOfBirth: "Country Not Specified",
      dateOfBirth: "1 - Not Specified - 0",
      janmaSistaDasa: "Not Specified",
      janmaSistaDasaEnd: "",
      horoscopeFile: "Not Specified",
    },
    Hobbies: ["Cycling", "Cricket", "Reading"],
    interests: {
      movie: ["horror"],
      songs: ["classic"],
    },
    otherInfo: {
      languagesKnown: "Not Specified",
      blog: "Not Specified",
      facebookLink: "Not Specified",
      otherSocialNetworkLinks: "Not Specified",
    },
    Preferences: {
      age: {
        min: getRandomIntInclusive(18, 30),
        max: getRandomIntInclusive(31, 50),
      },
      height: {
        min: getRandomIntInclusive(120, 164),
        max: getRandomIntInclusive(180, 212),
      },
      gender: (gender) => {
        switch (gender.id) {
          case 0:
            return data.gender.at(0);
          case 1:
            return data.gender.at(1);
          case 2:
            return data.gender.at(2);
          case 3:
            return data.gender.at(3);
        }
      },
      maritalStatus: (maritalStatus) => {
        switch (maritalStatus.id) {
          case 0:
          case 1:
          case 2:
          case 4:
            return getRandomSubarray("maritalStatus");
          case 3:
            return [data.maritalStatus.at(3)];
        }
      },
      education: getRandomSubarray("education"),
      educationInDetail: getRandomSubarray("educationInDetail"),
      jobCategory: getRandomSubarray("jobCategory"),
      jobInDetail: getRandomSubarray("jobInDetail"),
      religion: religion,
      casteNoBar: "No",
      caste: getRandomSubarray("caste", religion.value),
      matchingStar: getRandomSubarray("caste", religion.value),
      typeOfJathakam: [],
      country: [],
      state: [],
      district: getRandomSubarray("district", state.value),
      whatYouAreLookingFor: "I am looking for bla bla bla...",
    },
  };
};

export default getNewCustomer;
