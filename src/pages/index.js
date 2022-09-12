import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          <div>欢迎来到小葱的个人博客，先来个自我介绍吧！</div>
          <div>本人自称”京城十八线前端程序媛“，一个坚定的反内卷主义者！爱好广泛却泛而不精。喜欢读书、看电影、旅行、运动。学过摄影，组织过桌游，写过公众号。除了获得”文艺女青年“的尴尬称号，好像并没有溅起什么水花！</div>
          <div>但我仍然愿意将我有限的人生经历与你分享，那些读过的书，体验过的乐趣，看过的风景，还有那么多的或悲或喜故事！木心曾说过一句话让我很感动："要在我的身上克服整个时代，我不可能把一生荒废在俗套的生活里!" 所以，在此，我希望能带给你真正有趣的东西！</div>
          <div>当然，如果你有更有趣的东西与我分享欢迎与我交流！</div>

          
        </p>
      </div>
    </header>
    
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
     
    </Layout>
  );
}

