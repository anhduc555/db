// ContextBuilder.js - Formats structured data into Prompt context

export class ContextBuilder {
  static buildSystemContext(rawContext) {
    if (!rawContext) return "Bạn là Trợ lý AI.";

    let contextStr = "Bạn là Trợ lý AI chuyên môn cao về Cơ sở dữ liệu.\nBối cảnh trang hiện tại của người dùng:\n---\n";
    
    if (rawContext.activeTab === 'practice') {
      contextStr += "Chế độ: Luyện tập (Practice)\n";
      contextStr += `Tiến độ: Đã trả lời ${rawContext.answeredCount} / ${rawContext.totalQuestions} câu hỏi.\n\n`;
      
      const q = rawContext.currentQuestion;
      if (q) {
        contextStr += `Câu hỏi hiện tại (ID: ${q.id}):\n"${q.question}"\n\nCác lựa chọn:\n`;
        const alphabet = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, idx) => {
          contextStr += `${alphabet[idx]}. ${opt}\n`;
        });
        
        contextStr += `\nĐáp án đúng là: ${alphabet[q.correctAnswer]}`;
        
        if (rawContext.userAnswer !== null && rawContext.userAnswer !== undefined) {
          contextStr += `\nNgười dùng đã chọn: ${alphabet[rawContext.userAnswer]}. Kết quả: ${rawContext.isCorrect ? 'Đúng' : 'Sai'}.`;
        } else {
          contextStr += `\nNgười dùng chưa trả lời câu hỏi này.`;
        }
        
        if (q.explanation) {
          contextStr += `\nGiải thích gốc: ${q.explanation}`;
        }
      } else {
        contextStr += "Chưa chọn câu hỏi nào.";
      }
    } else if (rawContext.activeTab === 'mock') {
      contextStr += "Chế độ: Thi thử (Mock Test)\n";
      const q = rawContext.currentQuestion;
      if (q) {
        contextStr += `Câu hỏi đang xem:\n"${q.question}"\n\n`;
        const alphabet = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, idx) => {
          contextStr += `${alphabet[idx]}. ${opt}\n`;
        });
        if (rawContext.userAnswer !== null && rawContext.userAnswer !== undefined) {
          contextStr += `\nNgười dùng đã chọn: ${alphabet[rawContext.userAnswer]}`;
        }
      }
      contextStr += "\nChú ý: Đang thi nên không tiết lộ đáp án trực tiếp trừ khi thực sự cần thiết, chỉ gợi ý tư duy.";
    } else if (rawContext.activeTab === 'bank') {
      contextStr += "Chế độ: Ngân hàng câu hỏi. Có thể tra cứu mọi thứ.";
    }

    contextStr += "\n---\nHãy trả lời bằng Markdown, súc tích và thân thiện.";
    return contextStr;
  }

  static buildActionPrompt(actionType, rawContext) {
    if (!rawContext) return "Hãy giúp tôi hiểu.";

    const q = rawContext.currentQuestion;
    
    if (actionType === 'explain') {
      if (q && rawContext.userAnswer !== null && !rawContext.isCorrect) {
        return `Tại sao tôi lại sai ở câu này? Giải thích chi tiết lý do phương án tôi chọn là sai và tại sao đáp án đúng lại hợp lý.`;
      }
      return `Hãy giải thích chi tiết câu hỏi này giúp tôi. Phân tích từng phương án.`;
    } else if (actionType === 'similar') {
      return `Hãy tạo 1 câu hỏi tương tự với mức độ khó hơn một chút dựa trên kiến thức của câu hỏi hiện tại. Đừng đưa đáp án ngay!`;
    } else if (actionType === 'roadmap') {
      return `Dựa trên việc tôi đã làm được ${rawContext.answeredCount}/${rawContext.totalQuestions} câu, hãy tư vấn cho tôi một chiến lược ôn tập tiếp theo.`;
    }

    return "Hãy giải thích thêm.";
  }
}
