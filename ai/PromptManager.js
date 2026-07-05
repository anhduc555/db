// PromptManager.js - Handles AI Prompt Generation and Context Construction

export class PromptManager {
  /**
   * Generates the system context string based on the current app state
   */
  static getSystemContext(appState) {
    let contextStr = "Bạn là Trợ lý AI chuyên môn cao về Cơ sở dữ liệu, phục vụ cho ứng dụng ôn thi trắc nghiệm.\nBối cảnh hiện tại của người dùng:\n---\n";
    
    if (appState.activeTab === 'practice') {
      const q = appState.currentQuestion;
      if (!q) {
        contextStr += "Đang ở chế độ Luyện tập nhưng chưa có câu hỏi nào.";
      } else {
        contextStr += `Câu hỏi hiện tại (ID: ${q.id}):\n"${q.question}"\n\nCác lựa chọn:\n`;
        const alphabet = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, idx) => {
          contextStr += `${alphabet[idx]}. ${opt}\n`;
        });
        
        contextStr += `\nĐáp án đúng là: ${alphabet[q.correctAnswer]}`;
        
        if (appState.userAnswer !== null && appState.userAnswer !== undefined) {
          contextStr += `\nNgười dùng đã chọn: ${alphabet[appState.userAnswer]}. Kết quả: ${appState.isCorrect ? 'Đúng' : 'Sai'}.`;
        } else {
          contextStr += `\nNgười dùng chưa trả lời câu hỏi này.`;
        }
        
        if (q.explanation) {
          contextStr += `\nGiải thích gốc: ${q.explanation}`;
        }
      }
    } else if (appState.activeTab === 'mock') {
      contextStr += "Đang ở chế độ Thi thử. Nhắc nhở người dùng nên tập trung tự làm bài thay vì hỏi AI quá nhiều, chỉ hỗ trợ khi thực sự cần thiết.";
    } else if (appState.activeTab === 'bank') {
      contextStr += "Đang ở chế độ Ngân hàng câu hỏi. Có thể tìm kiếm hoặc hỏi về bất kỳ khái niệm Cơ sở dữ liệu nào.";
    } else {
      contextStr += "Học viên đang sử dụng ứng dụng ôn thi trắc nghiệm Cơ sở dữ liệu.";
    }
    
    contextStr += "\n---\nHãy trả lời ngắn gọn, súc tích, định dạng Markdown. Sử dụng ngôn ngữ thân thiện, động viên người dùng.";
    return contextStr;
  }

  /**
   * Generates a quick action prompt string based on the action type and current state
   */
  static getQuickActionPrompt(actionType, appState) {
    if (appState.activeTab === 'practice') {
      const q = appState.currentQuestion;
      if (!q && actionType === 'roadmap') {
        return "Hãy phân tích dữ liệu học tập của tôi.";
      }
      
      if (actionType === 'explain') {
        if (appState.userAnswer !== null && appState.userAnswer !== undefined && !appState.isCorrect) {
          return `Tại sao tôi lại sai ở câu này? Hãy giải thích chi tiết đáp án đúng và phân tích lý do phương án tôi chọn là sai.`;
        } else {
          return `Hãy giải thích chi tiết câu hỏi này giúp tôi. Phân tích từng phương án A, B, C, D để tôi hiểu sâu hơn.`;
        }
      } else if (actionType === 'similar') {
        return `Hãy tạo cho tôi 1 câu hỏi tương tự với mức độ khó hơn một chút dựa trên kiến thức của câu hỏi hiện tại. Đừng đưa đáp án ngay, hãy để tôi chọn trước!`;
      } else if (actionType === 'roadmap') {
        return `Dựa trên kết quả ôn tập hiện tại của tôi (tính toán từ các câu đã trả lời), hãy phân tích điểm yếu và đề xuất kế hoạch học tập môn Cơ sở dữ liệu.`;
      }
    } else {
      if (actionType === 'roadmap') {
        return `Hãy phân tích điểm yếu và đề xuất kế hoạch học tập môn Cơ sở dữ liệu dựa trên kết quả ôn tập của tôi.`;
      } else {
        return "Hãy giải thích thêm về nội dung này.";
      }
    }
    return "";
  }
}
