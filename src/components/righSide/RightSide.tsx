import React from 'react';
import Block from '../block/Block';
import { SearchBar } from '../SearchBar/SearchBar';

export const RightSide = () => {
  return (
    <>
      <SearchBar />
      <Block
        title="What's happening"
        articles={[
          {
            title:
              'New rules that aim to curb the rise in COVID-19 cases could be enforced for six months, Boris Johnson announces',
            category: 'COVID-19',
            time: '4 hours ago',
            image:
              'https://pbs.twimg.com/semantic_core_img/1308373076900372481/hh4ZMKa1?format=jpg&name=240x240',
          },
        ]}
      />
      <Block
        title='Who to follow'
        whoToFollow={[
          {
            title: 'eToro',
            image:
              'https://pbs.twimg.com/profile_images/1240616877325418496/G7L-f-8b_bigger.jpg',
            follow: () => {},
            userName: '@eToro',
          },
        ]}
      />
    </>
  );
};
