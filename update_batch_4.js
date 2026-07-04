const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_4.json', 'utf8'));

const updates = {
  107: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Khẳng định 'Không tồn tại phụ thuộc hàm X -> Y (với Y không thuộc X) mà bao đóng của X không chứa toàn bộ thuộc tính (X⁺ ≠ Ω, tức X không phải siêu khóa)' chính là định nghĩa chuẩn của Dạng chuẩn Boyce-Codd (BCNF). BCNF là một dạng chặt chẽ hơn của 3NF (mọi quan hệ đạt BCNF đều mặc nhiên đạt 3NF)."
  },
  109: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Các thuộc tính không xuất hiện ở vế phải là E, nên E phải nằm trong mọi khóa. Khóa ứng viên là AE và CE (ví AE⁺ = {A,B,C,D,E}). Các thuộc tính khóa là A, C, E; thuộc tính không khóa là B, D. Phụ thuộc hàm A -> B có vế trái là một phần của khóa AE, còn vế phải B là không khóa. Đây là phụ thuộc bộ phận, vi phạm 2NF. Nên chỉ đạt 1NF."
  },
  116: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Nếu NK -> ME thì bao đóng (NK)⁺ chứa toàn bộ thuộc tính của quan hệ H. Do đó, NK là một siêu khóa và có thể làm khóa chính. Theo định nghĩa của khóa, sẽ không thể tồn tại hai bộ (dòng) dữ liệu khác nhau mà lại có cùng giá trị trên cặp thuộc tính N và K. Nên tất cả các phương án đều đúng."
  },
  117: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Theo kiến trúc 3 lược đồ ANSI-SPARC: (1) Mô hình ngoài (External Level) có nhiều khung nhìn khác nhau cho từng nhóm người dùng. (2) Mô hình quan niệm / khái niệm (Conceptual Level) là sự biểu diễn logic, thống nhất và duy nhất của toàn bộ cấu trúc cơ sở dữ liệu. (3) Mô hình trong (Internal Level) quy định cách lưu trữ vật lý."
  },
  118: {
    correctAnswer: 3,
    explanation: "Đáp án D đúng. Đây là định nghĩa của Dạng chuẩn 2 (2NF). Một quan hệ đạt 2NF nếu nó đã đạt 1NF và KHÔNG tồn tại phụ thuộc hàm mà vế trái là một tập con thực sự của khóa chính, còn vế phải là một 'thuộc tính không khóa' (tức là không có phụ thuộc bộ phận của thuộc tính không khóa vào khóa)."
  },
  119: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Để cấp quyền 'ghi và đọc' (bao gồm chèn - INSERT, xóa - DELETE, sửa đổi - UPDATE, và đọc - SELECT) cho người dùng hoặc nhóm người dùng, ta sử dụng lệnh GRANT ALL PRIVILEGES. (Lệnh GRANT SELECT chỉ cấp quyền đọc, không cho phép thay đổi dữ liệu)."
  },
  124: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Thuộc tính 'mang ý nghĩa quyết định' (hay khóa) là thuộc tính có thể xác định được tất cả các thuộc tính còn lại. Từ phụ thuộc hàm A -> B và B -> C, theo luật bắc cầu ta suy ra A -> C. Vậy bao đóng A⁺ = {A, B, C}, nghĩa là A quyết định toàn bộ quan hệ."
  },
  125: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Một trong những mục tiêu quan trọng nhất của các Hệ quản trị Cơ sở dữ liệu (DBMS) là đảm bảo tính độc lập dữ liệu (Data Independence) - hay tính 'bất biến' của chương trình ứng dụng. Khi ta thay đổi cấu trúc lưu trữ vật lý bên dưới, các chương trình ứng dụng bên trên không cần phải viết lại."
  },
  127: {
    explanation: "Đáp án D đúng. Các dạng chuẩn được định nghĩa theo cấp bậc bao hàm nhau: BCNF ⊂ 3NF ⊂ 2NF ⊂ 1NF. Do đó, nếu một lược đồ quan hệ đã đạt Dạng chuẩn Boyce-Codd (BCNF), thì về mặt toán học, nó chắc chắn đã thỏa mãn các điều kiện để đạt Dạng chuẩn 3 (3NF) và dĩ nhiên là đạt BCNF."
  },
  129: {
    explanation: "Đáp án D đúng. Từ HI -> D và D -> P, bằng luật bắc cầu ta chỉ có thể suy ra HI -> P. Để suy ra được H -> P, ta cần phải có thêm phụ thuộc hàm H -> I. Do không có đủ dữ kiện, H -> P là một phụ thuộc hàm sai và không có luật nào có thể suy diễn ra nó."
  },
  135: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Trong mô hình ERD, thực thể yếu (weak entity) là thực thể KHÔNG CÓ đủ thuộc tính để tạo thành một khóa chính duy nhất (không có thuộc tính khóa riêng). Nó phải phụ thuộc vào một thực thể mạnh khác thông qua mối quan hệ định danh (identifying relationship) để tồn tại."
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

fs.writeFileSync('batch_4.json', JSON.stringify(data, null, 2));
console.log('Batch 4 updated successfully.');
