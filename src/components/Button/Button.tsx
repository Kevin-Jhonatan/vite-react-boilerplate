import "./Button.css";
interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
  return (
    <button className="button" onClick={parentMethod}>
      {label}
    </button>
  );
};
export default Button;
