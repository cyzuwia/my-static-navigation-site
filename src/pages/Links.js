import React, { useEffect, useState } from 'react';
import links from '../config/links.json';

const Links = () => {
  const [friendLinks, setFriendLinks] = useState([]);

  useEffect(() => {
    setFriendLinks(links);
  }, []);

  return (
    <main>
      <h2>友链</h2>
      <ul>
        {friendLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Links;
