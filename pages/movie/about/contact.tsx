import type { ReactElement } from "react";

import Layout from "@/components/RootLayout";
import { NextPageWithLayout } from "../../_app";
import { Box, Button, TextField } from "@mui/material";
import AboutNestedLayout from "@/components/AboutNestedLayout";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      {/* <TextField variant="outlined" placeholder="Search" size="small" /> */}
      <Box sx={{ bgcolor: "gray", color: "black" }}>Contact</Box>
    </>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AboutNestedLayout>{page}</AboutNestedLayout>
    </Layout>
  );
};

export default Contact;
