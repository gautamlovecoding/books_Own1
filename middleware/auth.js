import jwt from "jsonwebtoken";


const authentication = async function(req, res, next) {
    try {
        let token = req.header('Authorization');
        if (!token) return res.status(400).send({ status: false, message: "Token is Required" })

        let splitToken = token.split(" ")
        jwt.verify(splitToken[1], process.env.SECRET_KEY, (error, data) => {
            if (error) {
                return res.status(401).send({ status: false, message: "Token is Invalid" })
            } else {
                console.log(data);
                req.userId = data.aud
                next();
            }
        })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}


export default authentication