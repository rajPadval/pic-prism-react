import ExpenseCard from "../ExpenseCard";
import DashboardHeader from "../DashboardHeader";
import { useLocation } from "react-router-dom"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios"
axios.defaults.withCredentials = true;

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

  const [tillNow, setTillNow] = useState([])
  const [thisYear, setThisYear] = useState([])
  const [thisMonth, setThisMonth] = useState([])
  const [thisWeek, setThisWeek] = useState([])


  const { pathname } = useLocation()

  const getPostsByDateRange = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "/post/getPostsByDateRange", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken")
      },
      withCredentials: true,
    });
    const { data } = await res.data;
    console.log(data)
    setTillNow(data.tillNow)
    setThisYear(data.thisYear)
    setThisMonth(data.thisMonth)
    setThisWeek(data.thisWeek)
    console.log(tillNow)
  }

  useEffect(() => {
    getPostsByDateRange()
  }, [])

  const calculateTotal = (data) => {

    const value = data.reduce((acc, curr) => acc + curr.price, 0);
    return value;
  }




  return (
    <div className="">
      <DashboardHeader />
      <h1 className="text-2xl font-semibold mb-5 ml-8">Analytics</h1>
      <h1 className="text-2xl font-semibold my-5 ml-8">{pathname === "/seller/profile" ? "Uploaded" : "Purchased"} This Year</h1>
      <div className="w-[83vw] sm:w-[80vw]  ml-8 p-2 bg-white rounded-2xl shadow-md flex flex-col justify-between items-center gap-5">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            data={thisYear}
            margin={{
              top: 20,
              bottom: -50,
              left: -61,
            }}
          >
            <XAxis dataKey="title" hide />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>

        <p>Total {pathname === "/seller/dashboard" ? "Earned" : "Spent"} : ${calculateTotal(thisYear)}</p>
      </div>

      {
        !thisMonth?.length ? <h1 className="text-2xl font-semibold my-5 ml-8">No data available </h1> : <div className="flex flex-col sm:flex-row justify-between gap-2 mb-10">``
          <ExpenseCard data={thisWeek} title={`${pathname === "/seller/profile" ? "Earned" : "Spent"} This Week`} value={calculateTotal(thisWeek)} dataKey="price" />
          <ExpenseCard data={thisMonth} title={`${pathname === "/seller/profile" ? "Earned" : "Spent"} This Month`} value={calculateTotal(thisMonth)} dataKey="price" />
          <ExpenseCard data={tillNow} title={`${pathname === "/seller/profile" ? "Earned" : "Spent"} Till Now`} value={calculateTotal(tillNow)} dataKey="price" />
        </div>
      }

    </div>
  );
};

export default Analytics;
