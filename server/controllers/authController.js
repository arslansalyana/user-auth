const User = require('../models/user');
const {hashPassword, comparePasswords} = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json("Auth route works!")
}

// Register endpoint
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        //check if name is empty
        if(!name){
            return res.json("Name is required")
        }
        // Check if password is empty or too short
        if (!password || password.length < 6) {
        return res.status(400).json({ error: "Password is required and should be at least 6 characters long" });
        }
        //check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).json({ error: "Email is already taken!" });
        }
        //hash password
        const hashedPassword = await hashPassword(password);
        //create new user
        const user = await User.create({
            name,
            email, 
            password: hashedPassword
        })

        return res.json(user);

    } catch (error) {
        console.log(error);
    }
};

// Login Endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        // Check if email exists
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ error: "No user found with this email!" });
        }
        // Check if passwords match
        const match = await comparePasswords(password, user.password);
        if (match) {
            // Create a token
            jwt.sign(
                {
                    name: user.name,
                    email: user.email,
                    id: user._id
                },
                process.env.JWT_SECRET,
                {},
                (err, token) => {
                    if (err) throw err;
                    // Send token in HTTP-only cookie
                    res.cookie("token", token).json(user);
                }
            )
        } else {
            return res.status(401).json({ error: "Invalid password" }); // 401 Unauthorized
        }
    } catch (error) {
        console.error("Login endpoint error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET , {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        })
    }
    else {
        return res.json(null);
    }
};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}