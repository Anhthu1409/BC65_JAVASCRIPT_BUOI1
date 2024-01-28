console.log("hello")

/* bài 1 tính tiền lương nhân viên
b1 người dùng nhập vào:
lương 1 ngày: 100.000
số ngày làm: 20 ngày */

/*b2 các bước xử lý thuật toán:
tính công thức lương = lương 1 ngày * số ngày làm */

// b3 kết quả hiển thị

var luongMotNgay = 100000;
var soNgayLam = 20;

var tinhTongLuong = luongMotNgay * soNgayLam;
console.log("luongMotngay",luongMotNgay);
console.log("songaylam",soNgayLam);
console.log("tinhTongLuong",tinhTongLuong);


// bài 2: Tính giá trị trung bình
/*b1 xác định đầu vào:
nhập vào 5 số thực tương ứng với a, b, c,d,e
*/
/* b2: xử lý 
5 số thực tương ứng là:
a = 5
b = 7
c= 9.8
d = 6.5
e = -10
giá trị trung bình = tổng 5 số thực ( a+b+c+d+e) / 5 */
//  b3 xuất giá trị 

 var a = 5, b = 7, c = 9.8, d = 6.5, e = -10;
  var giaTriTrungBinh = ( a+ b+c+d+e) / 5 ;
  console.log("a",a);
  console.log("b",b);
  console.log("c",c);
  console.log("d",d);
  console.log("e",e);
  console.log("giaTriTrungBinh",giaTriTrungBinh);


/*  bài 3:Quy đổi tiền
 b1 xác định đầu vào :
giá 1 đô usd : 23.500
số tiền đô cần đổi ra vnd : 50  

b2 xử lý dữ liệu:
 tỉ giá usd= 23.500
 số tiền usd cần đổi = 50
 số tiền tương ứng vnd =  số tiền usd cần đổi * tỉ giá usd 

 b3 xuất ra kết quả */

 var tiGiaUsd = 23500;
 var soTienCanDoi = 50;
 var soTienVndTuongUng = tiGiaUsd * soTienCanDoi;

 console.log("tiGiaUsd",tiGiaUsd);
 console.log("soTienCanDoi",soTienCanDoi);
 console.log("soTienVndTuongUng",soTienVndTuongUng);


/* bài 4: diện tích hình chữ nhật

b1: xác định đầu vào
 chiều dài hình chữ nhật 
 chiều rộng hình chữ nhật
  
 b2: xử lý số liệu 
  công thức tính chu vi hình chữ nhật : p = (chiều dài  + chiều rộng )*2
   công thức tính diện tích hình chữ nhật : S = chiều dài  * chiều rộng 

  b3 xuất ra kết quả*/

  var chieuDai = 10;
  var chieuRong = 9;
var chuVi = ( chieuDai + chieuRong) * 2;
var dienTich = (chieuDai*chieuRong);

console.log ("chieuDai",chieuDai);
console.log ("chieuRong",chieuRong);
console.log ("chuVi",chuVi);
console.log ("dienTich",dienTich);

/* bài 5: tính tổng 2 ký số

b1 xác định đầu vào:
n có 2 ký số 
biến chứa tổng 

b2 : xử lý 
xác định ký số hàng chục : Math.floor(n%100)/10
xác định ký số hàng đơn vị:n % 10

b3 xuất ra kết quả */

var n = 89;
var sum = 0;
var hangTram = Math.floor((n/10) % 10);
var donVi = n%10;
sum = hangTram + donVi;
console.log("hangTram",hangTram);
console.log("donVi",donVi);
console.log("sum",sum);
