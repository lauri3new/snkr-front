
import React from 'react';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const Share = (props) => {

  const shareUrl = 'http://www.snkrsnkr.co';
  const title = 'Snkr:Snkr';

  const Demo = {
        display: 'inline-block',
        textAlign: 'center',
        cursor: 'Pointer'
      };

return (

      <div className={Demo}>
        <div style={Demo}>
          <FacebookShareButton
            url={shareUrl}
            title={title}
            picture={``}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style={Demo}>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>


        </div>

      </div>
);
}

export default Share;
