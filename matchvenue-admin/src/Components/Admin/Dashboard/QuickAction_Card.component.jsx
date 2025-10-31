const QuickActionCard = ({ icon: Icon, title }) => {
  return (
    <button className="flex flex-col items-center justify-center  transition rounded-xl p-4 sm:p-5 md:p-6 text-center">
      <div className="bg-[#FAC3A4] hover:bg-[#FDBA74] transition rounded-lg p-2 sm:p-3">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <p className="mt-2 text-[11px] sm:text-xs md:text-sm font-medium text-gray-700">
        {title}
      </p>
    </button>
  );
};

export default QuickActionCard;
