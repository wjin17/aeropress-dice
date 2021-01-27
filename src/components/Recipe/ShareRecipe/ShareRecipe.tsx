import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

import { EmailIcon, FacebookIcon, RedditIcon, TwitterIcon } from "react-share";

const quote = "Check out my aeropress-dice recipe!";

const ShareRecipe = () => {
  const shareLink = window.location.href;
  console.log("share link", shareLink);
  return (
    <div className="share-container">
      <h1>Share your recipe!</h1>
      <div className="share-button-container">
        <div className="share-button">
          <EmailShareButton url={shareLink} subject={quote}>
            <EmailIcon round={true} />
          </EmailShareButton>
        </div>
        <div className="share-button">
          <FacebookShareButton url={shareLink} quote={quote}>
            <FacebookIcon round={true} />
          </FacebookShareButton>
        </div>
        <div className="share-button">
          <RedditShareButton url={shareLink} title={quote}>
            <RedditIcon round={true} />
          </RedditShareButton>
        </div>
        <div className="share-button">
          <TwitterShareButton
            url={shareLink}
            title={quote}
            hashtags={["aeropress", "aeropress_dice"]}
          >
            <TwitterIcon round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareRecipe;
