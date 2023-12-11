const akun = require("../app/akun");
const bcrypt = require("bcrypt");

async function login(req, res) {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await akun.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(401).json({
                success: false,
                error: "Invalid email or password. Please try again with the correct credentials."
            });
        }
        // Validate password
       const isPasswordValid = bcrypt.compare(password, user.password);
       if (!isPasswordValid) {
           return res.status(401).json({
               success: false,
               error: "Invalid email or password. Please try again with the correct credentials."
           });
       }
            // Send a success response
            res.status(200).json({
                success: true,
                message: "You have successfully logged in."
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                error: err.message
            });
        }
     }

async function register(req, res) {
    try {
        // Check if the user already exists
        const existingUser = await akun.findOne({ where: { email: req.body.email } });
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'User already exists' });
        }

        // Hash the password
        const passwordHash = bcrypt.hashSync(req.body.password, 10);

        // Create the user
        const newakun = await akun.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: passwordHash
        });

        // Send the response
        res.json({ success: true, newakun });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
 }

 async function shopcart(req, res) {

    // Add data to shopping cart
    const newItems = await ShoppingCart.bulkCreate([
      { userId: 2, productId: 1, },
      { userId: 2, productId: 2, },
      { userId: 2, productId: 3, },
      { userId: 2, productId: 4, },
      { userId: 2, productId: 5, },
      { userId: 2, productId: 6, },
     ]);
    };
    
 module.exports = { login, register, shopcart };