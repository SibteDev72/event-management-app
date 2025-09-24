import { useEffect } from "react";
import Home from "../../components/home/Home";
import DefaultLayout from "../../layouts/DefaultLayout";

const IndexPage = () => {
  useEffect(() => {
    const userStatus = localStorage.getItem("User Status");
    if (!userStatus) {
      localStorage.setItem("User Status", "LoggedOff");
    }
  }, []);

  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default IndexPage;
