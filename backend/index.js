const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
const { Dictionary } = require('./models/dictionary');

// import router from routes 
const userRoute = require('./routes/userRoute'); 
const authRoute = require('./routes/authRoute');
const categoryRoute = require('./routes/categoryRoute');

const models = require('./models/index'); // models/index.js
// models <= db

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "http://localhost:3000", // React 앱 주소
    methods: ["GET", "POST", "PUT", "DELETE"], // 허용할 HTTP 메서드
    credentials: true, // 쿠키, 인증 정보를 포함하려면 설정
  })
);

app.use(bodyParser.json());
app.use(express.json());
// use router
app.use('/users', userRoute);
// app.use('/posts', postRoute);
app.use('/auth',  authRoute);
// category
app.use('/categorys', categoryRoute);

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
  models.sequelize.sync({force:false}) // 모델을 테이블로 생성 force: false 면 if not exists 
  .then(()=>{ // 모델 생성 성공 시, db 객체 연결 성공시 
      console.log(`db connected`);
  }).catch((err)=>{ // 모델 생성 실패 시 ,db 객체 연결 실패시 
      console.error(`db connected error : ${err}`);
      process.exit();
  });
});
