const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_2.json', 'utf8'));

const updates = {
  36: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Theo thứ tự thực hiện chuẩn của một câu lệnh truy vấn SQL (tương ứng với đại số quan hệ), hệ thống sẽ thực hiện phép chọn (WHERE) và gộp nhóm (GROUP BY) trước để lọc và tổng hợp dữ liệu, sau đó mới thực hiện phép chiếu (SELECT) để lấy các cột cần thiết, và cuối cùng mới sắp xếp (ORDER BY)."
  },
  37: {
    explanation: "Đáp án D đúng. Thuộc tính G không nằm ở vế phải của bất kỳ phụ thuộc hàm nào nên phải thuộc mọi khóa. Vì G⁺ = {G,M,N,H,P,V} nên G là khóa duy nhất. Quan hệ đạt 2NF vì khóa đơn thuộc tính (không có phụ thuộc bộ phận). Tuy nhiên không đạt 3NF vì có phụ thuộc bắc cầu G -> M -> V (trong đó M không phải siêu khóa)."
  },
  38: {
    explanation: "Đáp án B đúng. Để đếm TỔNG SỐ bản ghi trong một bảng, dùng hàm đếm COUNT(*). Lệnh SELECT COUNT(*) FROM R sẽ trả về số lượng hàng. Lệnh AVG cần cột số, lệnh SUM(*) sai cú pháp."
  },
  39: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng nhất. Có 2 thực thể là Phòng Ban và Nhân Viên. Liên kết 'Làm việc' là 1-N (một phòng có nhiều nhân viên, nhân viên thuộc một phòng). Liên kết 'Trưởng phòng' thực chất là 1-1 (mỗi phòng 1 trưởng phòng, mỗi nhân viên làm tối đa 1 phòng), nhưng trong các lựa chọn không có 1-1 nên thường được xếp chung vào nhóm 1-N."
  },
  40: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Đề bài hỏi bao đóng của tập thuộc tính F, ký hiệu là F⁺. Bắt đầu với F⁺ = {F}. Dùng F -> A, thêm A. Dùng A -> B, thêm B. Dùng B -> C, thêm C. D và E không thể suy ra. Do đó F⁺ = {A, B, C, F}."
  },
  41: {
    explanation: "Đáp án C đúng. Tối ưu hóa truy vấn là quá trình phân tích và biến đổi câu lệnh truy vấn thành một kế hoạch thực thi (execution plan) sao cho chi phí hệ thống (thời gian thực hiện, tài nguyên CPU, I/O) là thấp nhất có thể."
  },
  42: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Khi một thực thể (Dependent) sử dụng khóa chính của một thực thể khác (Employee) để tạo thành một phần khóa chính của mình (EmpID + DepName), thì nó được gọi là thực thể yếu (weak entity). Nó phải có mối quan hệ định danh với thực thể mạnh để tồn tại."
  },
  43: {
    explanation: "Đáp án D đúng. Để lấy mã môn học (CID) đáp ứng cả hai điều kiện là thuộc khoa 'CS' (trong COURSE) và được đăng ký trong kỳ '2025_Fall' (trong ENROLL), ta cần kết nối tự nhiên hai bảng này. Dùng phép chọn (σ) với AND (∧), cuối cùng dùng phép chiếu (π) để trích xuất CID."
  },
  44: {
    explanation: "Đáp án D đúng. Bằng luật phân rã từ A -> BC, ta có A -> B và A -> C. Kết hợp A -> B và B -> D (bắc cầu) được A -> D. Gộp A -> C và A -> D được A -> CD. Bắc cầu A -> CD và CD -> E, ta suy ra A -> E."
  },
  45: {
    explanation: "Đáp án B đúng. Quy tắc phản xạ (Reflexivity) trong hệ tiên đề Armstrong phát biểu: Nếu tập thuộc tính Y là tập con của tập thuộc tính X (Y ⊆ X), thì X -> Y. Do đó, nếu B là con của A thì A -> B."
  },
  46: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Trong đại số quan hệ mở rộng, phép toán gộp nhóm và tính toán thống kê được ký hiệu bằng chữ Gamma (γ). Để đếm tổng số bản ghi, dùng hàm đếm COUNT(*). Ký hiệu đúng là γ_{COUNT(*)}(R). Phép σ (Sigma) là phép chọn, không dùng tính tổng."
  },
  47: {
    explanation: "Đáp án D đúng. Thứ tự thực hiện logic SQL SELECT: (1) FROM (tích Đề các/kết nối). (2) WHERE (phép chọn lọc). (3) GROUP BY (phân nhóm). (4) HAVING (lọc nhóm). (5) SELECT (phép chiếu lấy cột). (6) ORDER BY (sắp xếp)."
  },
  48: {
    explanation: "Đáp án B đúng. Trong mô hình dữ liệu quan hệ, các đặc trưng riêng của đối tượng được gọi là thuộc tính (attribute), biểu diễn bằng các cột trong bảng."
  },
  49: {
    explanation: "Đáp án D đúng. Trong mô hình mạng, cấu trúc dữ liệu dựa trên bản ghi và liên kết có hướng (set types). Cách thức duyệt từ bản ghi chủ (owner) sang bản ghi thành viên (member) khác với chiều ngược lại, nên câu hỏi và kết quả tìm kiếm không đối xứng."
  },
  50: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. 'An toàn' cơ sở dữ liệu (Security) là bảo vệ CSDL chống lại sự truy cập, thay đổi trái phép từ người dùng. Còn 'Toàn vẹn' (Integrity) là bảo đảm dữ liệu luôn đúng đắn và nhất quán khi có thao tác."
  },
  51: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Tính bao đóng: A⁺ = {A, B, C} (vì A -> B, B -> C). B⁺ = {B, A, C} (vì B -> A, B -> C). Bao đóng của A và B đều chứa toàn bộ thuộc tính và là tập đơn, nên cả A và B đều là khóa ứng viên."
  },
  52: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Ta tìm phụ thuộc KHÔNG thể suy diễn. Xét FC -> KI, tính bao đóng (FC)⁺: ban đầu là {F, C}. Có C -> F (không mang lại thêm). Không có B nên không áp dụng được FB -> KI. Vậy (FC)⁺ = {F, C}. Không chứa K, I nên FC -> KI là SAI."
  },
  53: {
    explanation: "Đáp án D đúng. Trong các mô hình trên, mô hình cơ sở dữ liệu hướng đối tượng (OODBMS) hỗ trợ tính kế thừa (inheritance) và cấu trúc dữ liệu phức hợp. Điều này cho phép tái sử dụng các lớp đối tượng, hạn chế sự dư thừa dữ liệu hiệu quả hơn so với phân cấp hay mạng."
  },
  54: {
    explanation: "Đáp án C đúng. Khóa là AD, BD, CD. Các phụ thuộc A->B, B->C, C->A vi phạm BCNF vì A, B, C không phải siêu khóa. Phân rã thành R1(A,B,C) và R2(A,D) là tối ưu: R1 chứa các khóa A, B, C nên thỏa mãn BCNF. Giao R1 và R2 là A (khóa của R1) nên không mất thông tin."
  },
  55: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Phụ thuộc đầy đủ X -> Y có nghĩa là Y phụ thuộc toàn bộ X, không phụ thuộc vào bất kỳ phần nào của X. Trong phương án C, 'Họ tên sinh viên' phụ thuộc cả 'Số thứ tự' và 'Mã lớp'. Các đáp án khác là phụ thuộc bộ phận (ví dụ: Giá báo chỉ phụ thuộc Mã báo)."
  },
  56: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Trong đại số quan hệ (Relational Algebra), các toán hạng (đầu vào) của các phép toán (chọn, chiếu, kết nối, hợp, giao) đều là các quan hệ (relations - bảng). Kết quả trả về cũng là một quan hệ."
  },
  57: {
    explanation: "Đáp án C đúng. Khóa chính là (patient, consultant). Tuy nhiên, thuộc tính 'hospital' (bệnh viện) chỉ phụ thuộc vào 'consultant' (bác sĩ làm việc ở đâu), tức là phụ thuộc vào một phần khóa chính (phụ thuộc bộ phận). Vì vậy quan hệ vi phạm 2NF và chỉ đạt 1NF."
  },
  58: {
    explanation: "Đáp án B đúng. Mô hình Client-Server phân tách ứng dụng thành server (lưu trữ và xử lý trung tâm) và client. Máy khách gửi yêu cầu và nhận kết quả, chia sẻ gánh nặng xử lý để hệ thống hiệu quả và bảo mật hơn."
  },
  59: {
    explanation: "Đáp án B đúng. Lệnh IN ('Boston','New York','Denver') tương đương với nhiều điều kiện OR kết hợp, lọc ra danh sách khách hàng (tên và số điện thoại) đang sống ở một trong ba thành phố này."
  },
  60: {
    explanation: "Đáp án D đúng. Phép giao (Intersection) của hai tập hợp: tập sinh viên đăng ký môn 'CS' và tập sinh viên đăng ký môn 'IS' sẽ trả về những sinh viên thỏa mãn đồng thời việc học ít nhất 1 môn của mỗi khoa."
  },
  61: {
    explanation: "Đáp án D đúng. Trong SQL chuẩn, toán tử LIKE dùng với '%' đại diện cho chuỗi ký tự. LIKE 'a%' tìm chuỗi bắt đầu bằng 'a'. (Lưu ý: phương án này trong đề có thể có lỗi chính tả từ 'Select *' thành 'Selet [all]')."
  },
  62: {
    explanation: "Đáp án A đúng. Để tìm sinh viên đăng ký từ 2 môn trở lên, ta tự kết nối (self-join) bảng đăng ký (với bí danh E1 và E2). Điều kiện kết nối là cùng SID nhưng khác CID (khác môn học) trong cùng kỳ học."
  },
  63: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Phép trừ tập hợp (-) được sử dụng: Lấy tập hợp sinh viên chuyên ngành IS (Major='IS') TRỪ ĐI tập hợp những sinh viên chuyên ngành IS đã đăng ký ít nhất 1 môn thuộc khoa IS. Kết quả là những sinh viên IS KHÔNG đăng ký môn IS nào."
  },
  64: {
    explanation: "Đáp án A đúng. Lệnh SELECT * lấy tất cả thông tin, kết hợp điều kiện WHERE để lọc đúng khách hàng có GioiHanTinDung là 7500. Lệnh C sai vì in ra MaNV không liên quan đến thông tin khách hàng."
  },
  65: {
    explanation: "Đáp án C đúng. Dạng chuẩn 2 (2NF) yêu cầu quan hệ đạt 1NF và tất cả các thuộc tính không khóa đều phụ thuộc hàm ĐẦY ĐỦ vào khóa chính (không có thuộc tính nào phụ thuộc vào chỉ một phần của khóa)."
  },
  66: {
    explanation: "Đáp án D đúng. Bằng luật bắc cầu: Từ C -> D và D -> E suy ra C -> E. Tiếp tục luật bắc cầu từ AB -> C và C -> E, ta suy ra được AB -> E."
  },
  67: {
    explanation: "Đáp án A đúng. Dạng chuẩn 1 (1NF) yêu cầu mọi giá trị trong các bộ phải là giá trị nguyên tố (đơn trị), không được chứa cấu trúc lặp hay đa trị."
  },
  68: {
    explanation: "Đáp án D đúng. Ngôn ngữ thao tác dữ liệu (DML - Data Manipulation Language) gồm các lệnh truy xuất (SELECT) và cập nhật dữ liệu (INSERT - chèn, UPDATE - sửa, DELETE - loại bỏ)."
  },
  69: {
    explanation: "Đáp án C đúng. Do đặc tính của SQL với giá trị NULL: Nếu câu lệnh con trong NOT IN chứa một giá trị NULL, toàn bộ điều kiện trả về UNKNOWN và không dòng nào được lấy. NOT EXISTS xử lý an toàn hơn nên truy vấn 1 có thể trả về ít dòng hơn truy vấn 2."
  },
  70: {
    explanation: "Đáp án C đúng. Theo định nghĩa, mỗi bảng trong cơ sở dữ liệu quan hệ chỉ được phép có duy nhất MỘT khóa chính (primary key), mặc dù khóa đó có thể được tạo thành từ nhiều cột."
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

fs.writeFileSync('batch_2.json', JSON.stringify(data, null, 2));
console.log('Batch 2 updated successfully.');
