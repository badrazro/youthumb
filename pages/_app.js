import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://www.tumbeutube.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
      
      {/* Add the AdCash code */}
      <div>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          aclib.runBanner({
            zoneId: '7780754',
          });
        `}} />
      </div>
    </Fragment>
  );
}

export default MyApp;
