import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [price, setPrice] = useState("");
  const [down, setDown] = useState("");
  const [interest, setInterest] = useState("");
  const [installMent, setInstallMent] = useState("");
  let interestRate = price - down;
  let interestPerMonth = ((interestRate * interest) / 1200).toFixed(2);

  let realInstallMent = installMent - interestPerMonth;

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
          <div className="text-2xl mr-2">อัตราดอกเบี้ยต่อปี(%)</div>
          <input
            type="text"
            name="interest"
            placeholder="อัตราดอกเบี้ย"
            className="border-2 text-2xl w-12"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <div className="text-2xl">
            % อัตราดอกเบี้ยต่อเดือน {interestPerMonth} บาท
          </div>
        </div>
        <div className="flex flex-row justify-center my-2">
          <div className="text-2xl mr-2">จำนวนเงินที่ต้องการผ่อน</div>
          <input
            type="text"
            name="installment"
            placeholder="จำนวนเงินที่ต้องการผ่อน"
            className="border-2 text-2xl"
            value={installMent}
            onChange={(e) => setInstallMent(e.target.name)}
          />
        </div>
        <div className="flex flex-row justify-center my-2">
          <div className="text-2xl w-1/2 text-end mx-10">
            เงินผ่อนจริงหลังหักดอก
          </div>
          <div className="text-2xl text-red-400 w-1/2">
            {realInstallMent} บาท
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
