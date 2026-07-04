const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_7.json', 'utf8'));

const updates = {
  213: {
    explanation: "Đáp án A đúng. Tạo lập một cơ sở dữ liệu về bản chất chính là quá trình Thiết kế Cơ sở dữ liệu (Database Design). Quá trình này bao gồm việc xác định cấu trúc, kiểu dữ liệu, các ràng buộc toàn vẹn và tạo ra các bảng để sẵn sàng cho việc lưu trữ thông tin."
  },
  215: {
    explanation: "Đáp án A đúng. Một trong những nhược điểm của các Hệ quản trị Cơ sở dữ liệu (DBMS) so với hệ thống tệp truyền thống là chúng đòi hỏi dung lượng lưu trữ (cỡ file) lớn hơn đáng kể. DBMS cần lưu trữ thêm siêu dữ liệu (metadata), chỉ mục (indexes), nhật ký giao dịch và cấu trúc nội bộ."
  },
  216: {
    explanation: "Đáp án D đúng. Tìm khóa bằng cách tính bao đóng: (1) Tính (B,V,K)⁺: có B->C thêm C; có CV->M thêm M; bao đóng là {B,V,K,C,M}. (2) Tính (C,V,K)⁺: có CV->M thêm M; có MK->B thêm B; bao đóng là {C,V,K,M,B}. (3) Tính (V,K,M)⁺: có MK->B thêm B; có B->C thêm C; bao đóng là {V,K,M,B,C}. Vậy BVK, CVK và VKM đều là khóa."
  },
  218: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Tính bao đóng của (AC)⁺: Ban đầu có {A, C}. Dùng A -> B, ta thêm B (thành {A, B, C}). Có B -> D nên thêm D (thành {A, B, C, D}). Có CD -> E nên thêm E (thành {A, B, C, D, E}). Có E -> F nên thêm F (thành {A, B, C, D, E, F}). Vậy (AC)⁺ chứa tất cả các thuộc tính."
  },
  219: {
    explanation: "Đáp án D đúng. Câu truy vấn này sử dụng toán tử IN với truy vấn con. Nó sẽ lấy danh sách các mã sinh viên (msv) có điểm toán = 8 từ bảng điểm, sau đó đối chiếu với bảng danh sách (ds) để hiển thị họ tên và mã sinh viên. Tức là nó hiện thông tin của các sinh viên có điểm toán = 8 và mã sinh viên đó phải tồn tại ở cả hai bảng."
  },
  220: {
    explanation: "Đáp án C đúng. Chuẩn hóa cơ sở dữ liệu đến Dạng chuẩn 3 (3NF) thường được coi là mức chấp nhận được trong hầu hết các thiết kế thực tế. Bởi vì ở 3NF, chúng ta đã loại bỏ được các phụ thuộc bộ phận và phụ thuộc bắc cầu, qua đó giải quyết được hầu hết các vấn đề về dư thừa dữ liệu và không làm xuất hiện dị thường thông tin."
  },
  222: {
    explanation: "Đáp án A đúng. So với hệ thống quản lý tệp truyền thống, Cơ sở dữ liệu (DBMS) có những ưu điểm vượt trội: Giảm thiểu tối đa sự dư thừa dữ liệu, duy trì tính nhất quán (không có dữ liệu mâu thuẫn) và đảm bảo tính toàn vẹn của dữ liệu thông qua các ràng buộc."
  },
  223: {
    explanation: "Đáp án B đúng. Khóa ứng viên của Q là AB và BC. Thuộc tính khóa: A, B, C; không khóa: D. Ta thấy phụ thuộc hàm B -> D có vế trái B chỉ là một phần của khóa (AB hoặc BC), còn vế phải D là không khóa. Đây là phụ thuộc bộ phận, làm quan hệ vi phạm 2NF. Do đó, Q chỉ đạt 1NF."
  },
  224: {
    explanation: "Đáp án C đúng. Yêu cầu tìm phụ thuộc hàm không tầm thường có thể suy ra từ F. Ta có B -> C nằm trong tập F. Theo luật gia tăng (Augmentation) của Armstrong, ta thêm D vào hai vế để được BD -> CD. Theo luật phân rã (BD -> CD suy ra BD -> C), ta được BD -> C. Đây là phụ thuộc hàm không tầm thường hợp lệ."
  },
  225: {
    explanation: "Đáp án B đúng. Áp dụng luật bắc cầu của hệ tiên đề Armstrong: Từ C -> A và A -> D, ta suy ra C -> D. Tiếp tục kết hợp C -> D và D -> E bằng luật bắc cầu, ta dễ dàng suy ra được C -> E."
  },
  226: {
    explanation: "Đáp án C đúng. Định nghĩa chuẩn của phụ thuộc bắc cầu (Transitive Dependency) hoặc luật bắc cầu trong hệ tiên đề Armstrong là: Nếu ta có thuộc tính A xác định thuộc tính B (A -> B) và thuộc tính B xác định thuộc tính C (B -> C), thì ta có thể suy ra thuộc tính A xác định thuộc tính C (A -> C)."
  },
  227: {
    explanation: "Đáp án C đúng. Để đếm số lượng bản ghi thỏa mãn điều kiện, ta sử dụng hàm tập hợp COUNT(*). Mệnh đề WHERE được dùng để lọc ra những sản phẩm thuộc nhóm hàng 'HW'. Cú pháp chuẩn xác phải là: SELECT COUNT(*) FROM SanPham WHERE NhomHang='HW'."
  },
  231: {
    explanation: "Đáp án A đúng. Để lấy được (SID, Name) của sinh viên kèm theo điều kiện về số tín chỉ (Credits nằm trong bảng COURSE) và học kỳ (Semester nằm trong bảng ENROLL), ta bắt buộc phải kết nối tự nhiên cả 3 bảng STUDENT, ENROLL và COURSE. Sau đó áp dụng phép chọn (σ) với điều kiện Credits ≥ 4 VÀ Semester = '2025_Fall'."
  },
  232: {
    explanation: "Đáp án C đúng. Trong mô hình cơ sở dữ liệu quan hệ, một bộ (tuple) đại diện cho một hàng dữ liệu. Khi ta nói đến một 'n-bộ' (n-tuple) hay một quan hệ bậc n, chữ n ở đây chỉ số lượng các thuộc tính (cột) mà mỗi bộ dữ liệu đó sở hữu."
  },
  233: {
    explanation: "Đáp án C đúng. Để tính 'tổng số thuê bao', tức là đếm số lượng khách hàng (số hàng trong bảng), ta phải dùng hàm đếm COUNT(*). Hàm AVG tính trung bình cộng, hàm SUM tính tổng giá trị của một cột số, không dùng để đếm số lượng bản ghi."
  },
  234: {
    explanation: "Đáp án C đúng. Đề bài nêu: 'Mỗi sinh viên có thể học nhiều hơn một lớp' và 'mỗi lớp có nhiều sinh viên'. Sự tương quan hai chiều đều là 'nhiều', do đó mối quan hệ giữa Sinh viên và Lớp học bắt buộc phải là quan hệ Nhiều - Nhiều (M-N)."
  },
  235: {
    explanation: "Đáp án D đúng. Mục đích chính của việc tối ưu hóa truy vấn (biến đổi biểu thức đại số quan hệ này sang biểu thức tương đương khác) là tìm ra cách thực thi (execution plan) mang lại kết quả y hệt nhưng với chi phí thời gian thực hiện (CPU, I/O) và dung lượng bộ nhớ sử dụng ít hơn rất nhiều so với ban đầu."
  },
  237: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Vì một sinh viên có thể học nhiều chuyên ngành, nếu chỉ dùng WHERE ChuyenNganh <> 'CNTT', hệ thống vẫn in ra sinh viên đó nếu họ có ngành khác ngoài CNTT. Để tìm sinh viên HOÀN TOÀN KHÔNG học CNTT, ta phải tìm những sinh viên có học CNTT (truy vấn con), sau đó lấy những sinh viên có MaSV KHÔNG NẰM TRONG danh sách đó (NOT IN)."
  },
  238: {
    explanation: "Đáp án C đúng. Mệnh đề GROUP BY trong SQL được sử dụng để 'phân hoạch' (partition) các bản ghi của một quan hệ thành nhiều nhóm tách biệt nhau. Các bản ghi có cùng giá trị ở cột chỉ định trong GROUP BY sẽ được gộp chung vào một nhóm để thực hiện tính toán (SUM, COUNT, AVG)."
  },
  239: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Tính bao đóng của A (A⁺) với F={A->C, C->E, BE->D}: Ban đầu tập bao đóng chứa {A}. Dùng A -> C, ta thêm C (thành {A, C}). Dùng C -> E, ta thêm E (thành {A, C, E}). Phụ thuộc hàm BE -> D không thể dùng vì ta không có B. Vậy A⁺ = {A, C, E}."
  },
  241: {
    explanation: "Đáp án A đúng. Câu truy vấn bị lỗi cú pháp. Khi sử dụng hàm tập hợp (như Avg(Diem)) kết hợp với một cột thông thường (TenSV) trong mệnh đề SELECT, SQL bắt buộc phải có mệnh đề GROUP BY TenSV để biết sẽ tính điểm trung bình cho từng sinh viên nào. Do thiếu GROUP BY, lệnh bị lỗi."
  },
  245: {
    explanation: "Đáp án C đúng. Để cập nhật (UPDATE) dữ liệu của bảng này dựa trên điều kiện bảng khác, cách chuẩn mực là sử dụng truy vấn con (Subquery) với toán tử IN. Truy vấn con lấy tất cả MaSP từ DatHang có MaKH = 'C01', sau đó lệnh UPDATE vòng ngoài sẽ tăng giá (nhân 1.1) cho các sản phẩm trong danh sách đó."
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

fs.writeFileSync('batch_7.json', JSON.stringify(data, null, 2));
console.log('Batch 7 updated successfully.');
