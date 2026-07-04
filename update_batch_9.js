const fs = require('fs');

let data = JSON.parse(fs.readFileSync('batch_9.json', 'utf8'));

const updates = {
  281: {
    explanation: "Đáp án B đúng. Bao đóng của tập thuộc tính X đối với tập phụ thuộc hàm F, ký hiệu là X⁺, được định nghĩa toán học là tập hợp tất cả các thuộc tính sao cho phụ thuộc hàm X -> Y (hoặc X -> B) có thể được suy dẫn logic từ F."
  },
  283: {
    explanation: "Đáp án C đúng. Bằng cách áp dụng các luật Armstrong: Từ A -> B và C -> X, theo luật gia tăng ta có thể gộp lại thành AC -> BX. Đề bài đã cho BX -> Z. Áp dụng luật bắc cầu giữa AC -> BX và BX -> Z, ta suy luận được phụ thuộc hàm AC -> Z."
  },
  284: {
    explanation: "Đáp án C đúng. Theo định nghĩa của khóa chính, không thể có hai bản ghi (bộ) khác biệt nào mang cùng một giá trị khóa. Nếu có 2 bản ghi trùng giá trị trên tất cả các thuộc tính khóa, thực chất chúng chỉ là một bản ghi, nghĩa là chúng cũng bắt buộc phải trùng nhau trên các thành phần không khóa."
  },
  285: {
    explanation: "Đáp án C đúng. Tính bao đóng để tìm khóa: (T, M)⁺ sẽ bao gồm: T, M. Có T -> Y,D thêm Y, D. Có M -> C,G,N thêm C, G, N. Có TM -> L,I thêm L, I. Vậy (T, M)⁺ chứa toàn bộ thuộc tính (Ω). Do đó, T và M là các thuộc tính khóa và (T, M) là khóa duy nhất."
  },
  286: {
    explanation: "Đáp án A đúng. Theo quy ước chuẩn trong đại số quan hệ, các phép toán một ngôi (Unary operations) như Chọn (σ) và Chiếu (π) luôn có thứ tự ưu tiên thực hiện cao hơn so với các phép toán hai ngôi (Binary operations) như Kết nối (⋈), Hợp (∪), Giao (∩), và Hiệu (-)."
  },
  287: {
    explanation: "Đáp án B đúng. Sinh viên cần thỏa mãn 2 điều kiện: là thành viên CLB (trong MEMBER) VÀ có đăng ký học kỳ '2025_Fall' (trong ENROLL). Ta chiếu lấy SID từ MEMBER và chiếu SID từ ENROLL (đã lọc Fall), rồi dùng phép Giao (∩) để lấy SID thỏa mãn cả hai. Cuối cùng kết nối STUDENT lấy Name."
  },
  288: {
    explanation: "Đáp án A đúng. Để kiểm tra xem thuộc tính A_i ở vế trái có dư thừa hay không, ta tạm bỏ nó đi và tính bao đóng của phần còn lại: (A₁...A_{i-1} A_{i+1}...A_n)⁺. Nếu bao đóng này vẫn chứa B, nghĩa là phần còn lại đã đủ khả năng xác định B mà không cần tới A_i."
  },
  289: {
    explanation: "Đáp án A đúng. Trong Mô hình Thực thể - Liên kết (ERD), một Thực thể (Entity) chuẩn luôn được biểu diễn bằng một Hình chữ nhật có chứa tên của thực thể đó bên trong (ví dụ: NHANVIEN, PHONGBAN)."
  },
  290: {
    explanation: "Đáp án A đúng. Tính bao đóng của {W, B, A}⁺: Ban đầu có {W, B, A}. Dùng WB -> F, ta thêm F (thành {W, B, A, F}). Dùng A -> K, ta thêm K (thành {W, B, A, F, K}). Lúc này tập bao đóng đã chứa toàn bộ 5 thuộc tính của quan hệ, do đó đáp án là {W B F K A} (hoặc có chứa các thuộc tính này)."
  },
  291: {
    explanation: "Đáp án D đúng. Một trong những tính chất quan trọng nhất khi áp dụng thuật toán phân rã (hoặc tổng hợp) một quan hệ về Dạng chuẩn 3 (3NF) là nó luôn đảm bảo được tính 'Bảo toàn phụ thuộc' (Dependency Preservation) và đồng thời 'Không tổn thất thông tin' (Lossless Join)."
  },
  293: {
    explanation: "Đáp án A đúng. Khái niệm 'phụ thuộc dư thừa' bao hàm nhiều trường hợp: có thể là toàn bộ một phụ thuộc hàm bị dư thừa (suy diễn được từ F), hoặc chỉ dư thừa ở bên trong bản thân nó, tức là phụ thuộc hàm có vế trái dư thừa (có chứa thuộc tính không cần thiết)."
  },
  294: {
    explanation: "Đáp án A đúng. Mô hình Thực thể - Liên kết (ER Model) cơ bản nhất được cấu thành từ 3 thành phần cốt lõi: (1) Thực thể (Entity) - các đối tượng; (2) Thuộc tính (Attribute) - đặc điểm của thực thể; và (3) Mối quan hệ (Relationship) - sự liên kết giữa các thực thể."
  },
  296: {
    correctAnswer: 1,
    explanation: "Đáp án B đúng. Các thuộc tính không xuất hiện ở vế phải của F là A và C, nên A và C phải nằm trong mọi khóa ứng viên. Tính (AC)⁺: Dùng A -> B thêm B. Dùng BC -> D thêm D. Dùng D -> E thêm E. Vì (AC)⁺ chứa tất cả thuộc tính, AC chính là khóa."
  },
  297: {
    explanation: "Đáp án D đúng. Trong SQL chuẩn, SUM, COUNT, MAX, MIN, AVG là các hàm tổng hợp (aggregate functions) hợp lệ. COMPUTE không phải là hàm tổng hợp chuẩn."
  },
  298: {
    explanation: "Đáp án D đúng (nếu câu hỏi là 'được suy diễn'). Thực chất, phụ thuộc hàm VZ -> V là một phụ thuộc hàm hiển nhiên (trivial FD) luôn đúng theo quy tắc phản xạ của Armstrong (V là tập con của VZ), nên nó chắc chắn được suy diễn từ F. Các phương án khác đều sai hoàn toàn."
  },
  299: {
    explanation: "Đáp án B đúng. Để tìm các môn thuộc CS hoặc SE mà KHÔNG đăng ký Fall: Ta lấy tập hợp tất cả các môn thuộc CS hoặc SE. Sau đó, lấy tập hợp các môn thuộc CS/SE CÓ đăng ký Fall (dùng kết nối và chọn). Cuối cùng, dùng phép Hiệu (-) lấy tập 1 trừ đi tập 2."
  },
  301: {
    explanation: "Đáp án D đúng. Mục tiêu của các quy tắc chuẩn hóa nhằm loại bỏ dư thừa, từ đó duy trì tính nhất quán và toàn vẹn của dữ liệu, giúp cơ sở dữ liệu tránh được các dị thường thông tin (anomalies) khi thêm, xóa, sửa."
  },
  302: {
    explanation: "Đáp án D đúng. Thuộc tính đa trị Education tách thành bảng AUTHOR_EDUCATION. Quan hệ N-N WRITES tạo bảng riêng với PK(AuthorID, BookID). Thuộc tính đa trị Contribution trên WRITES cũng phải tách thành bảng riêng CONTRIBUTION, lấy PK của WRITES làm FK, và Role tham gia vào khóa chính."
  },
  304: {
    explanation: "Đáp án A đúng. Ngôn ngữ thao tác dữ liệu (DML) cung cấp tập hợp các phép toán cho phép người dùng thao tác trực tiếp trên dữ liệu: bao gồm việc truy vấn (tìm kiếm) và thay đổi dữ liệu (chèn thêm, sửa đổi, xóa bỏ)."
  },
  306: {
    explanation: "Đáp án C đúng. Trong mô hình Thực thể - Liên kết (ER Model), sự liên kết, tương tác hoặc kết hợp giữa hai hay nhiều thực thể với nhau được gọi là 'mối quan hệ' (Relationship)."
  },
  307: {
    explanation: "Đáp án D đúng. Trong SQL, toán tử LIKE kết hợp với ký tự gạch dưới '_' dùng để đại diện cho đúng MỘT ký tự bất kỳ. Vậy 'H_' sẽ khớp với các chuỗi có đúng 2 ký tự và bắt đầu bằng chữ H."
  },
  308: {
    explanation: "Đáp án A đúng. Để đếm tổng số lượng thuê bao thỏa mãn một điều kiện, ta sử dụng hàm tập hợp COUNT(*). Đi kèm với mệnh đề WHERE để lọc ra những khách hàng có địa chỉ (DC) là “Đường Nguyễn Trãi”."
  },
  310: {
    explanation: "Đáp án B đúng. Để tìm các bộ của R không có giá trị B khớp với S (Anti-Join), ta lấy toàn bộ R trừ đi (-) những bộ của R CÓ khớp với S. Các bộ khớp chính là kết quả của phép kết nối tự nhiên R ⋈ S."
  },
  311: {
    explanation: "Đáp án A đúng. Mục tiêu cốt lõi của chuẩn hóa CSDL (Normalization) là tổ chức lại các bảng nhằm loại bỏ sự dư thừa thông tin, qua đó triệt tiêu đến mức cao nhất khả năng xuất hiện dị thường dữ liệu (anomalies) khi thêm, sửa, xóa."
  },
  312: {
    explanation: "Đáp án B đúng. Bao đóng của tập thuộc tính X đối với tập F (ký hiệu X⁺) là tập hợp tất cả các thuộc tính B sao cho phụ thuộc hàm X -> B có thể được suy dẫn logic từ F (tức là X -> B thuộc F⁺)."
  },
  313: {
    explanation: "Đáp án B đúng. Tính bao đóng để tìm khóa: (AB)⁺ = {A,B,C} nên AB là siêu khóa. Vì không thể bỏ A hay B (A⁺={A}, B⁺={B}) nên AB là khóa ứng viên. (BC cũng là khóa, nhưng trong các lựa chọn thì AB đúng)."
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

fs.writeFileSync('batch_9.json', JSON.stringify(data, null, 2));
console.log('Batch 9 updated successfully.');
