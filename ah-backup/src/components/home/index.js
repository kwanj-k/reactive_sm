import React from 'react';
import Nav from '../common/nav';
import { ArticleNav } from '../articles/articleTabs';

export const Home = () => {
  return (
    <div>
      <Nav />
      <ArticleNav />
    </div>
  );
};
