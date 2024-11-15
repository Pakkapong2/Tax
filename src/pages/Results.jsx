import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

    let salary = formData.salary  ;
    let allsalary = salary * 12 + formData.bonus*1;
    let expenses = allsalary * 0.5 <=100000 ? allsalary *0.5 : 100000
    let child = formData.child;
    let
    let กeduction = 60000 + child +

  return (
    <div>
      <h1>Result</h1>
      <p>
        <strong>เงินได้ทั้งปี: {allsalary} บาท</strong>
      </p>
      <p>
        <strong>ค่าใช้จ่าย: {expenses} บาท</strong>
      </p>
      {/* <p>
        <strong>ค่าลดย่อน: {} บาท</strong>
      </p>
      <p>
      <strong>เงินได้พึงประเมินสุทธิ: {} บาท</strong>
      </p>
      <p>
      <strong>อัตราภาษี: {} %</strong>
      </p>
      <p>
      <strong>ภาษีที่ต้องชำระ: {} บาท</strong>
      </p> */}
    </div>
  );
};

export default Results;
