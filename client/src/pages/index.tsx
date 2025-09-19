import AuthLayout from "../../components/auth/AuthLayout";
import LogIn from "../../components/auth/LogIn";

const HomePage = () => {
  return <AuthLayout children={<LogIn />} />;
};

export default HomePage;
