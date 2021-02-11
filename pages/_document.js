import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import key from "../.keys";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            src={`https://kit.fontawesome.com/${key}.js`}
          ></script>
        </Head>
        <body className="text-gray-900 bg-gray-200 dark:bg-gray-900 dark:text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
