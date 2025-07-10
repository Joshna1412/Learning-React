import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./App.css";

const App = () => {
  const [chartData, setChartData] = useState([]);
  const [ageData, setAgeData] = useState([]);
  const [genderData, setGenderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apis.ccbp.in/covid-vaccination-data");
        const data = await response.json();
        setChartData(data.last_7_days_vaccination);
        setAgeData(data.vaccination_by_age);
        setGenderData(data.vaccination_by_gender);
      } catch (err) {
        console.error("Error", err);
      }
    };
    fetchData();
  }, []);

  const DataFormatter = (number) => {
    return number > 1000 ? `${(number / 1000).toString()}k` : number.toString();
  };

  return (
    <div className="graph-container">
      <div className="logo-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="logo-img"
        />
        <h2>Cowin</h2>
      </div>
      <div className="bar-chart-section">
        <ResponsiveContainer width={700} height={400}>
          <BarChart data={chartData} margin={{ top: 50, left: 30 }}>
            <XAxis dataKey="vaccine_date" tick={{ stroke: "gray", strokeWidth: 1 }} />
            <YAxis tickFormatter={DataFormatter} tick={{ stroke: "gray", strokeWidth: 1 }} />
            <Legend wrapperStyle={{ padding: 30 }} />
            <Bar dataKey="dose_1" fill="#5a8dee" />
            <Bar dataKey="dose_2" fill="#f54394" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="age-pie-container">
        <h3>Vaccination by Age</h3>
        <ResponsiveContainer width={500} height={400}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={ageData}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#5a8dee" />
              <Cell name="45-60" fill="#f54394" />
              <Cell name="Above 60" fill="#2cc6c6" />
            </Pie>
            <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="gender-pie-container">
        <h3>Vaccination by Gender</h3>
        <ResponsiveContainer width={500} height={400}>
          <PieChart>
            <Pie
              cx="70%"
              cy="40%"
              data={genderData}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill="#2d87bb" />
              <Cell name="Female" fill="#a3df9f" />
              <Cell name="Others" fill="#64c2a6" />
            </Pie>
            <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default App;
