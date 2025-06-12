const User  = require('../models/user');
const bcrypt = require('bcrypt');

exports.signIn = async (req,res) =>{
    const { email, password } = req.body;
    try {
    // Check if email exists
    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser) {
      return res.status(401).json({ message: 'User not found!' });
    }

     const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Auth successful — proceed with token/session logic
    res.status(200).json({ message: 'Login successful', userId: existingUser.id });
  } catch (error) {
    console.error('SignIn error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

}

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      created_at: new Date()   
    });

    res.status(201).json({ message: 'User created', userId: user.id });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
