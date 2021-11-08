import React from "react";
import { Helmet } from "react-helmet";

export const Meta = () => {
  return (
  <Helmet>
    <html lang="ja" />
    <title>サンプルサイト</title>
    <meta name="description" content="説明文" />
  </Helmet>
)
}