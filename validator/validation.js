import mongoose from 'mongoose'


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
    // let lower = title.toLowerCase();

    // if ((lower === "mr" || lower === "mrs", lower === "miss")) {
    //     return true;
    // }

    if ((title == 'Mr' || title == 'Mrs' || title == 'Miss')) {
        return true
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


//////////////// -FOR BOOKS VALIDATION- ///////////////////////
const isValidBookExcerpt = (excerpt) => {
    return /^[a-zA-Z,\-.\s]*$/.test(excerpt);
}

const isValidBookISBN = (ISBN) => {
    return /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(ISBN);
}

const isValidBookCategory = (category) => {
    return /^[a-zA-Z,\s]*$/.test(category);
}

const isValidBookReleasedAt = (releasedAt) => {
    return /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(releasedAt);
}

const isValidObejectId = (UserId) => {
    return mongoose.isValidObjectId(UserId)
}


export {
    isValid,
    isValidRequestBody,
    isValidTitle,
    isValidName,
    isValidPhone,
    isValidEmail,
    isValidBookExcerpt,
    isValidBookISBN,
    isValidBookCategory,
    isValidBookReleasedAt,
    isValidObejectId
};