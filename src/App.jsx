import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [price, setPrice] = useState("");
  const [down, setDown] = useState("");
  const [interest, setInterest] = useState("");
  const [installMentPerMonth, setInstallMentPerMonth] = useState("");
  let interestRate = price - down;
  let interestPerMonth = ((interestRate * interest) / 1200).toFixed(2);

  let installMentWithOutInterest = installMentPerMonth - interestPerMonth;

  let numberOfPayment = Math.ceil(interestRate / installMentWithOutInterest);

  let lastPayment = (
    interestRate -
    (numberOfPayment - 1) * installMentWithOutInterest
  ).toFixed(2);

  return (
    <>
      <div className="flex flex-col mt-10 ">
        <div className="text-center text-3xl">คำนวณเงินผ่อนรถ</div>

        <div className="flex flex-row my-2">
          <div className="flex w-1/2">
            <div className="w-3/4"></div>
            <div className="text-2xl">ราคารถ</div>
          </div>
          <input
            type="number"
            name="price"
            placeholder="ราคารถ"
            className="border-2 text-2xl ml-5"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-row my-2">
          <div className="flex w-1/2">
            <div className="w-3/4"></div>
            <div className="text-2xl">เงินดาวน์</div>
          </div>
          <input
            type="number"
            name="down payment"
            placeholder="เงินดาวน์"
            className="border-2 text-2xl ml-5"
            value={down}
            onChange={(e) => setDown(e.target.value)}
          />
        </div>
        <div className="flex flex-row my-2">
          <div className="flex w-1/2">
            <div className="w-3/4"></div>
            <div className="text-2xl">ยอดจัดไฟแนนซ์</div>
          </div>
          <div className="text-2xl text-red-400 ml-5">{interestRate} บาท</div>
        </div>
        <div className="flex flex-row my-2">
          <div className="flex w-1/2">
            <div className="w-3/4"></div>
            <div className="text-2xl mr-2">อัตราดอกเบี้ยต่อปี(%)</div>
          </div>
          <input
            type="text"
            name="interest"
            placeholder="อัตราดอกเบี้ย"
            className="border-2 text-2xl w-fit ml-5"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <div className="text-2xl ml-5">
            อัตราดอกเบี้ยต่อเดือน {interestPerMonth} บาท
          </div>
        </div>
        <div className="flex flex-row my-2">
          <div className="flex w-1/2">
            <div className="w-3/4"></div>
            <div className="text-2xl">จำนวนเงินที่ต้องการผ่อน</div>
          </div>
          <input
            type="text"
            name="installment"
            placeholder="จำนวนเงินที่ต้องการผ่อน"
            className="border-2 text-2xl ml-5 "
            value={installMentPerMonth}
            onChange={(e) => setInstallMentPerMonth(e.target.value)}
          />
          <div className="text-2xl ml-5">บาท ต่อเดือน</div>
        </div>
        <div className="flex flex-row my-2">
          <div className="flex w-1/2">
            <div className="w-3/4"></div>
            <div className="text-2xl">เงินผ่อนจริงหลังหักดอก</div>
          </div>
          <div className="text-2xl text-red-400 ml-5">
            {installMentWithOutInterest} บาท
          </div>
        </div>
        <div className="flex flex-row my-2">
          <div className="flex w-1/2">
            <div className="w-3/4"></div>
            <div className="text-2xl">จำนวนงวดทั้งหมด</div>
          </div>
          <div className="font-bold text-2xl text-blue-500 ml-5">
            {numberOfPayment} งวด
          </div>
        </div>
        <div className="flex flex-row my-2">
          <div className="flex w-1/2">
            <div className="flex w-3/4"></div>
            <div className="text-2xl">งวดสุดท้ายชำระ</div>
          </div>
          <div className="text-2xl ml-5">{lastPayment}</div>
        </div>
      </div>
    </>
  );
}

export default App;
