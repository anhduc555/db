const fs = require('fs');

const readmeAppend = `
## Trợ lý AI và Cấu hình API

Để đảm bảo bảo mật và tránh lộ lọt API Key, ứng dụng sử dụng mô hình Backend AI Gateway. Client (Frontend) không bao giờ giao tiếp trực tiếp với LLM Provider (Gemini) mà sẽ gửi request qua Backend nội bộ.

### 1. Cấu hình API Key
- **Vị trí**: API Key được lưu trữ trong biến môi trường tại \`server/.env\`.
- **Cách thay đổi**: Mở file \`server/.env\` và thay đổi giá trị của \`API_KEY\`.
- Nếu không có API Key, hệ thống tự động chuyển sang chế độ Mock Responder (Mô phỏng AI) để không làm gián đoạn trải nghiệm người dùng.

### 2. Luồng xử lý AI Request
1. **Frontend**: \`PageContextCollector\` thu thập ngữ cảnh và gửi tới \`AIController\`.
2. **AIController**: Format dữ liệu và gửi request REST API tới Backend (\`POST /api/v1/chat\`).
3. **Backend (aiGateway.js)**: Nhận request, kết hợp \`API_KEY\` từ biến môi trường, khởi tạo \`AbortController\` (Timeout 15s), và thực thi request tới Gemini API.
4. **Gemini API**: Xử lý và trả về kết quả.
5. **Backend**: Validate response, xử lý các lỗi HTTP, Rate Limit (429), thực thi cơ chế Retry (tối đa 3 lần), và trả kết quả về cho Frontend.
6. **Frontend**: Xử lý và hiển thị lên UI thông qua \`AIController\`.

### 3. Bảo mật
- API Key tuyệt đối không xuất hiện trong mã nguồn Client-side (HTML/JS).
- API Key không bao giờ bị log ra Browser Console hoặc Network Response.
- Frontend thao tác với Endpoint cục bộ (\`/api/v1/chat\`).
- Các lỗi kết nối hoặc API Key bị lộ sẽ được Backend bắt và trả về thông báo lỗi chung (Ví dụ: 401 Unauthorized), không leak Stack Trace hệ thống.
`;

fs.appendFileSync('README.md', readmeAppend);

const changelogAppend = `
## [Unreleased] - 2026-07-05
### Added
- **AI Integration**: Integrated robust LLM Gateway in Backend to securely handle Google Gemini API Keys via dotenv, entirely isolating secrets from the Frontend.
- **AI Pipeline Resiliency**: Added automatic Request Retry mechanism (3 attempts with exponential backoff), Timeout handling (15s abort controller), Response validation, and Rate limit detection.
`;

fs.appendFileSync('CHANGELOG.md', changelogAppend);

let progress = fs.readFileSync('IMPLEMENTATION_PROGRESS.md', 'utf8');
progress += `\n- [x] AI API Configuration: Implemented secure centralized configuration, preventing hardcoded keys.\n- [x] AI Request Flow: Engineered full Backend Gateway with Timeout, Retry, Response Validation, and secure Error Handling.\n`;
fs.writeFileSync('IMPLEMENTATION_PROGRESS.md', progress);

console.log('Docs successfully updated.');
