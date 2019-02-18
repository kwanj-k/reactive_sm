import React from 'react';
import AllArticles from '../allArticles';
import  CreateArticle  from '../createArticle';
import { ArticleDetails } from '../singleArticle';

export const ArticleNav = () => {
  return (
    <div className="container">
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s3">
          <a className="active" href="#test-swipe-1">
            Articles
          </a>
        </li>
        <li className="tab col s3">
          <a href="#test-swipe-2">Create Article</a>
        </li>
        <li className="tab col s3">
          <a  href="#test-swipe-3">
            Authors
          </a>
        </li>
      </ul>
      <div id="test-swipe-1">
        <AllArticles/>
      </div>
      <div id="test-swipe-2">
       <CreateArticle/>
       </div>
      <div id="test-swipe-3">
        <ArticleDetails/>
      </div>
    </div>
  );
};
