const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_6.json', 'utf8'));

const updates = {
  177: {
    explanation: "Đáp án B đúng. Hệ quản trị cơ sở dữ liệu (DBMS) khác biệt với các hệ thống lập trình và quản lý tệp thông thường ở chỗ nó cung cấp đồng bộ: khả năng quản lý lưu trữ dữ liệu phức tạp, truy xuất dữ liệu hiệu quả qua ngôn ngữ SQL, và đặc biệt là khả năng quản lý giao tác (Transaction Management) đảm bảo tính toàn vẹn (ACID)."
  },
  179: {
    explanation: "Đáp án C đúng. Khóa ứng viên là AD và BD (vì A->B, B->A và AB->C nên A và B xác định C). Thuộc tính khóa: A, B, D. Không khóa: C. Từ A->B và AB->C ta suy ra A->C. Phụ thuộc hàm A->C có vế trái A là một phần của khóa AD, vế phải C là không khóa. Đây là phụ thuộc bộ phận, vi phạm 2NF. Nên dạng chuẩn cao nhất chỉ là 1NF."
  },
  181: {
    explanation: "Đáp án C đúng. Một trong những nguyên tắc quan trọng nhất trong tối ưu hóa truy vấn đại số quan hệ (và SQL) là 'đẩy các phép Chọn (σ) và Chiếu (π) xuống thực hiện càng sớm càng tốt'. Việc này giúp thu gọn kích thước các bảng (giảm số hàng, số cột) trước khi thực hiện các phép Kết nối (Join) đắt đỏ."
  },
  183: {
    explanation: "Đáp án C đúng. Ta tìm bao đóng của B: B⁺ = {B}. Vì B⁺ chỉ chứa B, không chứa K, Q hay O nên B không thể xác định KQO (B -> KQO là sai). Lựa chọn C (B -> KQO) hiển nhiên không thể dẫn xuất."
  },
  185: {
    explanation: "Đáp án B đúng. Để lấy được Title của môn học theo các điều kiện liên quan đến phòng và học kỳ, ta cần kết nối tự nhiên 3 bảng TEACH, ROOM, và COURSE (để ghép thông tin). Sau đó dùng phép chọn (σ) với điều kiện Building='A' VÀ Semester='2025_Fall'. Cuối cùng chiếu (π) để trích xuất Title."
  },
  186: {
    explanation: "Đáp án A đúng. Câu lệnh SELECT * FROM R1, R2 WHERE R1.A1 = R2.A2 thực hiện phép kết nối bằng (Equi-Join). Trong đại số quan hệ, nó tương đương với phép chọn (σ) áp dụng trên tích Đề-các (thường ký hiệu là × hoặc ⋈ với điều kiện) của R1 và R2."
  },
  187: {
    explanation: "Đáp án A đúng. Tích Đề các (Cartesian Product) của hai quan hệ R1 (trên tập thuộc tính Ω) và R2 (trên tập thuộc tính Sigma) tạo ra một quan hệ mới chứa tất cả tổ hợp. Một bộ t thuộc kết quả khi và chỉ khi phần của t tương ứng Ω thuộc R1 VÀ (and) phần tương ứng Sigma thuộc R2."
  },
  188: {
    explanation: "Đáp án A đúng. Khi phân cấp ISA có tính giao thoa (overlap - một người có thể vừa là sinh viên vừa là nhân viên), cách ánh xạ tốt nhất là tạo bảng cha (PERSON) và các bảng con (STUDENT, EMPLOYEE) dùng khóa ngoại trỏ về bảng cha. Cách này cho phép một ID tồn tại đồng thời ở cả hai bảng con."
  },
  190: {
    explanation: "Đáp án C đúng. Từ B -> C và C -> D, theo luật bắc cầu ta suy ra được B -> D. Như vậy, B xác định cả C và D (B -> CD). Theo luật gia tăng, nếu B -> CD thì AB -> CD. Do phụ thuộc hàm AB -> CD có thể được suy ra từ các phụ thuộc hàm khác trong F, nên nó là phụ thuộc hàm dư thừa."
  },
  191: {
    explanation: "Đáp án D đúng. Trong mô hình ER, một Thực thể (Entity) đại diện cho một đối tượng cụ thể trong thế giới thực hoặc một khái niệm (đối tượng dữ liệu) tồn tại độc lập mà ta cần quản lý và lưu trữ thông tin về nó."
  },
  192: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Theo định nghĩa toán học của mô hình cơ sở dữ liệu quan hệ (do E.F. Codd đề xuất), một quan hệ (bảng) là một tập hợp các bộ (hàng), mỗi bộ là một ánh xạ từ thuộc tính (cột) sang miền giá trị. Dựa trên lý thuyết tập hợp, thứ tự của các hàng và các cột đều KHÔNG quan trọng."
  },
  193: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Hàm SUM() trong SQL được sử dụng để tính tổng các giá trị của một cột có kiểu dữ liệu số (number)."
  },
  194: {
    explanation: "Đáp án A đúng. Thử tính bao đóng của các tập: (AB)⁺ = {A,B,C,D,E,G} (vì AB->C, BC->D, D->EG). (CG)⁺ = {A,B,C,D,E,G} (vì CG->BD, D->EG, C->A). (CD)⁺ = {A,B,C,D,E,G} (vì D->EG, C->A, ACD->B). Tất cả các tập này đều có bao đóng chứa toàn bộ thuộc tính và tối thiểu, nên chúng đều là các khóa."
  },
  196: {
    explanation: "Đáp án A đúng. Tất cả các kiểu dữ liệu NUMERIC (số định dạng), FLOAT (số thực dấu phẩy động) và CHARACTER (chuỗi ký tự) đều là các kiểu dữ liệu hợp lệ trong ngôn ngữ chuẩn SQL."
  },
  200: {
    explanation: "Đáp án D đúng. Bảo vệ cơ sở dữ liệu đòi hỏi một hệ thống phòng thủ nhiều lớp toàn diện: Nhận diện người sử dụng (Authentication), Bảo vệ ở mức vật lý (chống phá hoại phần cứng), và Kiểm tra quyền truy nhập (Authorization / Access Control)."
  },
  202: {
    explanation: "Đáp án C đúng. Lệnh CREATE TABLE trong SQL thuộc DDL, được dùng để khởi tạo cấu trúc của một quan hệ (bảng), bao gồm việc định nghĩa tên bảng và liệt kê tất cả các thuộc tính (cột) cùng với kiểu dữ liệu và ràng buộc của chúng."
  },
  205: {
    explanation: "Đáp án A đúng. Các thuộc tính không xuất hiện ở vế phải của F là A, D, H. Bao đóng (ADH)⁺ chứa toàn bộ thuộc tính nên ADH là khóa duy nhất. Các phụ thuộc hàm A -> BC, D -> E, H -> G đều có vế trái là một tập con thực sự của khóa chính ADH. Đây là phụ thuộc bộ phận, vi phạm 2NF, nên chỉ đạt 1NF."
  },
  208: {
    explanation: "Đáp án B đúng. Ta cần tìm tên giảng viên (IName) dựa trên điều kiện của sinh viên (GPA < 2.0). Cần kết nối 3 bảng: INSTRUCTOR, ADVISE (biết ai cố vấn ai) và STUDENT (lấy điểm). Sau đó dùng phép chọn σ với điều kiện GPA < 2.0, rồi dùng phép chiếu π trích xuất cột IName."
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

fs.writeFileSync('batch_6.json', JSON.stringify(data, null, 2));
console.log('Batch 6 updated successfully.');
