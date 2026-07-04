const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_10.json', 'utf8'));

const updates = {
  316: {
    explanation: "Đáp án D đúng. Mặc dù CHARACTER có tồn tại trong tiêu chuẩn ANSI SQL (thường được viết tắt là CHAR), nhưng trong nhiều Hệ quản trị cơ sở dữ liệu phổ biến (như SQL Server, MS Access), người ta hay dùng VARCHAR, NVARCHAR hoặc TEXT thay vì chữ CHARACTER. Các kiểu FLOAT, NUMERIC, DECIMAL được hỗ trợ chuẩn xác."
  },
  318: {
    explanation: "Đáp án D đúng. Trong trường hợp lý tưởng (mặc định thuộc tính W trong bảng A là khóa chính và không có giá trị trùng lặp), thì câu P (sử dụng INNER JOIN) và câu T (sử dụng truy vấn con IN) sẽ trả về tập kết quả N hoàn toàn giống nhau. (Nếu W trùng lặp, P có thể trả về bản ghi nhân bản)."
  },
  320: {
    explanation: "Đáp án D đúng. Trong tập F đã cho, ta có phụ thuộc hàm A -> B và B -> C. Theo luật bắc cầu của hệ tiên đề Armstrong, ta hoàn toàn có thể suy luận ra A -> C. Do đó, việc tồn tại sẵn phụ thuộc hàm A -> C ở trong tập F là dư thừa và có thể bị loại bỏ."
  },
  321: {
    explanation: "Đáp án B đúng. Để đếm số lượng các giá trị (số lượng bản ghi/hàng) tồn tại trong một cột, ta sử dụng hàm tập hợp COUNT. Hàm SUM dùng để tính tổng các giá trị số, không dùng để đếm số lượng."
  },
  322: {
    explanation: "Đáp án A đúng. Phép hợp (Union) của hai quan hệ khả hợp sẽ tạo ra một quan hệ mới. Tập hợp các bộ kết quả chính là tất cả 'Các bộ của các quan hệ nguồn' (có mặt ở bảng này hoặc bảng kia). Đồng thời, nó tự động loại bỏ đi các bộ trùng lặp, chỉ giữ lại những bộ đại diện duy nhất."
  },
  323: {
    explanation: "Đáp án A đúng. Dựa vào luật bắc cầu (Transitivity Rule) trong hệ tiên đề Armstrong, nếu thuộc tính A xác định thuộc tính B (A -> B) và thuộc tính B xác định thuộc tính C (B -> C), thì ta có thể chắc chắn suy ra được phụ thuộc hàm A -> C."
  },
  324: {
    explanation: "Đáp án A đúng. Từ A -> B, áp dụng luật gia tăng ta thêm C vào hai vế thu được AC -> BC. Áp dụng luật bắc cầu giữa AC -> BC và BC -> D, ta có AC -> D. Tiếp tục bắc cầu giữa AC -> D và D -> E, ta cuối cùng suy ra được phụ thuộc hàm AC -> E."
  },
  327: {
    explanation: "Đáp án A đúng. Phụ thuộc hàm AB -> A là một phụ thuộc hiển nhiên (trivial) và luôn luôn đúng theo luật phản xạ của Armstrong, bởi vì vế phải (A) là tập con của vế trái (AB). Do đó, nó chắc chắn có thể được suy ra (hoặc tự nó đã đúng) mà không cần F."
  },
  328: {
    explanation: "Đáp án C đúng. Lệnh DELETE trong SQL được dùng để xóa dữ liệu. Nếu bạn thực thi lệnh DELETE FROM TenBang mà quên không đi kèm mệnh đề WHERE, hệ quản trị cơ sở dữ liệu sẽ tiến hành xóa TẤT CẢ các mẩu tin hiện có trong bảng. Cấu trúc bảng vẫn được giữ nguyên."
  },
  329: {
    explanation: "Đáp án C đúng. Để tìm sinh viên đăng ký môn 'Database' nhưng KHÔNG đăng ký môn 'AI': Ta chiếu lấy tập SID đã đăng ký 'Database'. Sau đó, chiếu lấy tập SID đã đăng ký 'AI'. Áp dụng phép Hiệu (-) để lọc danh sách. Cuối cùng, kết nối với bảng STUDENT và chiếu lấy Name."
  },
  333: {
    explanation: "Đáp án A đúng. Để lấy danh sách sinh viên (mã SID) đăng ký các môn học thuộc khoa 'CS', ta cần phải kết nối bảng ENROLL và bảng COURSE. Sau đó, dùng phép chọn (σ) với điều kiện Dept='CS' để lọc ra các dòng phù hợp, và cuối cùng chiếu (π) để lấy cột SID."
  },
  334: {
    explanation: "Đáp án C đúng. Quá trình tối ưu hóa các câu lệnh truy vấn thực chất là hệ thống phân tích và biến đổi biểu thức đại số quan hệ ban đầu thành các biểu thức tương đương, nhằm tìm ra kế hoạch thực thi có chi phí về thời gian (CPU, I/O) và bộ nhớ sử dụng là thấp nhất."
  },
  335: {
    explanation: "Đáp án A đúng. Theo quy tắc chuyển đổi mô hình ER sang mô hình quan hệ, đối với một mối kết hợp N-N, ta phải tạo một bảng trung gian mới. Khóa chính của bảng này thường là tổ hợp khóa ngoại của hai bảng (FK1, FK2), và các thuộc tính mô tả sẽ được thêm vào làm các cột."
  },
  336: {
    correctAnswer: 0,
    explanation: "Đáp án A đúng. Trong hệ tiên đề Armstrong, luật gia tăng (Augmentation Rule) được phát biểu là: Nếu X -> Y, thì ta có thể thêm (mở rộng) cùng tập thuộc tính Z vào cả hai vế để được XZ -> YZ. Tức là mở rộng vế trái hoặc cả hai vế cùng một thuộc tính."
  },
  338: {
    explanation: "Đáp án C đúng. Trong SQL, để xóa hoàn toàn cấu trúc của một đối tượng như bảng, khung nhìn, hoặc loại bỏ các ràng buộc mối quan hệ (foreign key constraints), lệnh chuẩn được sử dụng luôn là DROP (ví dụ: DROP TABLE, ALTER TABLE DROP CONSTRAINT)."
  },
  341: {
    explanation: "Đáp án B đúng. Khi chuyển đổi mô hình ER: 'Học Viên' và 'Môn Học' trở thành hai bảng với khóa chính tương ứng. Mối quan hệ N-N 'Ghi danh' biến thành bảng trung gian ('Phiếu Ghi Danh') chứa khóa ngoại từ hai bảng kia hợp thành khóa chính, và chứa các thuộc tính riêng (Ngày nhập học)."
  },
  342: {
    explanation: "Đáp án A đúng. Ràng buộc toàn vẹn dữ liệu trong cơ sở dữ liệu là tập hợp các quy tắc, điều kiện và quy định được đặt ra nhằm đảm bảo tính chính xác, hợp lệ, nhất quán và sự liên quan logic giữa các dữ liệu khi người dùng thực hiện thao tác thêm, xóa hoặc sửa."
  },
  343: {
    explanation: "Đáp án A đúng. Bằng cách áp dụng luật bắc cầu, từ A -> B và B -> C ta suy ra được A -> C. Từ A -> C, dùng luật gia tăng thêm B phân rã thu được AB -> C. Các phụ thuộc này đều suy ra được. Chỉ có C -> A là phụ thuộc ngược, không có cơ sở logic nào để suy diễn."
  },
  344: {
    explanation: "Đáp án B đúng. Câu truy vấn này mắc lỗi cú pháp SQL nghiêm trọng. Mệnh đề HAVING được dùng để lọc điều kiện cho CÁC NHÓM sau khi đã GROUP BY, và điều kiện trong HAVING bắt buộc phải là một hàm tập hợp (như AVG, SUM) hoặc là cột nằm trong GROUP BY. Dùng HAVING Diem > 70 sẽ gây lỗi."
  },
  347: {
    explanation: "Đáp án B đúng. Tìm khóa: (ACD)⁺ chứa tất cả nên ACD là khóa. (CE)⁺ chứa tất cả nên CE cũng là khóa. Kiểm tra tất cả các phụ thuộc hàm trong F: Vế trái của cả hai (ACD và CE) đều là siêu khóa. Vì mọi phụ thuộc hàm đều có vế trái là siêu khóa, quan hệ đạt BCNF."
  },
  350: {
    explanation: "Đáp án C đúng. Dựa vào quy tắc phân rã (Decomposition Rule) từ hệ tiên đề Armstrong: Nếu một tập thuộc tính (A) xác định một tập thuộc tính khác (BC), thì nó cũng xác định từng thuộc tính riêng lẻ bên trong tập đó. Do vậy, từ A -> BC ta chắc chắn suy ra được A -> B và A -> C."
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

fs.writeFileSync('batch_10.json', JSON.stringify(data, null, 2));
console.log('Batch 10 updated successfully.');
