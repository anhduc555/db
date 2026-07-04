const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_1.json', 'utf8'));

const updates = {
  2: {
    correctAnswer: 3,
    explanation: "Đáp án đúng là D: {R1(A,B,C), R2(B,C,D), R3(A,B,E)}. Phân rã BCNF yêu cầu các lược đồ con phải ở BCNF và không mất thông tin. Lược đồ này thoả mãn vì các phép kết nối tự nhiên giữa chúng bảo toàn thông tin và khóa của mỗi quan hệ con đều thoả mãn BCNF."
  },
  5: {
    explanation: "Đáp án đúng là B. Để lấy thông tin sinh viên (SID, Name) cùng với điều kiện về điểm (GPA >= 3.0) và tên môn học (Title = 'Database'), ta cần kết nối (JOIN) 3 bảng STUDENT, ENROLL và COURSE. Sau đó áp dụng phép chọn (σ) với các điều kiện trên, và cuối cùng dùng phép chiếu (π) để chỉ lấy cột SID và Name."
  },
  6: {
    explanation: "Đáp án đúng là B. Các thuộc tính không bao giờ xuất hiện ở vế phải của phụ thuộc hàm là C, do đó mọi khóa đều phải chứa C. Ta tính bao đóng: (AC)⁺ = {A,C,B,D} -> AC là khóa. Thêm B: (BC)⁺ = {B,C,A,D} -> BC là khóa. Do đó có 2 khóa ứng viên là AC và BC."
  },
  7: {
    explanation: "Đáp án đúng là D. Trong mô hình ER, một liên kết nhiều-nhiều (N-M) hoàn toàn có thể chứa các thuộc tính mô tả (descriptive attributes) để lưu trữ thông tin riêng của mối quan hệ đó (ví dụ: ngày đăng ký, điểm số). Liên kết không có khóa chính độc lập như thực thể."
  },
  8: {
    explanation: "Đáp án đúng là A. Trong mô hình Thực thể - Quan hệ (ER), mối quan hệ (cardinality) giữa hai thực thể có thể là một-một (1-1), một-nhiều (1-N) hoặc nhiều-nhiều (N-M). Các lựa chọn khác sai vì chúng hạn chế loại liên kết hoặc phát biểu sai về cấu trúc."
  },
  9: {
    explanation: "Đáp án đúng là B. Lệnh 'SELECT *' sẽ in ra toàn bộ thông tin (các cột) của các dòng thỏa mãn điều kiện. Lệnh A chỉ đếm số lượng, lệnh C chỉ in cột SDT, lệnh D chỉ in cột TB. Đề bài yêu cầu 'in các thuê bao' nên dùng SELECT *."
  },
  10: {
    explanation: "Đáp án đúng là D. Khi chuyển đổi mô hình ER sang mô hình quan hệ, một thuộc tính đa trị (như Tag) phải được tách thành một bảng riêng. Bảng mới này sẽ chứa khóa ngoại tham chiếu đến bảng chính (PID) và bản thân thuộc tính đó. Khóa chính của bảng mới là (PID, Tag)."
  },
  11: {
    explanation: "Đáp án đúng là D. Ta tính bao đóng của AC: (AC)⁺. Ban đầu (AC)⁺ = {A, C}. Vì A -> B nên thêm B. Vì C -> X nên thêm X. Ta có {B, X} nằm trong bao đóng, mà BX -> Z nên Z cũng thuộc bao đóng. Do đó AC -> Z là đúng."
  },
  13: {
    explanation: "Đáp án đúng là B. Để tính tổng 'số lượng' thuê bao theo từng địa chỉ, ta dùng gộp nhóm GROUP BY DC và hàm đếm COUNT(*). SUM(*) sai cú pháp vì SUM dùng cho tính tổng giá trị cột số."
  },
  15: {
    explanation: "Đáp án đúng là D. Trong đại số quan hệ, phép chọn (σ) được sử dụng để trích xuất các bộ (dòng) thỏa mãn một điều kiện. Ở đây điều kiện là TB = 'Nguyễn Nguyệt Hương'. Phép chiếu (π) dùng để chọn cột."
  },
  16: {
    explanation: "Đáp án đúng là D. Khóa của quan hệ phải xác định tất cả các thuộc tính còn lại. Xét bao đóng (ZQ)⁺ = {Z, Q, A, N, C} (dựa vào ZQ -> ANC). Do ZQ xác định toàn bộ các thuộc tính và không có tập con nào làm được điều này, nên ZQ là khóa."
  },
  19: {
    explanation: "Đáp án đúng là D. Trong lược đồ này, khóa duy nhất là A vì A⁺ = {A, B, C}. Các thuộc tính B và C không tham gia vào khóa nào, do đó chúng được gọi là các thuộc tính không khóa (non-prime attributes)."
  },
  20: {
    explanation: "Đáp án đúng là C. Đây là quy tắc gộp (Union Rule) trong hệ tiên đề Armstrong: Nếu X -> Y và X -> Z thì X -> YZ. Suy ra A -> B và A -> C thì A -> BC."
  },
  21: {
    explanation: "Đáp án đúng là C. Phụ thuộc hàm G -> BH không thể được suy ra. Bao đóng của G là G⁺ = {G, Z}. Vì G⁺ không chứa B và H, nên G không xác định được BH. Các phụ thuộc còn lại đều có thể suy dẫn được."
  },
  22: {
    explanation: "Đáp án đúng là D. Để có thông tin về khoa (COURSE) và điểm của sinh viên (STUDENT), ta phải kết nối ba bảng STUDENT, ENROLL và COURSE. Sau đó áp dụng phép chọn (σ) với điều kiện, và dùng phép chiếu (π) để lấy cột CID."
  },
  23: {
    explanation: "Đáp án đúng là D. Lệnh ALTER TABLE được sử dụng trong SQL để sửa đổi cấu trúc của một bảng đã tồn tại (thêm, xóa cột...). Lệnh UPDATE chỉ dùng để sửa đổi dữ liệu (bản ghi)."
  },
  26: {
    explanation: "Đáp án đúng là D. B là thuộc tính không xuất hiện ở vế phải nên phải thuộc mọi khóa. Tính bao đóng: (AB)⁺ = {A, B, C} -> AB là khóa. (BC)⁺ = {B, C, A} -> BC là khóa. Quan hệ có 2 khóa là AB và BC."
  },
  27: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng (4 thực thể, 3 liên kết 1-N, 1 liên kết M-N). Các thực thể gồm: Dự án, Hạng mục, Chi nhánh, Nhân viên. Liên kết 1-N gồm: Dự án - Hạng mục, Chi nhánh - Hạng mục, Chi nhánh - Nhân viên. Liên kết M-N là Nhân viên - Hạng mục."
  },
  28: {
    explanation: "Đáp án đúng là D. Phép tích Descartes (Cartesian Product) kết hợp mỗi dòng của bảng 1 với tất cả các dòng của bảng 2, tạo ra mọi tổ hợp có thể. Intersection (phép giao) chỉ lấy các dòng giống nhau."
  },
  29: {
    explanation: "Đáp án đúng là C. Hệ quản trị CSDL (DBMS) là phần mềm cung cấp môi trường để tạo lập, quản lý và truy xuất dữ liệu. Nó là phần mềm hệ thống chuyên dụng điều khiển các chiến lược truy nhập CSDL."
  },
  30: {
    explanation: "Đáp án đúng là D. Khóa của quan hệ là A vì A -> BCD. Mọi phụ thuộc hàm không tầm thường trong F đều có vế trái là siêu khóa, nên quan hệ R đạt dạng chuẩn Boyce-Codd (BCNF). Do đó nó cũng đạt 1NF, 2NF và 3NF."
  },
  31: {
    explanation: "Đáp án đúng là C. Khóa ứng viên là tập thuộc tính tối thiểu xác định tất cả. A và B không có ở vế phải nên phải thuộc khóa. Bao đóng (AB)⁺ = {A, B, C, D, E, F}. Vậy AB là khóa duy nhất."
  },
  32: {
    explanation: "Đáp án đúng là C. Để tìm các KH có số dư nhỏ hơn của 'Nga', ta cần tự kết nối (self-join) bảng R với chính nó (a và b). Bảng b dùng để tìm tài khoản của 'Nga', bảng a lấy những KH có tài khoản nhỏ hơn hoặc bằng (a.TK <= b.TK)."
  },
  33: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Mặc dù không có lựa chọn nào diễn đạt hoàn hảo 'Phụ thuộc đầy đủ X -> Y là Y phụ thuộc vào toàn bộ X, không phụ thuộc vào bất kỳ tập con nào của X', lựa chọn A mô tả bản chất của phụ thuộc hàm (vế trái xác định vế phải)."
  },
  35: {
    explanation: "Đáp án đúng là C. Tính bao đóng của IC: (IC)⁺ = {I, C}. Bao đóng này không chứa N và H, do đó IC -> NH sai. Các phụ thuộc còn lại đều đúng."
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

fs.writeFileSync('batch_1.json', JSON.stringify(data, null, 2));
console.log('Batch 1 updated successfully.');
