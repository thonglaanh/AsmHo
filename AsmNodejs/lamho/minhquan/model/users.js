var db = require('./db');

// định nghĩa cấu trúc 
const userSchema = new db.mongoose.Schema(
    {
        nameuser: { type: String, require: true },
        password: { type: String, require: true },


    },
    { collection: 'Tb_users' }// nếu ko có bảng san pham thì tự sinh ra 
);
let userModel = db.mongoose.model('userModel', userSchema);


module.exports = { userModel };
