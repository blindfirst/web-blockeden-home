import React from "react";
import Head from "@docusaurus/Head";
import {beConfig} from "@site/src/config";

export const SeoHead: React.FC = () => {
  return (
    <Head>
      <meta name="twitter:site" content="@BlockEdenHQ"/>
      <meta name="twitter:image" content={beConfig.previewImageUrl}/>
      <meta name="twitter:title" content={beConfig.title}/>
      <meta name="twitter:description" content={beConfig.description}/>
      <meta property="og:description" content={beConfig.description}/>
      <meta property="og:image" name="og:image" content={beConfig.previewImageUrl}/>

      <script src={"https://raw.githubusercontent.com/iconfu/svg-inject/v1.2.3/dist/svg-inject.min.js"}></script>
    </Head>
  );
}
