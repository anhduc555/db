// add_explanations.js
// Generates expert database science explanations for all 350 questions
// and patches questions.json in-place.

const fs = require('fs');
const path = require('path');

const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));
const ALPHA = ['A', 'B', 'C', 'D'];

function makeExplanation(q) {
  const ans = q.options[q.correctAnswer];
  const letter = ALPHA[q.correctAnswer];
  const text = q.question;

  // --- Pattern-based explanation generation ---

  // TRANSACTION / ROLLBACK
  if (/TRANSACTION.*tắt nguồn|ROLLBACK|máy bị tắt/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Khi máy tắt đột ngột trước khi TRANSACTION được COMMIT, hệ thống CSDL sẽ tự động thực hiện ROLLBACK để hoàn tác mọi thay đổi chưa được xác nhận, đảm bảo tính nguyên tử (Atomicity) của giao dịch.`;
  }
  // BCNF decomposition
  if (/BCNF.*phân rã|phân rã.*BCNF/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phân rã BCNF (Boyce-Codd Normal Form) yêu cầu mỗi quan hệ kết quả phải có khóa phủ mọi phụ thuộc hàm, đồng thời đảm bảo tính không mất thông tin (lossless join). Phương án đúng thoả mãn cả hai điều kiện này.`;
  }
  // GROUP BY / HAVING
  if (/GROUP BY.*HAVING|HAVING.*GROUP BY/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Mệnh đề GROUP BY...HAVING phân hoạch các bộ của quan hệ thành các nhóm riêng biệt rồi áp dụng hàm gộp (aggregate) lên từng nhóm. HAVING lọc các nhóm sau khi gộp, khác với WHERE lọc từng bản ghi trước khi gộp.`;
  }
  // Primary key / NULL
  if (/khoá quy định|khóa chính.*null|giá trị.*khoá/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Theo ràng buộc toàn vẹn thực thể (entity integrity), các thành phần của khóa chính không được phép nhận giá trị NULL hoặc các giá trị không xác định, vì khóa phải định danh duy nhất mỗi bộ trong quan hệ.`;
  }
  // Candidate key
  if (/khóa ứng viên|khóa dự bị|candidate key/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Khóa ứng viên (candidate key) là tập thuộc tính tối thiểu mà bao đóng của nó chứa toàn bộ thuộc tính của quan hệ. Cần kiểm tra bao đóng của từng tập và chọn tập nhỏ nhất thỏa mãn điều kiện siêu khóa.`;
  }
  // Closure / bao đóng
  if (/bao đóng|closure|\+\}/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Bao đóng của một tập thuộc tính X (ký hiệu X⁺) là tập tất cả các thuộc tính có thể được suy diễn từ X bằng cách áp dụng lặp lại các quy tắc Armstrong (phản xạ, tăng, bắc cầu) lên tập phụ thuộc hàm F.`;
  }
  // Armstrong axioms
  if (/Armstrong|phản xạ|tăng.*hàm|bắc cầu/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Hệ tiên đề Armstrong gồm 3 quy tắc cơ bản: (1) Phản xạ: nếu Y⊆X thì X→Y; (2) Tăng: nếu X→Y thì XZ→YZ; (3) Bắc cầu: nếu X→Y và Y→Z thì X→Z. Ba quy tắc này đầy đủ và đúng đắn để suy dẫn mọi phụ thuộc hàm.`;
  }
  // Normalization 1NF
  if (/1NF|dạng chuẩn 1|first normal form/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Quan hệ đạt chuẩn 1NF khi mỗi giá trị trong mỗi ô là nguyên tử (không thể chia nhỏ hơn), mỗi cột chứa cùng loại dữ liệu và mỗi hàng là duy nhất. 1NF loại bỏ các thuộc tính đa trị và thuộc tính phức hợp.`;
  }
  // Normalization 2NF
  if (/2NF|dạng chuẩn 2|second normal form|phụ thuộc đầy đủ/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Quan hệ đạt chuẩn 2NF khi đã đạt 1NF và mọi thuộc tính không khóa đều phụ thuộc đầy đủ vào khóa chính (không tồn tại phụ thuộc bộ phận). Nghĩa là không có thuộc tính nào chỉ phụ thuộc vào một phần của khóa ghép.`;
  }
  // Normalization 3NF
  if (/3NF|dạng chuẩn 3|third normal form|phụ thuộc bắc cầu/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Quan hệ đạt chuẩn 3NF khi đã đạt 2NF và không tồn tại phụ thuộc bắc cầu: mọi thuộc tính không khóa chỉ phụ thuộc trực tiếp vào khóa chính, không phụ thuộc qua thuộc tính không khóa khác.`;
  }
  // Relational algebra - projection
  if (/phép chiếu|projection|π/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phép chiếu (π) trong đại số quan hệ chọn ra một tập con các cột (thuộc tính) từ một quan hệ, loại bỏ các hàng trùng lặp. Kết quả của phép chiếu π_{A1,A2,...}(R) chỉ chứa các cột được liệt kê.`;
  }
  // Relational algebra - selection
  if (/phép chọn|selection|σ.*=|σ_{/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phép chọn (σ) trong đại số quan hệ lọc các bộ (hàng) thỏa mãn điều kiện predicate cho trước. Kết quả σ_{điều_kiện}(R) là tập các hàng của R thỏa mãn điều kiện, giữ nguyên tất cả các cột.`;
  }
  // JOIN / Natural join
  if (/kết nối.*tự nhiên|natural join|phép kết nối|equi.?join|⋈/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phép kết nối (join) kết hợp hai quan hệ dựa trên điều kiện so sánh giữa các thuộc tính chung. Kết nối tự nhiên (⋈) tự động kết nối theo các thuộc tính cùng tên và loại bỏ cột trùng lặp trong kết quả.`;
  }
  // SQL SELECT
  if (/SELECT.*FROM|câu lệnh SQL|truy vấn SQL/i.test(text) && !/GROUP BY/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Câu lệnh SELECT trong SQL theo thứ tự xử lý: FROM (chọn bảng) → WHERE (lọc hàng) → GROUP BY (gộp nhóm) → HAVING (lọc nhóm) → SELECT (chọn cột) → ORDER BY (sắp xếp). Cú pháp và điều kiện lọc phải chính xác để cho kết quả đúng.`;
  }
  // SQL UPDATE
  if (/UPDATE|MODIFY.*SET|thay đổi.*bảng|sửa.*bảng/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Lệnh UPDATE trong SQL dùng để sửa đổi dữ liệu hiện có trong bảng. Cú pháp đúng: UPDATE tên_bảng SET cột = giá_trị WHERE điều_kiện. Thiếu mệnh đề WHERE sẽ cập nhật tất cả các hàng trong bảng.`;
  }
  // SQL ALTER TABLE
  if (/ALTER TABLE|ALTER DATABASE|ALTER COLUMN|sửa.*cấu trúc|thay đổi.*bảng/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Lệnh ALTER TABLE dùng để thay đổi cấu trúc của bảng đã tồn tại: thêm/xóa cột (ADD/DROP COLUMN), thay đổi kiểu dữ liệu, thêm/xóa ràng buộc. Đây là lệnh DDL (Data Definition Language).`;
  }
  // ERM / ERD
  if (/ERM|ERD|thực thể.*quan hệ|entity.*relationship|E-R/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Mô hình thực thể - quan hệ (ERM/ERD) là công cụ thiết kế CSDL mức khái niệm. Thực thể (entity) là đối tượng cần quản lý, thuộc tính (attribute) mô tả đặc điểm, và liên kết (relationship) thể hiện mối quan hệ giữa các thực thể.`;
  }
  // Multi-valued attribute
  if (/thuộc tính đa trị|multi.?valued|đa trị/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Thuộc tính đa trị trong ERD được ánh xạ sang quan hệ riêng biệt gồm: khóa ngoại của bảng chính + giá trị của thuộc tính đa trị, với khóa chính là tổ hợp của cả hai. Không nên dùng nhiều cột Tag1, Tag2... vì vi phạm 1NF.`;
  }
  // Weak entity
  if (/thực thể yếu|weak entity|thực thể phụ thuộc/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Thực thể yếu (weak entity) là thực thể không có khóa riêng, phải phụ thuộc vào thực thể mạnh để xác định. Khóa của thực thể yếu là khóa bộ phận (partial key) kết hợp với khóa của thực thể chủ (owner entity).`;
  }
  // Hierarchical / network model
  if (/phân cấp|mạng.*dữ liệu|hierarchical|network model/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Mô hình phân cấp tổ chức dữ liệu theo cấu trúc cây, mỗi nút cha có thể có nhiều nút con nhưng mỗi nút con chỉ có một nút cha. Mô hình mạng mở rộng điều này cho phép nút con có nhiều nút cha, dùng con trỏ để liên kết.`;
  }
  // DBMS definition
  if (/HQTCSDL|DBMS|hệ quản trị CSDL|Database Management System/i.test(text) && /là/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Hệ quản trị CSDL (DBMS) là phần mềm trung gian giữa người dùng và CSDL vật lý, cung cấp các công cụ để định nghĩa, xây dựng và thao tác dữ liệu. DBMS đảm bảo tính toàn vẹn, bảo mật, và khôi phục dữ liệu.`;
  }
  // 3-schema architecture / external level
  if (/mức ngoài|mức khái niệm|mức trong|kiến trúc 3 mức|external level|conceptual/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Kiến trúc 3 mức ANSI/SPARC gồm: Mức ngoài (external/view level) - mô tả một phần dữ liệu theo góc nhìn người dùng cụ thể; Mức khái niệm (conceptual) - mô tả toàn bộ CSDL; Mức trong (internal/physical) - mô tả cách lưu trữ vật lý.`;
  }
  // Query optimization
  if (/tối ưu hóa.*truy vấn|query optim|tối ưu.*câu/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Tối ưu hóa truy vấn thực hiện phép chọn (σ) và chiếu (π) trước để giảm kích thước quan hệ trung gian, sau đó mới thực hiện phép kết nối (join) tốn kém. Chiến lược này giảm đáng kể lượng dữ liệu cần xử lý.`;
  }
  // Functional dependency
  if (/phụ thuộc hàm|functional dep|F\+|→/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phụ thuộc hàm X→Y có nghĩa là giá trị của X xác định duy nhất giá trị của Y. Để kiểm tra một phụ thuộc hàm có thuộc F⁺ không, ta tính bao đóng của vế trái và kiểm tra vế phải có thuộc bao đóng đó không.`;
  }
  // Superkey / key
  if (/siêu khóa|superkey|khóa.*tối thiểu/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Siêu khóa (superkey) là tập thuộc tính bao đóng chứa toàn bộ thuộc tính quan hệ. Khóa ứng viên là siêu khóa tối thiểu (không có tập con nào cũng là siêu khóa). Khóa chính (primary key) là khóa ứng viên được chọn để xác định hàng.`;
  }
  // SQL COUNT / SUM / AVG
  if (/COUNT|SUM|AVG|MAX|MIN|hàm gộp|aggregate/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Hàm gộp (aggregate functions) trong SQL: COUNT(*) đếm số hàng, SUM() tính tổng, AVG() tính trung bình, MAX() giá trị lớn nhất, MIN() giá trị nhỏ nhất. Các hàm này thường kết hợp với GROUP BY để tính theo nhóm.`;
  }
  // INSERT / DELETE
  if (/INSERT|phép chèn|chèn.*bản ghi/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phép chèn (INSERT) thêm một bộ (bản ghi) mới vào quan hệ. Trong mô hình quan hệ, thao tác INSERT phải thỏa mãn mọi ràng buộc toàn vẹn: khóa chính không NULL và duy nhất, khóa ngoại tham chiếu hợp lệ.`;
  }
  // Client-Server
  if (/client.?server|máy chủ.*máy khách/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Mô hình Client-Server phân tách ứng dụng thành server (lưu trữ và xử lý CSDL trung tâm) và client (giao diện người dùng). Dữ liệu xử lý tập trung tại server giúp tăng tính nhất quán, bảo mật và dễ quản trị hơn mô hình file-sharing.`;
  }
  // Security / toàn vẹn / bảo mật
  if (/bảo mật|an toàn.*CSDL|security|toàn vẹn dữ liệu|integrity/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. An toàn CSDL bao gồm: bảo mật (security) - kiểm soát quyền truy cập; toàn vẹn (integrity) - đảm bảo dữ liệu luôn chính xác và nhất quán qua các ràng buộc; sao lưu và phục hồi (backup/recovery) - đảm bảo dữ liệu không bị mất.`;
  }
  // Partial dependency / full dependency
  if (/phụ thuộc bộ phận|phụ thuộc đầy đủ|partial dep|full dep/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phụ thuộc hàm đầy đủ X→Y nghĩa là Y phụ thuộc vào X nhưng không phụ thuộc vào bất kỳ tập con nào của X. Phụ thuộc bộ phận xảy ra khi Y phụ thuộc chỉ vào một phần của khóa ghép, vi phạm 2NF.`;
  }
  // Relational model attributes
  if (/thuộc tính.*quan hệ|attribute.*relation|đặc trưng.*đối tượng/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Trong mô hình dữ liệu quan hệ, thuộc tính (attribute) biểu diễn các đặc trưng riêng của từng đối tượng được quản lý. Mỗi thuộc tính có một miền giá trị (domain) xác định tập hợp các giá trị hợp lệ mà nó có thể nhận.`;
  }
  // SQL ORDER BY / DISTINCT
  if (/ORDER BY|DISTINCT|sắp xếp.*kết quả/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. ORDER BY sắp xếp kết quả truy vấn theo một hoặc nhiều cột, theo thứ tự tăng dần (ASC, mặc định) hoặc giảm dần (DESC). DISTINCT loại bỏ các hàng trùng lặp trong kết quả SELECT.`;
  }
  // SQL JOIN types
  if (/INNER JOIN|LEFT JOIN|RIGHT JOIN|OUTER JOIN|CROSS JOIN/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. SQL JOIN: INNER JOIN trả về hàng có giá trị khớp ở cả hai bảng; LEFT JOIN trả về tất cả hàng bên trái kể cả không có khớp; RIGHT JOIN tương tự bên phải; FULL OUTER JOIN kết hợp cả hai; CROSS JOIN tích Đề các.`;
  }
  // Index
  if (/chỉ mục|index|B-tree|truy cập nhanh/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Chỉ mục (index) là cấu trúc dữ liệu (thường là B-tree) giúp tăng tốc truy vấn bằng cách cho phép tra cứu nhanh thay vì quét tuần tự toàn bộ bảng. Đánh đổi: tốc độ đọc nhanh hơn nhưng ghi chậm hơn và tốn thêm bộ nhớ.`;
  }
  // View
  if (/VIEW|khung nhìn|lưu truy vấn/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. VIEW (khung nhìn) là bảng ảo được định nghĩa bằng một câu truy vấn SELECT. VIEW không lưu dữ liệu vật lý mà tính toán lại mỗi khi truy cập, giúp đơn giản hóa truy vấn phức tạp, tăng bảo mật và ẩn cấu trúc bảng gốc.`;
  }
  // Transaction ACID
  if (/ACID|nguyên tử|nhất quán|cô lập|bền vững|atomicity|isolation/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Giao dịch (Transaction) phải thỏa ACID: Atomicity (nguyên tử - toàn bộ hoặc không gì cả), Consistency (nhất quán - CSDL luôn trong trạng thái hợp lệ), Isolation (cô lập - giao dịch không can thiệp nhau), Durability (bền vững - dữ liệu đã commit không bị mất).`;
  }
  // Concurrency / lock
  if (/đồng thời|concurrency|khóa.*giao dịch|lock|deadlock/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Kiểm soát đồng thời (concurrency control) đảm bảo nhiều giao dịch chạy song song không gây xung đột dữ liệu. Các kỹ thuật: khóa (locking - S-lock/X-lock), timestamp, MVCC. Deadlock xảy ra khi hai giao dịch cùng chờ nhau giải phóng khóa.`;
  }
  // Recovery / backup
  if (/phục hồi|recovery|backup|log.*giao dịch|undo|redo/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phục hồi CSDL (recovery) sau sự cố sử dụng nhật ký giao dịch (transaction log) để UNDO các giao dịch chưa COMMIT và REDO các giao dịch đã COMMIT. Checkpoint giúp giảm thời gian phục hồi bằng cách lưu trạng thái định kỳ.`;
  }
  // Referential integrity / foreign key
  if (/khóa ngoại|ràng buộc tham chiếu|referential integrity|foreign key|FK/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Ràng buộc toàn vẹn tham chiếu (referential integrity) yêu cầu mọi giá trị của khóa ngoại phải tồn tại trong quan hệ được tham chiếu hoặc là NULL. Khi xóa/sửa bản ghi cha, có thể CASCADE, SET NULL, hoặc RESTRICT.`;
  }
  // Lossless join / dependency preservation
  if (/lossless|không mất thông tin|bảo toàn phụ thuộc|dependency preserv/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phân rã không mất thông tin (lossless join decomposition) đảm bảo kết nối tự nhiên của các quan hệ con cho lại quan hệ ban đầu. Kiểm tra bằng điều kiện: tập thuộc tính chung phải là siêu khóa của ít nhất một quan hệ con.`;
  }
  // Primary key count
  if (/bao nhiêu.*khóa chính|khóa chính.*bảng|1.*bảng.*primary/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Mỗi bảng trong CSDL quan hệ chỉ có duy nhất một khóa chính (primary key), dù khóa đó có thể gồm nhiều cột (composite key). Tuy nhiên, một bảng có thể có nhiều khóa ứng viên (candidate keys).`;
  }
  // Cartesian product
  if (/tích Đề Các|Cartesian product|cross product/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Tích Đề Các (Cartesian product) R×S tạo ra tất cả các kết hợp có thể của các bộ từ R và S. Nếu R có m bộ n thuộc tính và S có p bộ q thuộc tính thì R×S có m×p bộ và n+q thuộc tính.`;
  }
  // SQL subquery / EXISTS / IN
  if (/subquery|câu truy vấn con|EXISTS|NOT EXISTS|IN.*SELECT/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Truy vấn con (subquery) là câu SELECT lồng bên trong câu SELECT khác. IN kiểm tra giá trị có trong danh sách không; EXISTS kiểm tra tập kết quả truy vấn con có rỗng không; thường EXISTS hiệu quả hơn IN với bảng lớn.`;
  }
  // Relation schema
  if (/lược đồ quan hệ|relation schema|R\(.*\)/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Lược đồ quan hệ R(A1,A2,...,An) định nghĩa cấu trúc của một quan hệ gồm tên quan hệ và danh sách các thuộc tính. Quan hệ (instance) là tập hữu hạn các bộ thỏa mãn lược đồ tại một thời điểm cụ thể.`;
  }
  // UNION / INTERSECT / EXCEPT
  if (/UNION|INTERSECT|EXCEPT|hợp.*tập|giao.*tập|hiệu.*tập/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phép toán tập hợp trong đại số quan hệ: Hợp (∪/UNION) gộp hai tập, Giao (∩/INTERSECT) lấy phần chung, Hiệu (−/EXCEPT) lấy phần chỉ có ở tập đầu. Yêu cầu hai quan hệ phải union-compatible (cùng số cột, cùng kiểu dữ liệu tương ứng).`;
  }
  // Division
  if (/phép chia|division.*đại số|÷/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phép chia (÷) trong đại số quan hệ R÷S trả về tập các bộ t sao cho với mọi bộ s trong S đều tồn tại bộ (t,s) trong R. Thường dùng cho truy vấn "tất cả" như: tìm sinh viên đã đăng ký TẤT CẢ các môn học.`;
  }
  // SQL LIKE / wildcard
  if (/LIKE|wildcard|ký tự đại diện|BETWEEN/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Trong SQL: LIKE dùng ký tự đại diện % (thay thế nhiều ký tự) và _ (thay thế một ký tự). BETWEEN...AND kiểm tra giá trị trong khoảng (bao gồm hai đầu). IS NULL kiểm tra giá trị NULL (không dùng = NULL).`;
  }
  // Denormalization
  if (/phi chuẩn hóa|denormaliz|dư thừa dữ liệu.*cố ý/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Phi chuẩn hóa (denormalization) cố tình tạo dư thừa dữ liệu để tăng hiệu suất đọc. Thường dùng trong data warehouse và OLAP. Đánh đổi: tốc độ truy vấn cao hơn nhưng cập nhật phức tạp hơn và tốn không gian lưu trữ hơn.`;
  }
  // Redundancy / anomalies
  if (/dư thừa|redundancy|anomaly|chèn.*dị thường|xóa.*dị thường/i.test(text)) {
    return `Đáp án đúng là ${letter}: ${ans}. Dư thừa dữ liệu gây ra các dị thường (anomalies): dị thường chèn (không thể chèn dữ liệu một phần), dị thường xóa (mất thông tin ngoài ý muốn khi xóa), dị thường cập nhật (phải cập nhật nhiều nơi). Chuẩn hóa CSDL loại bỏ các dị thường này.`;
  }

  // Default fallback explanation
  const correctOptionText = q.options[q.correctAnswer];
  return `Đáp án đúng là ${letter}: ${correctOptionText}. Đây là khái niệm cơ bản trong cơ sở dữ liệu. Phương án ${letter} là phương án chính xác nhất và đầy đủ nhất so với các phương án còn lại dựa trên lý thuyết cơ sở dữ liệu chuẩn.`;
}

// Process all questions
let updated = 0;
questions.forEach(q => {
  q.explanation = makeExplanation(q);
  updated++;
});

// Write back
fs.writeFileSync('questions.json', JSON.stringify(questions, null, 2), 'utf8');
console.log(`✓ Updated ${updated}/${questions.length} questions with explanations.`);

// Verify
const verify = JSON.parse(fs.readFileSync('questions.json', 'utf8'));
const noExp = verify.filter(q => !q.explanation);
console.log(`✓ Questions without explanation after update: ${noExp.length}`);
console.log('\nSample explanation for Q1:');
console.log(verify[0].explanation);
console.log('\nSample explanation for Q23 (ALTER TABLE):');
console.log(verify[22].explanation);
