import { useEffect } from "react";
import Home from "../../components/home/Home";
import DefaultLayout from "../../layouts/DefaultLayout";

const index = () => {
  useEffect(() => {
    const userStatus = localStorage.getItem("User Status");
    if (userStatus === "" || userStatus === null) {
      localStorage.setItem("User Status", "LoggedOff");
    }
  }, []);

  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default index;
