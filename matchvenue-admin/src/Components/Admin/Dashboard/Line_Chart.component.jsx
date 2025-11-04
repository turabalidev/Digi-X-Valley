import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const LineChart = ({ dailyActiveUsers }) => {
  // console.log("Daily Active Users Data:", dailyActiveUsers);
  // Transform API data to chart format
  const data = dailyActiveUsers ? [
    { day: "Mon", users: dailyActiveUsers?.Monday || 0 },
    { day: "Tue", users: dailyActiveUsers?.Tuesday || 0 },
    { day: "Wed", users: dailyActiveUsers?.Wednesday || 0 },
    { day: "Thu", users: dailyActiveUsers?.Thursday || 0 },
    { day: "Fri", users: dailyActiveUsers?.Friday || 0 },
    { day: "Sat", users: dailyActiveUsers?.Saturday || 0 },
    { day: "Sun", users: dailyActiveUsers?.Sunday || 0 },
  ] : [
    { day: "Mon", users: 0 },
    { day: "Tue", users: 0 },
    { day: "Wed", users: 0 },
    { day: "Thu", users: 0 },
    { day: "Fri", users: 0 },
    { day: "Sat", users: 0 },
    { day: "Sun", users: 0 },
  ];

  return (
    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 w-full h-56 sm:h-72 md:h-80 overflow-hidden">
      <h4 className="text-gray-700 font-semibold mb-3 text-xs sm:text-sm md:text-base">
        Active Users
      </h4>
      <ResponsiveContainer width="100%" height="90%">
        <ReLineChart data={data} margin={{ top: 8, right: 12, bottom: 8, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#8B5CF6" strokeWidth={3} />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
