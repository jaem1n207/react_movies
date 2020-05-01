import React, {
  FormEvent,
  useState,
  ChangeEvent,
  useMemo,
  useRef,
} from "react";
import "./MovieDateForm.css";

type GetMovieTodayInfoFormProps = {
  onSubmitTargetDate: (targetDate: string) => void;
};

function yyyymmdd() {
  var x = new Date();
  var year = x.getFullYear().toString();
  var month = (x.getMonth() + 1).toString();
  var date = x.getDate().toString();
  date.length == 1 && (date = "0" + date);
  month.length == 1 && (month = "0" + month);
  var yyyymmdd = year + month + date;
  return yyyymmdd;
}

const MovieDateForm = ({ onSubmitTargetDate }: GetMovieTodayInfoFormProps) => {
  const getDate = useMemo(() => yyyymmdd(), []);
  const inputRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState(getDate);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitTargetDate(date);
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  };

  const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <form className="MovieTodayInfoForm" onSubmit={onSubmit}>
      <input
        onChange={changeDate}
        value={date}
        placeholder="20200501"
        autoComplete="off"
        ref={inputRef}
      />
      <button type="submit">조회</button>
    </form>
  );
};

export default MovieDateForm;
