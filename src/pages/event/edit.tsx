import React from "react";
import DefaultLayout from "../../../layouts/DefaultLayout";
import ProgressBar from "../../../components/bar/ProgressBar";
import EditEvent from "../../../components/events/EditEvent";

const edit = () => {
  return (
    <DefaultLayout>
      <ProgressBar />
      <EditEvent />
    </DefaultLayout>
  );
};

export default edit;
