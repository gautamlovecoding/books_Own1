import bookModel from "../models/bookModel.js";
import uploadFile from "../awsS3/aws.js";
import { isValid, isValidRequestBody, isValidBookExcerpt, isValidBookISBN, isValidBookCategory, isValidBookReleasedAt, isValidObejectId } from "../validator/validation.js";

const createBooks = async(req, res) => {
    try {
        let data = req.body;
        console.log(data);
        const { title, excerpt, userId, ISBN, category, subcategory, releasedAt } = data;

        const releasedAt_ValidatorRegEx = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/

        if (!isValidRequestBody(data))
            return res
                .status(400)
                .send({ status: false, message: "you must enter data" });

        if (!isValid(title))
            return res
                .status(400)
                .send({ status: false, message: "you must provide title" });


        let isRegisteredTitle = await bookModel.findOne({ title });

        if (isRegisteredTitle) {
            return res.status(400).send({ status: false, message: "Title already registered" });
        }

        if (!isValid(excerpt))
            return res
                .status(400)
                .send({ status: false, message: "you must provide excerpt" });

        if (!isValidBookExcerpt(excerpt))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a Valid Excerpt" });


        if (!isValid(userId))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a User-ID" });

        if (!isValidObejectId(userId))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a Valid User-ID" });

        if (!isValid(ISBN))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a ISBN No." });

        let isRegisteredISBN = await bookModel.findOne({ ISBN })

        if (isRegisteredISBN) {
            return res.status(400).send({ status: false, message: "ISBN already registered" });
        }


        if (!isValidBookISBN(ISBN))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a Valid ISBN No." });

        if (!isValid(category))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a Category" });

        if (!isValidBookCategory(category))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a Valid Category" });

        if (!isValid(subcategory))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a SubCategory" });

        const result = []
        if (subcategory) {
            let subcategory1 = subcategory.split(',')
            for (let i = 0; i < subcategory1.length; i++) {
                result.push(subcategory1[i])
            }
        }
        data.subcategory = result

        data.releasedAt = Date.now()

        let files = req.files
        if (files && files.length > 0) {

            let uploadedFileURL = await uploadFile(files[0])
            data['bookCover'] = uploadedFileURL
        } else {
            return res.status(400).send({ msg: "No file found" })
        }

        const createBook = await bookModel.create(data)
        res.status(201).send({ status: true, message: "Your Book Created Successfully", data: createBook })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};

export { createBooks };