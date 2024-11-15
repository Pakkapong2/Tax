import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChang = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <>
      <h1>เเบบฟอร์มภาษีเงินได้</h1>
      <form onSubmit={submitForm}>
        <p>
          <label>เงินเดือน:</label>
          <input type="text" name="salary" id="salary" onChange={handleChang} />
        </p>
        <p>
          <label>โบนัส:</label>
          <input type="text" name="bonus" id="bonus" onChange={handleChang} />
        </p>
        <p>
          <label>หักประกันสังคมต่อเดือน:</label>
          <input type="text" name="security" id="security" onChange={handleChang} />
        </p>
        <p>
          <label>จำนวนบุตร:</label>
          <input type="text" name="child" id="child" onChange={handleChang} />
        </p>
        <p>
          <label>ค่าเบี้ยประกันชีวิต:</label>
          <input type="text" name="insurance" id="insurance" onChange={handleChang} />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>  );
};

export default FormData;
