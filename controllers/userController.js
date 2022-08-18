import userModel from '../models/userModel.js'
import {isValidRequestBody, isValid, isValidTitle, isValidName, isValidPhone, isValidEmail} from '../validator/validation.js'
//import bcrypt from 'bcrypt'

///////////////////////////////// -CREATING USER- ///////////////////////////////////

const registerUser = async(req, res) => {
    try{
        let data = req.body;

    const {title, name, phone, email, password, address} = data;

    console.log(isValidRequestBody(data), title)

    if(!isValidRequestBody(data)) return res.status(400).send({status: false, message: "you must enter data"}); 

    if(!isValid(title)) return res.status(400).send({status: false, message: "you must provide title"});
    if(!isValidTitle(title)) return res.status(400).send({status: false, message: "you must provide valid title Mr, Mrs, Miss"});


    if(!isValid(name)) return res.status(400).send({status: false, message: "you must provide name"});
    if(!isValidName(name)) return res.status(400).send({status: false, message: "you must provide valid name"});

    if(!isValid(phone)) return res.status(400).send({status: false, message: "you must provide phone"});
    if(!isValidPhone(phone)) return res.status(400).send({status: false, message: "you must provide valid phone"});
    let findPhone = await userModel.findOne({phone: phone})
    if(findPhone) return res.status(400).send({status: false, message: "phone is already exist."})

    if(!isValid(email)) return res.status(400).send({status: false, message: "you must provide Email"});
    if(!isValidEmail(email)) return res.status(400).send({status: false, message: "you must provide valid Email"});
    let findEmail = await userModel.findOne({email: email})
    if(findEmail) return res.status(400).send({status: false, message: "email is already exist."})

    if(!isValid(password)) return res.status(400).send({status: false, message: "you must provide password"});
    if (password.length < 8 || password.length > 15) {
        return res.status(400).send({ status: false, message: "Your password must be at least 8 characters or not more than 15 charcters" })
    }
    
    //if(!isValid(profileImage)) return res.status(400).send({status: false, message: "you must provide profile image"});

    if(!isValid(address)) return res.status(400).send({status: false, message: "you must provide address"});

    let parseaddress = address

        if (parseaddress) {
                if (!isValid(parseaddress.street)) return res.status(400).send({ status: false, Message: "Street is required in address" })
                if (!isValid(parseaddress.city)) return res.status(400).send({ status: false, Message: "city is required in address" })
                if (parseaddress.pincode != undefined || typeof parseaddress.pincode != "Number") {
                    if (!isValid(parseaddress.pincode)) return res.status(400).send({ status: false, Message: "pincode is required in address" })
                    if (!(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/).test(parseaddress.pincode)) return res.status(400).send({ status: false, Message: "pincode must be a 6-digit number in address" })

                }
        }

        let newUser = await userModel.create(data);
        res.status(201).send({status: true, message: "User created successfully", data: newUser});

    } catch(error) {
        return res.status(500).send({status: false, message: error.message});
    }

}

export default registerUser

