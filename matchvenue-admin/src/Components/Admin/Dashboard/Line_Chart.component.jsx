import { LineChart as ReLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const LineChart = () => {
  const data = [
    { day: "Mon", users: 7000 },
    { day: "Tue", users: 8000 },
    { day: "Wed", users: 9500 },
    { day: "Thu", users: 11000 },
    { day: "Fri", users: 12500 },
    { day: "Sat", users: 13000 },
    { day: "Sun", users: 11800 },
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
