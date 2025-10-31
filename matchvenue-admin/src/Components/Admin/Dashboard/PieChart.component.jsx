import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const PieChart = () => {
  const data = [
    { name: "Free", value: 68 },
    { name: "Premium", value: 32 },
  ];
  const COLORS = ["#E9D8FD", "#7622BF"];

  return (
    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 w-full h-56 sm:h-72 md:h-80 flex flex-col justify-between">
      <h4 className="text-black font-semibold mb-3 text-center text-xs sm:text-sm md:text-base">
        User Distribution
      </h4>
      <ResponsiveContainer width="100%" height="70%">
        <RePieChart>
          <Pie data={data} dataKey="value" innerRadius="55%" outerRadius="80%">
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </RePieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-8 sm:gap-12 md:gap-20 flex-wrap mt-3">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <div
                className={`h-2 w-2 rounded-full`}
                style={{ backgroundColor: COLORS[i] }}
              ></div>
              <span>{item.name}</span>
            </div>
            <span className="text-[#7622BF]">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
