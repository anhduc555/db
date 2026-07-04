const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_3.json', 'utf8'));

const updates = {
  71: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Mô hình Thực thể - Quan hệ (ERM) là một công cụ thiết kế cơ sở dữ liệu ở mức khái niệm. Do đó, nó cho phép mô tả lược đồ khái niệm (conceptual schema) của một tổ chức, giúp phản ánh cấu trúc thông tin tổng thể một cách trực quan trước khi chuyển sang thiết kế logic và vật lý."
  },
  72: {
    explanation: "Đáp án A đúng. Ta cần tìm mã môn học (CID) đáp ứng hai điều kiện: khoa quản lý không phải là 'CS' (Dept <> 'CS' trong bảng COURSE) VÀ được đăng ký trong học kỳ '2025_Spring' (Semester = '2025_Spring' trong bảng ENROLL). Do đó, ta cần kết nối hai bảng, áp dụng phép chọn với điều kiện AND, rồi chiếu lấy CID."
  },
  73: {
    explanation: "Đáp án A đúng. Tính bao đóng của A: Khởi tạo A⁺ = {A}. Vì A -> B nên thêm B. Vì B -> C nên thêm C. Vì BC -> D (và ta đã có B, C) nên thêm D. Vậy A⁺ = {A, B, C, D}. Do bao đóng của A chứa D nên A xác định D (A -> AD thuộc F⁺)."
  },
  74: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Theo nguyên tắc thông tin (Information Rule) của mô hình dữ liệu quan hệ (do E.F. Codd đề xuất), mọi thông tin trong CSDL (bao gồm cả dữ liệu về thực thể và các ràng buộc) đều phải được biểu diễn DUY NHẤT bằng một cách: đó là các giá trị trong các ô (giao của hàng và cột) của các bảng."
  },
  75: {
    explanation: "Đáp án B đúng. Định nghĩa toán học chuẩn của phép chiếu π_X(R) phải là tập hợp các bộ giá trị t[X] sao cho bộ t phải thuộc tập quan hệ R (t ∈ R). Các phương án khác bị thiếu hoặc viết sai điều kiện này (chỉ liệt kê điều kiện giá trị thuộc miền Dom là sai vì nó sẽ tạo ra mọi bộ có thể có)."
  },
  76: {
    explanation: "Đáp án C đúng. Ta xét bao đóng của từng vế trái: (AB)⁺ = {A, B, C, D}. (BC)⁺ = {A, B, C, D}. (CD)⁺ = {A, B, C, D}. (AD)⁺ = {A, B, C, D}. Tất cả các vế trái đều có bao đóng chứa toàn bộ thuộc tính của quan hệ và không thể tối giản hơn, do đó mọi vế trái đều là khóa."
  },
  78: {
    explanation: "Đáp án B đúng. Bằng cách áp dụng luật bắc cầu (Transitivity Rule) trong hệ tiên đề Armstrong: Vì ta có A -> B và B -> C, nên ta dễ dàng suy ra được A -> C. Các mệnh đề khác không có cơ sở để suy diễn."
  },
  79: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Ta tính bao đóng của AB: Bắt đầu với (AB)⁺ = {A, B}. Áp dụng phụ thuộc AB -> CD, ta thêm C và D: {A, B, C, D}. Áp dụng tiếp C -> E, ta thêm E: {A, B, C, D, E}. Vậy bao đóng của AB là tập tất cả các thuộc tính {A, B, C, D, E}."
  },
  80: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Bảng không có nhóm trị lặp -> đạt 1NF. Khóa chính chỉ có một thuộc tính nên không thể có phụ thuộc bộ phận -> mặc nhiên đạt 2NF. Tuy nhiên, bảng có chứa phụ thuộc bắc cầu, tức là vi phạm điều kiện của 3NF. Do đó, dạng chuẩn cao nhất mà bảng này đạt được chỉ là 2NF."
  },
  82: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Một lược đồ quan hệ đạt dạng chuẩn 2 (2NF) khi nó đã ở 1NF và tất cả các thuộc tính không khóa đều phụ thuộc hàm ĐẦY ĐỦ vào khóa chính (không có thuộc tính nào chỉ phụ thuộc vào một phần của khóa ghép)."
  },
  83: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Các thuộc tính không xuất hiện ở vế phải của bất kỳ phụ thuộc hàm nào là B và C. Do đó, B và C bắt buộc phải nằm trong mọi khóa. Tính bao đóng của BC: (BC)⁺ = {B, C}. Có C -> A nên thêm A. Có AB -> D nên thêm D. Có D -> E nên thêm E. Vì (BC)⁺ = {A,B,C,D,E}, BC là khóa ứng viên duy nhất."
  },
  84: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Khóa của quan hệ T là P (vì P -> O và P -> C). Ta thấy C -> O là phụ thuộc hàm giữa hai thuộc tính không khóa. Từ đó tạo ra một chuỗi P -> C -> O, đây chính là định nghĩa của phụ thuộc bắc cầu (Transitive Dependency), làm vi phạm 3NF."
  },
  85: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Trong sơ đồ Thực thể - Quan hệ (ERD), thuộc tính đa trị (multivalued attribute) được biểu diễn bằng hình elip nét đôi (double ellipse). Hình thoi dùng cho liên kết, hình elip đơn cho thuộc tính thường."
  },
  86: {
    explanation: "Đáp án D đúng. Trong SQL, phép so sánh bằng (=) với giá trị NULL sẽ trả về kết quả là UNKNOWN chứ không phải TRUE. Do đó, dòng chứa giá trị khóa NULL sẽ không được kết nối với chính nó. (n-1) dòng còn lại có khóa duy nhất khác NULL sẽ kết nối 1-1 với chính chúng. Kết quả sẽ có n-1 dòng."
  },
  87: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Lệnh UPDATE trong ngôn ngữ thao tác dữ liệu (DML) của SQL được sử dụng để sửa đổi, cập nhật dữ liệu (các bản ghi) đã tồn tại trong một bảng của cơ sở dữ liệu."
  },
  88: {
    explanation: "Đáp án C đúng. Câu lệnh sử dụng phép kết nối truyền thống qua mệnh đề WHERE hoàn toàn tương đương với việc sử dụng NATURAL JOIN trong SQL (giả sử cột khóa chung duy nhất giữa hai bảng là ID). NATURAL JOIN sẽ tự động tìm các cột cùng tên và kết nối chúng."
  },
  89: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Mô hình Client - Server hoạt động theo cơ chế: Máy khách chạy các ứng dụng giao diện và gửi các truy vấn qua mạng đến máy chủ. Máy chủ xử lý trực tiếp trên CSDL tập trung và trả kết quả về máy khách, giảm tải đường truyền."
  },
  90: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Đặc trưng cơ bản nhất của mô hình cơ sở dữ liệu quan hệ (Relational Model) là mọi dữ liệu và mối quan hệ giữa chúng đều được tổ chức và biểu diễn dưới dạng các bảng (table/relation) 2 chiều gồm hàng và cột."
  },
  91: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Mô hình dữ liệu quan hệ do E.F. Codd đề xuất năm 1970 dựa trên lý thuyết tập hợp, trong đó cơ sở dữ liệu được tổ chức thành các bảng (relations). Người sử dụng thao tác và hình dung dữ liệu qua các bảng này."
  },
  92: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Theo ràng buộc toàn vẹn thực thể (Entity Integrity Constraint), không có bất kỳ thành phần nào của khóa chính được phép nhận giá trị rỗng (NULL) hoặc không xác định. Khóa chính phải có giá trị để xác định tính duy nhất."
  },
  93: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Vì mỗi khoa chỉ có ĐÚNG MỘT trưởng khoa và mỗi giảng viên chỉ có thể làm trưởng của TỐI ĐA MỘT khoa, nên bản chất mối quan hệ này là 1-1 (Một - Một) giữa Khoa và Giảng Viên."
  },
  94: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Khóa chính (Primary Key) là một trường (field) hoặc tập hợp các trường dùng để định danh duy nhất mỗi dòng (bản ghi) trong một bảng của cơ sở dữ liệu."
  },
  96: {
    explanation: "Đáp án D đúng. Định nghĩa toán học của một khóa: Tập thuộc tính X là khóa nếu bao đóng của nó chứa toàn bộ thuộc tính (X⁺ = Ω) và X là tối thiểu, tức là không có tập con thực sự nào của X thỏa mãn điều kiện đó (với mọi A thuộc X, (X - A)⁺ ≠ Ω)."
  },
  98: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Trong tập F đã có sẵn AB -> C. Theo luật gia tăng, ta có thể thêm D vào vế trái (ABD -> C) mà phụ thuộc hàm vẫn đúng. Tuy nhiên, D không đóng góp thêm giá trị xác định nào để ra C (chỉ cần AB là đủ), do đó D là thuộc tính thừa."
  },
  99: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Khi sử dụng hàm gộp thống kê như COUNT() đi kèm với các cột thông thường trong mệnh đề SELECT (như MaSV, HoSV, TenSV), ta BẮT BUỘC phải liệt kê các cột thông thường đó trong mệnh đề GROUP BY. Mệnh đề HAVING được dùng để lọc nhóm."
  },
  100: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Phép đổi tên (Rho - ρ) chủ yếu được sử dụng để đổi tên các thuộc tính hoặc quan hệ. Điều này cực kỳ quan trọng khi thực hiện kết nối tự nhiên hoặc các phép toán kết nối một bảng với chính nó (Self-Join) để tránh trùng lặp tên cột."
  },
  103: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Đây là Luật bắc cầu giả (Pseudo-transitivity Rule). Chứng minh: Từ A -> B, áp dụng luật gia tăng với C ta có AC -> BC. Áp dụng luật bắc cầu cho (AC -> BC) và (BC -> Z), ta thu được AC -> Z. Lựa chọn D đưa ra giả thiết lỏng nhất nhưng vẫn chứng minh được."
  }
};

data.forEach(q => {
  if (updates[q.id]) {
    if (updates[q.id].correctAnswer !== undefined) {
      q.correctAnswer = updates[q.id].correctAnswer;
    }
    if (updates[q.id].explanation !== undefined) {
      q.explanation = updates[q.id].explanation;
    }
  }
});

fs.writeFileSync('batch_3.json', JSON.stringify(data, null, 2));
console.log('Batch 3 updated successfully.');
