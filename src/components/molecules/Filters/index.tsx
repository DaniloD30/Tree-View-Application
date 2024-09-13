const Filters = () => {
  return (
    <div className="flex gap-2">
      <button
        className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded font-semibold text-sm 
              "text-gray-600
              }`}
      >
        {/* TODO: selected isActive */}
        <img src="/energy.png" width="14" />
        Sensor de Energia
      </button>
      <button
        className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded font-semibold text-sm 
              "text-gray-600
              }`}
      >
        {/* TODO: selected isActive */}
        <img src="/critic.png" width="14" />
        Crítico
      </button>
    </div>
  );
};

export default Filters;
