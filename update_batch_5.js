const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_5.json', 'utf8'));

const updates = {
  143: {
    explanation: "Đáp án B đúng (Tất cả các phương án). Để tìm giá trị lớn nhất, SQL cung cấp nhiều cách viết tương đương: (1) Sắp xếp giảm dần và lấy TOP 1 WITH TIES (lấy cả những người đồng hạng nhất). (2) Dùng truy vấn con với toán tử = MAX(Diem). (3) Dùng truy vấn con với toán tử >= ALL (lớn hơn hoặc bằng mọi điểm số khác)."
  },
  146: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Ta có khóa chính là A (vì A -> B và B -> C thì A -> ABC). Ta thấy phụ thuộc hàm B -> C là phụ thuộc bắc cầu (vì C phụ thuộc vào B, mà B phụ thuộc vào khóa A; trong đó B không phải siêu khóa). Phụ thuộc bắc cầu làm quan hệ vi phạm Dạng chuẩn 3 (3NF). Lỗi trực tiếp và cơ bản nhất ở mức thấp là vi phạm 3NF."
  },
  147: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Ta thấy B không xuất hiện ở vế phải của bất kỳ phụ thuộc hàm nào, nên B bắt buộc phải nằm trong mọi khóa ứng viên. Thử tính bao đóng của AB: (AB)⁺ = {A, B}. Dùng AB -> C thêm C. Dùng C -> D thêm D. (AB)⁺ = {A, B, C, D}. Do bao đóng của AB chứa mọi thuộc tính và tối thiểu, nên AB là khóa."
  },
  148: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Có 3 thực thể: Nhân viên, Cửa hàng, Sản phẩm. Có 3 mối quan hệ: (1) 'Làm việc tại' giữa Nhân viên và Cửa hàng là 1-N (một cửa hàng nhiều nhân viên). (2) 'Phụ trách bán' giữa Nhân viên và Sản phẩm là M-N. (3) 'Quản lý' giữa Nhân viên với Nhân viên thường được thiết kế là 1-N. Vậy có 3 thực thể, 1 liên kết M-N, 2 liên kết 1-N."
  },
  155: {
    explanation: "Đáp án B đúng. Việc thiết kế và tổ chức cơ sở dữ liệu (lựa chọn mô hình, thiết lập cấu trúc lưu trữ, đánh chỉ mục) được quyết định chủ yếu dựa trên nhu cầu 'truy xuất và khai thác' thông tin thực tế của tổ chức để đảm bảo hiệu năng và tính hữu dụng tối đa."
  },
  161: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Trong mô hình cơ sở dữ liệu mạng (Network Model), dữ liệu được biểu diễn dưới dạng các bản ghi và các mối nối liên kết (links) giữa chúng. Khác với cấu trúc cây của mô hình phân cấp, các liên kết trong mô hình mạng tạo thành một cấu trúc đồ thị có hướng, cho phép một nút con có nhiều nút cha."
  },
  162: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Theo quy tắc phản xạ (Reflexivity Rule) của hệ tiên đề Armstrong: Nếu Y là một tập con của X (hay nói cách khác, vế phải Y được chứa trong vế trái X), thì ta luôn có phụ thuộc hàm X -> Y. Đây là một phụ thuộc hàm hiển nhiên."
  },
  165: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Một thuộc tính (attribute) trong cơ sở dữ liệu quan hệ được đặc tả đầy đủ bởi các yếu tố: Tên gọi của thuộc tính, Kiểu dữ liệu (số, chuỗi, ngày tháng...), và Miền giá trị (domain - tập các giá trị hợp lệ mà thuộc tính đó có thể nhận)."
  },
  166: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Áp dụng các luật của Armstrong: Từ B -> A, ta dùng luật gia tăng thêm C vào hai vế để được BC -> AC. Đề bài đã cho AC -> D, kết hợp bằng luật bắc cầu ta có BC -> D. Cuối cùng, kết hợp với D -> E bằng luật bắc cầu, ta suy ra được BC -> E."
  },
  167: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Trong mô hình cơ sở dữ liệu mạng, nhờ khả năng một bản ghi con có thể có nhiều bản ghi cha (thông qua liên kết đồ thị), dữ liệu được chia sẻ và dùng chung tốt hơn mô hình phân cấp. Việc này giúp hạn chế tối đa sự dư thừa dữ liệu, do đó khi thực hiện phép sửa đổi, hệ thống không làm xuất hiện mâu thuẫn dữ liệu."
  },
  168: {
    explanation: "Đáp án C đúng. Để thực hiện truy vấn này: Đầu tiên ta cần kết nối tự nhiên bảng COURSE và ENROLL (để lấy Title và Grade). Sau đó áp dụng phép chọn (σ) với điều kiện Grade='A' HOẶC Grade='B'. Cuối cùng, thực hiện phép chiếu (π) lấy cột Title. Không thể chiếu Title trước vì sẽ làm mất cột Grade cần cho mệnh đề điều kiện."
  },
  169: {
    explanation: "Đáp án D đúng. Đúng như tên gọi của nó, Mô hình Thực thể - Liên kết (Entity-Relationship Model - ERM) cung cấp các khái niệm và ký hiệu trực quan (ERD) cho phép người thiết kế mô tả chi tiết 'Các thực thể' (đối tượng) và 'Mối quan hệ' (liên kết) giữa chúng."
  },
  170: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Trong tập F có phụ thuộc hàm A -> BC. Theo luật phân rã (Decomposition Rule), từ A -> BC ta có thể suy ra A -> B và A -> C. Vì A -> B có thể được suy ra từ một phụ thuộc hàm khác đã có sẵn trong tập F, nên việc liệt kê A -> B độc lập là dư thừa."
  },
  171: {
    correctAnswer: 2,
    explanation: "Đáp án C đúng. Một mô hình dữ liệu (Data Model) hoàn chỉnh luôn được định nghĩa bởi 3 thành phần cơ bản: (1) Cấu trúc dữ liệu (hệ thống ký hiệu, cách tổ chức). (2) Các ràng buộc toàn vẹn. (3) Tập hợp các 'Phép toán thao tác' (Operations) để truy xuất và xử lý dữ liệu dựa trên cấu trúc đó."
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

fs.writeFileSync('batch_5.json', JSON.stringify(data, null, 2));
console.log('Batch 5 updated successfully.');
