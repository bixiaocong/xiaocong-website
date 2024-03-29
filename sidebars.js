/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  opinionSidebar: ['my-opinion/to-my-34', 'my-opinion/to-my-35', 'my-opinion/move', 'my-opinion/2022Review', 'my-opinion/2023Flag', 'my-opinion/be-laid-off'],
  boardGameBar: ['board-game/recommendation1', 'board-game/recommendation2'],
  readSidebar: ['reading/reading', 'reading/TheMoonandSixpence', 'reading/Frog', 'reading/2022Booklist'],
  podcastSidebar: ['podcast/recommend', 'podcast/culture', 'podcast/comedy', 'podcast/invest'],
  travelSidebar: ['travel/dali'],
  movieSidebar: ['movie/index', 'movie/Parasite'],
  investSidebar: ['invest/card', 'invest/knowledge'],
};

module.exports = sidebars;
