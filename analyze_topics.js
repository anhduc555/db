const fs = require('fs');
const questions = require('./questions.json');
const progress = require('./user_progress.json');

const topics = {
    'SQL': ['SELECT', 'WHERE', 'ORDER BY', 'GROUP BY', 'HAVING', 'JOIN', 'VIEW', 'Trigger', 'Procedure', 'SQL', 'truy vấn', 'câu lệnh', 'bảng tạm', 'outer join'],
    'Relational Algebra': ['đại số quan hệ', 'phép chiếu', 'phép chọn', 'tích đề các', 'phép kết', 'phép hội', 'giao', 'hợp', 'trừ'],
    'Functional Dependencies': ['phụ thuộc hàm', 'khóa', 'bao đóng', 'thuật toán', 'armstrong', 'phủ tối thiểu', 'tối thiểu'],
    'Normalization': ['chuẩn', '1NF', '2NF', '3NF', 'BCNF', 'tách', 'dạng chuẩn', 'bảo toàn thông tin', 'mất mát'],
    'ER Model': ['thực thể', 'mô hình ER', 'mối quan hệ', 'thuộc tính', 'thể hiện', 'liên kết'],
    'Transaction & Concurrency': ['transaction', 'giao dịch', 'đồng thời', 'khóa', 'cô lập', 'rollback', 'commit', 'lịch trình', 'deadlock', 'bế tắc', 'phục hồi'],
    'Indexing': ['chỉ mục', 'B-Tree', 'Hash', 'Index', 'b-cây', 'băm'],
    'Database Design': ['thiết kế', 'ràng buộc toàn vẹn', 'lược đồ', 'mô hình dữ liệu']
};

let stats = {};
for (const key in topics) {
    stats[key] = { total: 0, correct: 0, wrong: 0, qs: [] };
}
stats['Others'] = { total: 0, correct: 0, wrong: 0, qs: [] };

for (const q of questions) {
    if (!progress[q.id] || progress[q.id].answeredIndex === undefined || progress[q.id].answeredIndex === null) continue;
    
    let assigned = 'Others';
    const text = (q.question + ' ' + q.explanation).toLowerCase();
    
    for (const [topic, keywords] of Object.entries(topics)) {
        if (keywords.some(kw => text.includes(kw.toLowerCase()))) {
            assigned = topic;
            break;
        }
    }
    
    stats[assigned].total++;
    if (progress[q.id].isCorrect) {
        stats[assigned].correct++;
    } else {
        stats[assigned].wrong++;
        stats[assigned].qs.push(q.id);
    }
}

let report = '# Performance Report\n\n## Overall Accuracy\n';
let totalQ = 0, totalCorrect = 0;
for (const t in stats) {
    totalQ += stats[t].total;
    totalCorrect += stats[t].correct;
}
report += `Total Answered: ${totalQ}\nTotal Correct: ${totalCorrect}\nAccuracy: ${Math.round((totalCorrect/totalQ)*100)}%\n\n`;

report += '## Topics Mastery\n';
let sorted = [];
for (const t in stats) {
    if (stats[t].total > 0) {
        let acc = Math.round((stats[t].correct / stats[t].total) * 100);
        sorted.push({ topic: t, acc: acc, correct: stats[t].correct, wrong: stats[t].wrong, total: stats[t].total, qs: stats[t].qs });
    }
}
sorted.sort((a, b) => a.acc - b.acc);

for (const item of sorted) {
    let stars = '';
    if (item.acc < 50) stars = '★★★★★ Critical';
    else if (item.acc < 65) stars = '★★★★ Serious';
    else if (item.acc < 80) stars = '★★★ Moderate';
    else if (item.acc < 90) stars = '★★ Minor';
    else stars = '★ Small';
    
    if (item.wrong === 0) stars = 'Mastered';
    
    report += `${item.topic.padEnd(30, '.')} ${item.acc}% (${item.correct}/${item.total}) - ${stars}\n`;
}

report += '\n\n## Personalized Study Roadmap\n\n';
for (const item of sorted) {
    if (item.wrong > 0) {
        report += `### ${item.topic} (Priority: ${item.acc < 60 ? 'High' : (item.acc < 85 ? 'Medium' : 'Low')})\n`;
        report += `- **Why it is important**: Essential for database exams.\n`;
        report += `- **To Practice**: ${item.wrong} incorrect questions remaining.\n\n`;
    }
}

fs.writeFileSync('C:\\Users\\Anh Duc\\.gemini\\antigravity-ide\\brain\\8277efe7-afb5-48d5-a327-bf3221a878c6\\performance_report.md', report);
fs.writeFileSync('C:\\Users\\Anh Duc\\.gemini\\antigravity-ide\\brain\\8277efe7-afb5-48d5-a327-bf3221a878c6\\weak_topics_data.json', JSON.stringify(sorted, null, 2));
