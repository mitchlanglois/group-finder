const Input = (props) => (
  <label htmlFor={props.name}>
    {props.label || capitalize(props.name)}
    <input
      type={props.type || "text"}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  </label>
)

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default Input;
