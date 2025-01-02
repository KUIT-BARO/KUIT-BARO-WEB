// pages/MainPage/MainPage.tsx
import React from 'react';
import styles from './MainPage.module.css';
import Layout from '../../components/layout/Layout.tsx';

const MainPage = () => {
  return (
    <Layout>
      <div className={styles.content}>
        {/* 여기에 실제 콘텐츠가 들어갑니다 */}
      </div>
    </Layout>
  );
};

export default MainPage;