const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_8.json', 'utf8'));

const updates = {
  246: {
    explanation: "Đáp án D đúng. Cú pháp cơ bản của lệnh thu hồi quyền (REVOKE) trong SQL là: REVOKE <quyền> ON <đối tượng> FROM <người_dùng>. Ví dụ: REVOKE SELECT, INSERT ON NhanVien FROM UserA. Nó có tác dụng tước bỏ các quyền đã cấp trước đó bằng lệnh GRANT."
  },
  247: {
    explanation: "Đáp án A đúng. Kết nối tự nhiên (Natural JOIN) là một trong những phương pháp cơ bản và phổ biến nhất trong đại số quan hệ và SQL để kết nối các bảng. Nó tự động ghép các hàng từ hai bảng dựa trên các cột có cùng tên, và loại bỏ cột trùng lặp."
  },
  249: {
    explanation: "Đáp án C đúng. Một thuộc tính (ví dụ A1) trong vế trái của một phụ thuộc hàm (A1A2 -> B) được gọi là dư thừa nếu như ta bỏ nó đi mà phụ thuộc hàm vẫn đúng. Nghĩa là chỉ cần một mình A2 cũng đủ để xác định B (A2 -> B). Khi đó, việc thêm A1 là không cần thiết."
  },
  251: {
    explanation: "Đáp án C đúng. Các phép toán gộp nhóm (nhóm các bản ghi có chung đặc điểm để tính toán) được thực hiện thông qua mệnh đề GROUP BY trong câu lệnh SQL. Mệnh đề GROUP BY luôn được đặt sau mệnh đề WHERE và trước mệnh đề HAVING hoặc ORDER BY."
  },
  252: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Hệ quản trị Cơ sở dữ liệu (DBMS) được phân loại là Các phần mềm hệ thống (System Software). Nó cung cấp môi trường trung gian giữa người sử dụng với hệ điều hành và phần cứng, nhằm mục đích tổ chức, quản lý và truy xuất dữ liệu."
  },
  253: {
    explanation: "Đáp án A đúng. Mối kết hợp 'Tham gia' giữa hai thực thể NHÂN VIÊN và DỰ ÁN điển hình là mối quan hệ Nhiều - Nhiều (N-N hay M-N). Lý do: Một nhân viên có thể tham gia vào nhiều dự án khác nhau cùng lúc, và một dự án quy mô lớn cũng cần nhiều nhân viên tham gia."
  },
  254: {
    explanation: "Đáp án A đúng. Để lấy được mã môn học (CID) dựa trên chuyên ngành (Major='CS') và thời gian đăng ký (Semester='2025_Spring'), ta cần kết nối tự nhiên bảng STUDENT và ENROLL. Sau đó áp dụng phép chọn (σ) với hai điều kiện trên (dùng AND ∧). Cuối cùng chiếu (π) lấy cột CID."
  },
  262: {
    explanation: "Đáp án C đúng. Để xóa hoàn toàn cấu trúc của một bảng (cùng với toàn bộ dữ liệu, chỉ mục, và các ràng buộc bên trong nó) ra khỏi lược đồ cơ sở dữ liệu, ta bắt buộc phải dùng lệnh DROP TABLE (DDL). Lệnh DELETE chỉ dùng để xóa dữ liệu mà vẫn giữ lại cấu trúc."
  },
  264: {
    explanation: "Đáp án C đúng. Tính chất 'tài nguyên thông tin chung' của CSDL thể hiện ở việc nó cho phép rất nhiều người sử dụng cùng truy cập đồng thời, thường thông qua mạng nên không phụ thuộc vị trí địa lý, và quan trọng nhất là phải có cơ chế phân quyền chặt chẽ để đảm bảo an toàn."
  },
  265: {
    explanation: "Đáp án C đúng. Không có một mô hình dữ liệu nào là 'tuyệt đối tốt nhất' cho mọi bài toán. Việc lựa chọn mô hình dữ liệu tốt nhất phụ thuộc hoàn toàn vào bản chất của dữ liệu, quy mô hệ thống, và đặc biệt là yêu cầu truy xuất và khai thác thông tin thực tế của tổ chức."
  },
  268: {
    explanation: "Đáp án D đúng. Dựa vào các phương án, truy vấn này thực chất đang tìm các sản phẩm được đặt bởi CẢ HAI khách hàng cụ thể là 'c01' và 'c02'. Phép tự kết nối (Self-join) bảng DatHang (o1 và o2) dựa trên cùng MaSP nhưng khác MaKH là một cách tiếp cận đúng."
  },
  269: {
    explanation: "Đáp án A đúng. Đề bài hỏi phụ thuộc hàm không tầm thường có thể suy ra. Từ A -> BC, ta suy ra A -> B và A -> C. Từ A -> B và B -> D, ta có A -> D. Vì A có thể xác định cả C và D, nên A -> CD. Áp dụng luật bắc cầu với CD -> E, ta suy ra được A -> E."
  },
  270: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Đây chính là Luật tựa bắc cầu (Pseudo-transitivity Rule) được suy dẫn từ hệ tiên đề Armstrong: Nếu A -> B và BC -> Z, thì ta suy ra được AC -> Z. Chứng minh: Từ A -> B, dùng luật gia tăng thêm C ta có AC -> BC. Bắc cầu giữa AC -> BC và BC -> Z, ta có AC -> Z."
  },
  273: {
    explanation: "Đáp án C đúng. Cấu trúc của mô hình cơ sở dữ liệu quan hệ (Relational Model) được định nghĩa dựa trên các khái niệm toán học cốt lõi: Quan hệ (Relation - tương ứng với bảng), Bộ (Tuple - tương ứng với hàng), và Thuộc tính (Attribute - tương ứng với cột)."
  },
  274: {
    explanation: "Đáp án C đúng. Bao đóng của tập phụ thuộc hàm F (ký hiệu là F⁺) được định nghĩa là tập hợp tất cả các phụ thuộc hàm có thể được suy dẫn logic từ F bằng cách áp dụng liên tiếp và lặp đi lặp lại các quy tắc trong hệ tiên đề Armstrong (Phản xạ, Gia tăng, Bắc cầu)."
  },
  277: {
    explanation: "Đáp án C đúng. Trong lý thuyết thiết kế cơ sở dữ liệu quan hệ, một 'thuộc tính nguyên tố' (prime attribute / key attribute) được định nghĩa là thuộc tính tham gia vào (là thành phần của) ÍT NHẤT MỘT khóa dự tuyển (candidate key) của quan hệ đó."
  },
  278: {
    explanation: "Đáp án B đúng. Lệnh DROP TABLE trong SQL là một thao tác rất nguy hiểm. Khi thực thi lệnh này, không chỉ cấu trúc của bảng (schema) bị hủy bỏ, mà TOÀN BỘ dữ liệu (các hàng) đang được lưu trữ bên trong bảng đó cũng sẽ bị xóa vĩnh viễn không thể khôi phục."
  },
  279: {
    explanation: "Đáp án C đúng. Để bảo vệ cơ sở dữ liệu một cách toàn diện khỏi các nguy cơ đánh cắp hoặc phá hoại, cần áp dụng đồng bộ các biện pháp: An toàn hệ thống (bảo mật vật lý và hệ điều hành), Cơ chế cấp quyền truy nhập (Authorization do DBA thực hiện), và An toàn mạng."
  },
  280: {
    explanation: "Đáp án B đúng. Theo chuẩn mực thiết kế CSDL phổ biến, mối kết hợp 'Tham gia' (thường là giữa Nhân viên và Dự án, hoặc Sinh viên và Câu lạc bộ) là mối quan hệ Nhiều - Nhiều (n-n). Một nhân viên tham gia nhiều dự án, và một dự án có nhiều nhân viên tham gia."
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

fs.writeFileSync('batch_8.json', JSON.stringify(data, null, 2));
console.log('Batch 8 updated successfully.');
