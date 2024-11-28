import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AudioRecorder from "./AudioRecorder";
import { useWord } from "../hooks/useWord";
import { speechToText, getGptResponse } from "../hooks/api";
// import { useAuth } from "../context/useAuthContext";
import {
  Button,
  Stack,
  TextField,
  Grid2 as Grid,
  Select,
  MenuItem,
} from "@mui/material";

const Word = () => {
  const [word, setWord] = useState("");
  const [des, setDes] = useState("");
  const [c_id, setC_id] = useState("");
  const [memo, setMemo] = useState("");
  // const { user, logout } = useAuth();
  const { handlefetchWord, handleAddWord, handleinitButton } = useWord();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!word || !des) return;
    const { des_json, url } = "";
    const input_type = 1;
    const newWord = { word, des, des_json, c_id, memo, url, input_type };
    handleAddWord(newWord);
  };

  const handleDisplay = (data) => {
    const {
      word,
      url,
      memo,
      level,
      input_type,
      email,
      des_json,
      des,
      c_id,
      c_data,
    } = data;
    setWord(word);
    setDes(des);
    setC_id(c_id);
    setMemo(memo);
  };

  const handleAudioCatured = async (audioBlob) => {
    try {
      //1. stt
      const speechText = await speechToText(audioBlob);
      console.log("speechToText>>>>>>>", speechText);
      setWord(speechText);
      //2. gpt
      handlechatGpt(speechText);
    } catch (error) {
      console.log("오류 발생:", error);
    }
  };

  const handlechatGpt = async (word) => {
    try {
      // gpt
      const gptResponse = await getGptResponse(word);
      setDes(gptResponse);
      setC_id("");
      setMemo("");
    } catch (error) {
      console.log("chatGpt 오류 발생", error);
    }
  };

  useEffect(() => {
    // for test
    setWord("조회항목");
  }, []);

  return (
    <Grid container spacing={2} component="form" onSubmit={handleSubmit}>
      <Grid size={6} sx={{ mt: 5, ml: 25 }}>
        <TextField
          id="word-input"
          label="word"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "black", borderWidth: "2px" },
              cursor: "pointer",
            },
          }}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </Grid>
      <Grid sx={{ mt: 6 }}>
        <AudioRecorder onAudioCaptured={handleAudioCatured}></AudioRecorder>
      </Grid>
      <Grid size={3} sx={{ mt: 6, ml: 5, mr: 5 }}>
        <Stack spacing={2} direction="row">
          <Button
            onClick={(e) => {
              const data = handlechatGpt(word);
            }}
            variant="contained"
            sx={{ width: "150px" }}
          >
            chatGpt 조회
          </Button>
          <Button
            onClick={async (e) => {
              const data = await handlefetchWord(word);
              console.log("조회후 dictionary data 수신 >>", data);
              handleDisplay(data);
            }}
            variant="outlined"
            sx={{ width: "150px" }}
          >
            내 사전 조회
          </Button>
        </Stack>
      </Grid>
      <Grid size={10} sx={{ mt: 2, ml: 25 }}>
        <TextField
          id="des-input"
          label="des"
          fullWidth
          multiline
          rows={10}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "black", borderWidth: "2px" },
            },
          }}
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
      </Grid>
      <Grid size={6} sx={{ mt: 2, ml: 25 }}>
        <Select
          id="category"
          fullWidth
          displayEmpty
          value={c_id}
          onChange={(e) => setC_id(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // 기본 테두리 색상
                borderWidth: "2px", // 기본 테두리 두께
              },
              "&:hover fieldset": {
                borderColor: "blue", // 호버 시 테두리 색상
              },
              "&.Mui-focused fieldset": {
                borderColor: "green", // 포커스 시 테두리 색상
                borderWidth: "3px", // 포커스 시 테두리 두께
              },
            },
          }}
        >
          <MenuItem value="">단어를 분류할 카테고리 선택해 주세요.</MenuItem>
          <MenuItem value={1}>프로그래밍</MenuItem>
          <MenuItem value={2}>상식</MenuItem>
          <MenuItem value={3}>문학</MenuItem>
          <MenuItem value={4}>전화번호</MenuItem>
          <MenuItem value={5}>꽃나무이름</MenuItem>
        </Select>
      </Grid>
      <Grid size={6}></Grid>
      <Grid size={10} sx={{ mt: 1, ml: 25 }}>
        <TextField
          id="memo-input"
          label="memo"
          multiline
          fullWidth
          rows={3}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "black", borderWidth: "2px" },
            },
          }}
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </Grid>
      <Grid size={12} sx={{ mt: 1, ml: 100 }}>
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained" sx={{ width: "130px" }}>
            저장
          </Button>
          <Button
            onClick={(e) => {
              const data = handleinitButton();
              console.log("handleinitButton>>>>", data);
              handleDisplay(data);
            }}
            variant="outlined"
            sx={{ width: "130px" }}
          >
            초기화
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Word;
