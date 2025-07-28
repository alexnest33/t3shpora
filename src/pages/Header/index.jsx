import { Switch } from "antd";

const Header = () => {
  

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <Switch
        className="knopka"
        defaultChecked
        onChange={onChange}
        size="default"
      />
    </>
  );
};

export default Header;
