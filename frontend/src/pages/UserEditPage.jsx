import React, {useState, useEffect} from "react";
import TabMenu from "../components/TabMenu";
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Box,
    CardActions,
    CardHeader,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
  } from "@mui/material";
  import { useAuth } from "../context/AuthContext";


const UserEdit = () => {
    const { user, updateUser } = useAuth(); // AuthContext에서 사용자 정보와 업데이트 함수 가져오기
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [gen, setGen] = useState("");
    const [b_date, setB_date] = useState("");
    const navigate = useNavigate();

  //사용자 정보 불러오기
  useEffect(()=> {
    console.log("User object:", user); // user 상태가 바뀔 때마다 콘솔에 찍기
    if(user){
      setEmail(user.email);
      setName(user.name);
      setGen(user.gen);
      setB_date(user.setB_date);
    }
  }, [user]);  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", {name, gen, b_date});
    updateUser(email, {name, gen, b_date});
    alert("성공적으로 수정되었습니다.")
    navigate("/user");
  }  

  return (
    <div>
            <TabMenu />      
    <Card 
        sx={{
            maxWidth: 400,
            mx: "auto",
            mt: 5,
            boxShadow: 3,
            padding: 3,
        }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <CardHeader
          title = {
            <Typography variant="h4" align = "center" gutterBottom>
              회원 정보 수정
            </Typography>  
          }
        />
        <CardContent>
          <TextField 
          label = "이메일"
          fullWidth
          value = {email}
          disabled // 이메일 수정 불가
          sx = {{ mb: 2 }}
          />
          <TextField
          label = "사용자명"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb:2 }}
          required 
          />
          <FormControl fullWidth sx={{ mb:2 }} required>
            <InputLabel id = "gender-label">성별</InputLabel>
            <Select
            labelId="gender-label"
            value={gen || ""}
            onChange={(e)=>setGen(e.target.value)}
            >
              <MenuItem value="1">여성</MenuItem>
              <MenuItem value="2">남성</MenuItem>
            </Select>
          </FormControl>
          <TextField   //dateField 찾아볼 것 
          label="생년월일"
          type="date"
          fullWidth
          defaultValue={b_date}
          value={b_date}
          onChange={(e)=>setB_date(e.target.value)}
          InputLabelProps={{shrink:true}}
          sx={{ mb:2 }}
          required
          />
        </CardContent>  
        <CardActions sx={{justifyContent: "center"}}>
          <Button 
            type="submit" 
            variant="contained"
            sx={{
              backgroundColor: "#1976d2",
              color:"#fff",
              "&:hover":{
                backgroundColor: "#1565c0",
              },
            }}              
          >
            저장하기
          </Button>
        </CardActions>
      </Box>    
    </Card>    
  </div>  
  );
};

export default UserEdit;