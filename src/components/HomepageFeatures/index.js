import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';



// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
//}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      欢迎来到小葱的个人博客，先来个自我介绍吧！
      本人自称京城十八线前端程序媛，一个坚定的反内卷主义者！爱好广泛却泛而不精。
    </section>
  );
}
