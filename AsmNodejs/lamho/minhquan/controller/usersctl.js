var mymd = require('../model/users');



exports.dsusers = async (r, s, n) => {

    let list = await mymd.userModel.find();
    console.log(list);
    s.render('users/dsusers', { list: list });

}

exports.addusers = async (r, s, n) => {

    let msg = '';


    let list = await mymd.userModel.find();



    if (r.method == 'POST') {
        // kiểm tra hợp lệ dữ liệu nếu có 

        // tạo model để gán dữ liệu 
        let objSP = new mymd.userModel();
        objSP.nameuser = r.body.nameuser;
        objSP.password = r.body.password;

        // ghi vào csdl 
        // dùng khối try cash 
        try {
            let newSp = await objSP.save();
            console.log(newSp);
            msg = 'thêm mới thành công '
        } catch (error) {
            msg = 'lỗi ' + error.message();
            console.log(error);
        }
    }



    s.render('users/adduser', { msg: msg, list: list });

}


exports.editusers = async (req, res, next) => {
    let msg = '';
    let idusers = req.params.idusers;
    // lấy thông tin sản phẩm để sửa, tự thêm khối truy catch để bắt lỗi. 
    let objSP = await mymd.userModel.findById(idusers);


    if (req.method == 'POST') {
        // kiểm tra hợp lệ dữ liệu nếu có....

        // tạo model để gán dữ liệu
        let objSP = new mymd.userModel();
        objSP.nameuser = req.body.nameuser;
        objSP.password = req.body.password;

        objSP._id = idusers;// thêm cho chức năng sửa
        // ghi vào CSDL
        try {
            // let new_sp = await objSP.save();
            // console.log(new_sp);
            // msg = 'Thêm mới thành công';

            await mymd.userModel.findByIdAndUpdate(idusers, objSP);
            msg = 'Đã cập nhật thành công';

        } catch (error) {
            msg = 'Lỗi ' + error.message;
            console.log(error);
        }

    }

    res.render('users/edituser', { msg: msg, objSP: objSP });
}


exports.deleteusers = async (req, res, next) => {
    let iduser = req.params.id;
    console.log(req.params.id);

    let objSP = await mymd.userModel.findById(iduser);
    try {
        await mymd.userModel.findByIdAndDelete(iduser, objSP);
        msg = 'Đã cập nhập';
        res.redirect('back');
    } catch (err) {
        msg = 'Lỗi không xóa được';
        console.log(err);

    }

}
