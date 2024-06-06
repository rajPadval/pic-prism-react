import ExpenseCard from "./ExpenseCard";
import SellerHeader from "./SellerHeader";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    uploaded: 5,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    uploaded: 2,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    uploaded: 8,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    uploaded: 0,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    uploaded: 1,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    uploaded: 2,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    uploaded: 5,
  },
  {
    name: "Page h",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    uploaded: 0,
  },
  {
    name: "Page i",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    uploaded: 2,
  },
];
const Analytics = () => {
  return (
    <div className="">
      <SellerHeader />
      <h1 className="text-2xl font-semibold mb-5 ml-8">Analytics</h1>
      <h1 className="text-2xl font-semibold my-5 ml-8">Uploaded This Month</h1>
      <div className="w-[83vw] sm:w-[80vw]  ml-8 p-2 bg-white rounded-2xl shadow-md flex flex-col justify-between items-center gap-5">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={data}>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uploaded"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>

        <p>No. of posts uploaded : {25}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 mb-10">
        <ExpenseCard data={data} title={"Earned This Week"} value={700} />
        <ExpenseCard data={data} title={"Earned This Month"} value={4000} />
        <ExpenseCard data={data} title={"Earned This Year"} value={50000} />
      </div>
    </div>
  );
};

export default Analytics;
