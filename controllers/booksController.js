import bookModel from "../models/bookModel.js";
import reviewModel from "../models/reviewModel.js"
import uploadFile from "../awsS3/aws.js";
import { isValid, isValidRequestBody, isValidBookExcerpt, isValidBookISBN, isValidBookCategory, isValidBookReleasedAt, isValidObejectId } from "../validator/validation.js";
import userModel from "../models/userModel.js";

const createBooks = async(req, res) => {
    try {
        let data = req.body;
        const { title, excerpt, userId, ISBN, category, subcategory, releasedAt } = data;

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
                result.push(subcategory1[i].trim())
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

const getBooks = async(req, res) => {
    try {
        let data = req.query
        const { userId, category, subcategory } = data

        if (userId) {
            if (!isValidObejectId(userId)) {
                return res
                    .status(400)
                    .send({ status: false, message: "you must provide a Valid User-ID" });
            }
        }

        if (!isValidBookCategory(category))
            return res
                .status(400)
                .send({ status: false, message: "you must provide a Valid Category" });





        let filterData = await bookModel.find({ $or: [{ userId: userId }, { category: category }, { subcategory: subcategory }], isDeleted: false }).sort({ title: 1 })

        // for (let i = 0; i < filterData.length; i++) {
        //     let getSubcategory = filterData[i].subcategory.includes(subcategory)
        //     if (getSubcategory) {
        //         filterData = await bookModel.find({ $or: [{ userId: userId }, { category: category }, { subcategory: subcategory }], isDeleted: false }).sort({ title: 1 })
        //     } else {
        //         return res
        //             .status(404)
        //             .send({ status: false, message: "Data does not exists" });
        //     }
        // }
        // console.log(filterData);
        if (!filterData.length) {
            return res
                .status(404)
                .send({ status: false, message: "Data does not exists" });
        }

        return res.status(200).send({ status: true, message: 'Your Data ', data: filterData })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};

const getBooksById = async(req, res) => {
    try {
        let data = req.params.bookId

        if (!isValidObejectId(data)) {
            return res
                .status(400)
                .send({ status: false, message: "you must provide a Valid Book-ID" });
        }

        let checkBookId = await bookModel.findById(data).lean()

        if (!checkBookId) {
            return res
                .status(400)
                .send({ status: false, message: "Book-ID does not exists" });
        }

        let reviewBookData = await reviewModel.find({ bookId: data, isDeleted: false })

        checkBookId["reviewsData"] = reviewBookData

        return res.status(200).send({ status: true, message: 'Your Data', data: checkBookId })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};

export { createBooks, getBooks, getBooksById };