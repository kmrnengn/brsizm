const user = ('../models/user');
module.exports = {

    signUp: async(req, res, next) => {
        console.log('called signUp()');
        const { email, password } = req.value.body;
        const newUser = new user({ email, passwor });
        await newUser.save();
        res.json({ user: 'created' });
    },
    signIn: async(req, res, next) => {
        console.log('called signIn()');
    },
    secret: async(req, res, next) => {
        console.log('called secred()');
    }
}