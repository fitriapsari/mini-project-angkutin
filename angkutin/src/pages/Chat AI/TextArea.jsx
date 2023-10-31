import "./TextArea.module.css"

const TextArea = ({
  value,
  onChange,
  type,
  placeholder,
  name,
  className,
  id,
}) => {
  return (
    <textarea
      type={type ? type : "text"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className={className}
      id={id ? id : ""}
    />
  )
}

export default TextArea
