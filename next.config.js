/**
 * @type {import("next").NextConfig}
 */
module.exports = {
   images: {
      remotePatterns: [
         {
            protocol: "https" || "http",
            hostname: "res.cloudinary.com"
         },
         {
            protocol: "https" || "http",
            hostname: "via.placeholder.com"
         }
      ]
   },
   reactStrictMode: true,
   compiler: {
      // *** To remove console
      // removeConsole: {
      //   exclude: ["error"],
      // },
   }
}
