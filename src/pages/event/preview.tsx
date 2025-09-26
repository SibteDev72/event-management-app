import React from "react";
import PreviewEvent from "../../../components/events/PreviewEvent";
import DefaultLayout from "../../../layouts/DefaultLayout";
import ProgressBar from "../../../components/bar/ProgressBar";
import { useRouter } from "next/router";

const Preview = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <DefaultLayout>
      <ProgressBar type={type as string} />
      <PreviewEvent type={type as string} />
    </DefaultLayout>
  );
};

export default Preview;
