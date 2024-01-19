/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/movie/home",
  //       missing: [
  //         {
  //           type: "cookie",
  //           key: "session_id"
  //         }
  //       ],
  //       destination: "/login",
  //       permanent: false
  //     }
  //   ];
  // }
  output: "export"
};

module.exports = nextConfig;
