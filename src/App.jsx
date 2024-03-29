import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [price, setPrice] = useState("");
  const [down, setDown] = useState("");
  let interestRate = price - down;
  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="text-center text-3xl">คำนวณเงินผ่อนรถ</div>

        <div className="flex flex-row justify-center my-2">
          <div className="text-2xl mr-5">ราคารถ</div>
          <input
            type="number"
            name="price"
            placeholder="ราคารถ"
            className="border-2 text-2xl"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-center my-2">
          <div className="text-2xl mr-2">เงินดาวน์</div>
          <input
            type="number"
            name="down payment"
            placeholder="เงินดาวน์"
            className="border-2 text-2xl"
            value={down}
            onChange={(e) => setDown(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-center my-2">
          <div className="text-2xl w-1/2 text-end mx-10">ยอดจัดไฟแนนซ์</div>
          <div className="text-2xl text-red-400 w-1/2">{interestRate} บาท</div>
        </div>
        <div className="flex flex-row justify-center my-2">
          <div className="text-2xl mr-2">อัตราดอกเบี้ยต่อปี</div>
          <input
            type="text"
            name="interest"
            placeholder="อัตราดอกเบี้ย"
            className="border-2 text-2xl"
          />
        </div>
        <div className="flex flex-row justify-center my-2">
          <div className="text-2xl mr-2">จำนวนเงินที่ต้องการผ่อน</div>
          <input
            type="text"
            name="down payment"
            placeholder="จำนวนเงินที่ต้องการผ่อน"
            className="border-2 text-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default App;
