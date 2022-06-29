type ToggleButtonProps = {
  isChecked: boolean;
};

export const ToggleButton = ({ isChecked }: ToggleButtonProps) => {
  return (
//     This button styled like a radio-toggle-button. This button is supposed to 
// open a modal, so semantically it is closer to a button than a radio button. 
    <button
      className={`dpl-toggle-button ${
        isChecked
          ? "dpl-toggle-button--active"
          : "dpl-toggle-button--inactive"
      }`}
    ></button>
  );
};
