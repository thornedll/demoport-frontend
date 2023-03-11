import style from "./styles/read-only-input.module.scss";

function ReadOnlyInput({ value, id }) {
  return (
    <>
      <input
        id={id}
        type="text"
        value={value}
        className={style["input_read-only"]}
        disabled
      />
    </>
  );
}

export default ReadOnlyInput;
