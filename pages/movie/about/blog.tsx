import type { ReactElement } from "react";

import Layout from "@/components/RootLayout";
import { NextPageWithLayout } from "../../_app";
import { Box, Button } from "@mui/material";
import AboutNestedLayout from "@/components/AboutNestedLayout";

const Blog: NextPageWithLayout = () => {
  return <Box sx={{ bgcolor: "gray", color: "black" }}>Blog</Box>;
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AboutNestedLayout>{page}</AboutNestedLayout>
    </Layout>
  );
};

export default Blog;
