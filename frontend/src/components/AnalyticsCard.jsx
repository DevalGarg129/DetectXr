const AnalyticsCard = ({
  title,
  value
}) => {

  return (

    <div
      className="
      bg-zinc-900
      p-6
      rounded-2xl
      border
      border-zinc-800"
    >

      <p
        className="
        text-zinc-400
        mb-2"
      >
        {title}
      </p>

      <h2
        className="
        text-3xl
        font-bold
        text-green-400"
      >
        {value}
      </h2>

    </div>
  );
};

export default AnalyticsCard;