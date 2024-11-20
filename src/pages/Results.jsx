import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

    let salary = formData.salary *12 ;
    let allsalary = salary + formData.bonus*1;
    let expenses = allsalary * 0.5 <= 100000 ? allsalary *0.5 : 100000
    let child = formData.child * 30000 <= 60000 ? formData.child * 30000 : 60000; 
    let security = formData.security * 12 <= 30000 ? formData.security * 12 :30000;
    let insurance = formData.insurance <= 100000 ? formData.insurance :100000;
    let deduction = 60000 + child+ security+ insurance *1;
    let income = allsalary-expenses-deduction;
    let taxrate = 0;
    if (income <= 100000){
      taxrate = 0;
    }
    else if (income <= 300000){
      taxrate = 0.05;
    }
    else if (income <= 300000){
      taxrate = 0.10;
    }
    else{
      taxrate = 0.15;
    };

    let taxpay = taxrate * income;

  return (
    <div>
      <h1>Result</h1>
      <p>
        <strong>เงินได้ทั้งปี: {salary} บาท</strong>
      </p>
      <p>
        <strong>ค่าใช้จ่าย: {expenses} บาท</strong>
      </p>
      <p>
        <strong>ค่าลดย่อน: {deduction} บาท</strong>
      </p>
      <p>
      <strong>เงินได้พึงประเมินสุทธิ: {income} บาท</strong>
      </p>
      <p>
      <strong>อัตราภาษี: {taxrate} %</strong>
      </p>
      <p>
      <strong>ภาษีที่ต้องชำระ: {taxpay} บาท</strong>
      </p>
    </div>
  );
};

export default Results;
