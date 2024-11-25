import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "../pages/SignupPage.css";

function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [b_Date, setB_Date] = useState(null);

  const onSubmit = async (data) => {
    const { email, password, name } = data;

    if (!password || password.trim() === "") {
      alert("Password is required");
      return;
    }
    if (!name || name.trim() === "") {
      alert("Name is required");
      return;
    }
    if (!b_Date) {
      alert("Birth date is required");
      return;
    }

    try {
      // 2. 이메일 중복 확인 (백엔드 호출)
      const emailCheckResponse = await axios.post("http://localhost:5000/api/users/check-email", { email });
      if (!emailCheckResponse.data.isAvailable) {
        alert("This email is already registered. Please use a different email.");
        return;
      }

      // 3. 사용자 데이터 저장 요청
      const response = await axios.post("http://localhost:5000/api/users", data);
      alert("가입이 완료되었습니다.!");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("가입이 실패하였습니다.");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>사용자 등록</h2>

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          {...register("email", { required: true, maxLength: 255 })}
          placeholder="email을 입력하세요."
        />
        {errors.email && <p className="error">Valid email is required</p>}

        {/* Password */}
        <label>비밀번호:</label>
        <input
          type="password"
          {...register("password", { required: true, maxLength: 255 })}
          placeholder="비밀번호를 입력하세요."
        />
        {errors.pw && <p className="error">Password is required</p>}

        {/* Name */}
        <label>이름:</label>
        <input
          type="text"
          {...register("name", { required: true, maxLength: 255 })}
          placeholder="이름을 입력하세요."
        />
        {errors.name && <p className="error">Name is required</p>}

        {/* Gender */}
        <label>성별:</label>
        <div>
          <label>
            <input
              type="radio"
              value="1"
              {...register("gender", { required: true })}
            /> 남성
          </label>
          <label>
            <input
              type="radio"
              value="2"
              defaultChecked
              {...register("gender", { required: true })}
            /> 여성
          </label>
        </div>
        {errors.gender && <p className="error">Gender is required</p>}

        {/* Birth Date */}
        <label>생년월일:</label>
        <div className="date-picker">
          <DatePicker
            selected={b_Date}
            onChange={(date) => setB_Date(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="생년월일 선택"
          />
        </div>
        {b_Date === null && <p className="error">Birth date is required</p>}

        {/* Submit Button */}
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default SignupPage;