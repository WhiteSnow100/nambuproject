const express = require('express');
const bodyParser = require('body-parser');
const { Dictionary } = require('./models/dictionary');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// API 엔드포인트: 단어 업데이트
app.put('/api/dictionary/:word', async (req, res) => {
  const { word } = req.params;
  const { level, email } = req.body;  // 이메일과 레벨을 요청에서 받음

  try {
    // email과 word를 기준으로 검색
    const dictionary = await Dictionary.findOne({
      where: { word, email }
    });

    if (!dictionary) {
      return res.status(404).json({ message: '해당 단어를 찾을 수 없습니다.' });
    }

    dictionary.level = level;  // 레벨 업데이트
    await dictionary.save();

    res.status(200).json({ message: '레벨이 성공적으로 업데이트되었습니다.' });
  } catch (error) {
    console.error('Error updating dictionary:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
