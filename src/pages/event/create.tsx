import React from "react";
import CreateEvent from "../../../components/events/CreateEvent";
import DefaultLayout from "../../../layouts/DefaultLayout";
import ProgressBar from "../../../components/bar/ProgressBar";

const create = () => {
  return (
    <DefaultLayout>
      <ProgressBar />
      <CreateEvent />
    </DefaultLayout>
  );
};

export default create;
