import React from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

const Footer = () => {
  const shareUrl = window.location.href;
  return (
    <footer>
      <p>© 2024 多功能静态导航网站. 保留所有权利。</p>
      <div>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </footer>
  );
};

export default Footer;
