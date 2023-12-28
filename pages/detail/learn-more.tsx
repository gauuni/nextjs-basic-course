import type { ReactElement } from "react";

import LearnMoreLayout from "@/components/landing_page/LearnMoreLayout";
import { NextPageWithLayout } from "../_app";
import { Box, Button } from "@mui/material";

const LearnMore: NextPageWithLayout = () => {
  return <Box sx={{ color: "black" }}>Learn more</Box>;
};

LearnMore.getLayout = function getLayout(page: ReactElement) {
  return <LearnMoreLayout>{page}</LearnMoreLayout>;
};

export default LearnMore;
