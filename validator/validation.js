////////////////////////// -GLOBAL- //////////////////////

const isValid = (value) => {
  if (typeof value === "undefined" || typeof value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

//////////////// -FOR EMPTY BODY- ///////////////////////
const isValidRequestBody = (body) => {
  if (Object.keys(body).length) {
    return true;
  }
};

//////////////// -FOR TITLE- ///////////////////////
const isValidTitle = (title) => {
    console.log(title)
  let lower = title.toLowerCase();
  console.log(lower)
  if ((lower === "mr" || lower === "mrs", lower === "miss")) {
    return true;
  }
};

//////////////// -FOR NAME- ///////////////////////
const isValidName = (name) => {
  return /^[a-zA-Z ]{2,30}$/.test(name);
};

//////////////// -FOR PHONE- ///////////////////////
const isValidPhone = (phone) => {
  return /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(phone);
};

//////////////// -FOR EMAIL- ///////////////////////
const isValidEmail = (email) => {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
};

export {
  isValid,
  isValidRequestBody,
  isValidTitle,
  isValidName,
  isValidPhone,
  isValidEmail,
};
