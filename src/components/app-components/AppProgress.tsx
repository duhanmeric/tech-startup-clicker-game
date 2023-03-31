import { useAppSelector } from "@/redux/hooks";

function Progress() {
  const { value, condition } = useAppSelector((state) => state.progress);

  return (
    <div className="progress-container">
      <label htmlFor="progress" className="progress-label">
        <strong>
          {condition} - {value}%
        </strong>
      </label>
      <progress id="progress" value={value} max="100"></progress>
    </div>
  );
}

export default Progress;
