import Header from "./Header";
import NameInput from "./NameInput";

const Landing = (props) => {
  return (
    <>
      <Header />
      <NameInput setUser={props.setUser} />
    </>
  );
}

export default Landing;