export type InputProps = {
  label: string;
  type: "text" | "password";
  id: string;
  description: string;
  validation: string;
};

export const Input = (props: InputProps) => {
  const { label, type, id, description, validation } = props;

  return (
    <div className="dpl-input">
      <label htmlFor={id}>{label}</label>
      <input
        aria-invalid={validation ? true : false}
        aria-describedby={`description-${id}`}
        aria-labelledBy={validation ? `validation-${id}` : ""}
        id={id}
        type={type}
      />
      {description && (
        <div className="dpl-input__description" id={`description-${id}`}>
          {description}
        </div>
      )}
      {validation && (
        <div id={`validation-${id}`} className="dpl-input__validation">
          {validation}
        </div>
      )}
    </div>
  );
};
