const fs = require('fs');
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));

const calcKeywords = ['Cho R(', 'Cho lược đồ', 'F = {', 'F={', 'Khóa ứng viên', 'Khóa là', 'Bao đóng', 'Dạng chuẩn', 'Phân rã', 'Đại số quan hệ', 'π', 'σ', 'phụ thuộc hàm', 'suy diễn', 'suy ra từ F'];

const calcQuestions = questions.filter(q => {
    const text = q.question + ' ' + q.options.join(' ');
    return calcKeywords.some(kw => text.includes(kw));
});

console.log(`Total questions: ${questions.length}`);
console.log(`Calculation questions found: ${calcQuestions.length}`);

// Group them by heuristics
const groups = {
    'Closure & Candidate Keys': [],
    'Normal Forms (1NF, 2NF, 3NF, BCNF)': [],
    'Decomposition (Phân rã)': [],
    'Functional Dependency Inference (Armstrong)': [],
    'Relational Algebra (Đại số quan hệ)': [],
    'Others': []
};

calcQuestions.forEach(q => {
    const qStr = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    
    if (qStr.includes('đại số quan hệ') || qStr.includes('π') || qStr.includes('σ')) {
        groups['Relational Algebra (Đại số quan hệ)'].push(q);
    } else if (qStr.includes('phân rã')) {
        groups['Decomposition (Phân rã)'].push(q);
    } else if (qStr.includes('dạng chuẩn')) {
        groups['Normal Forms (1NF, 2NF, 3NF, BCNF)'].push(q);
    } else if (qStr.includes('khóa ứng viên') || qStr.includes('khóa là') || qStr.includes('bao đóng')) {
        groups['Closure & Candidate Keys'].push(q);
    } else if (qStr.includes('suy diễn') || qStr.includes('suy ra')) {
        groups['Functional Dependency Inference (Armstrong)'].push(q);
    } else {
        groups['Others'].push(q);
    }
});

for (const [group, qs] of Object.entries(groups)) {
    console.log(`\n--- ${group}: ${qs.length} questions ---`);
    qs.slice(0, 2).forEach(q => console.log(`Q${q.id}: ${q.question}`));
}

fs.writeFileSync('calc_questions.json', JSON.stringify(calcQuestions, null, 2));
