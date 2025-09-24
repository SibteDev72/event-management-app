import React from "react";
import PreviewEvent from "../../../components/events/PreviewEvent";
import DefaultLayout from "../../../layouts/DefaultLayout";
import ProgressBar from "../../../components/bar/ProgressBar";

const preview = () => {
  return (
    <div>
      <DefaultLayout>
        <ProgressBar />
        <PreviewEvent />
      </DefaultLayout>
    </div>
  );
};

export default preview;
