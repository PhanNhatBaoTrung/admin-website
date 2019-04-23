var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
});

router.get('/trang-chu.hbs', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
});

router.get('/danh-sach-nguoi-dung.hbs', function(req, res, next) {
  res.render('danh-sach-nguoi-dung', { title: 'DoubleT | Danh sách người dùng' });
});

router.get('/thong-tin-ca-nhan.hbs', function(req, res, next) {
  res.render('thong-tin-ca-nhan', { title: 'DoubleT | Thông tin cá nhân' });
});

router.get('/danh-sach-san-pham.hbs', function(req, res, next) {
  res.render('danh-sach-san-pham', { title: 'DoubleT | Quản lý sản phẩm' });
});

router.get('/danh-sach-don-dat-hang.hbs', function(req, res, next) {
  res.render('danh-sach-don-dat-hang', { title: 'DoubleT | Quản lý đơn đặt hàng' });
});

module.exports = router;
