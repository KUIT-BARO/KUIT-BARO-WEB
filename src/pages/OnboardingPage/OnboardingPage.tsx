// src/pages/OnboardingPage/OnboardingPage.tsx
import React from 'react';
import Button from '../../components/Button/Button.tsx';
import Input from '../../components/Input/Input.tsx';
import styles from './OnboardingPage.module.css';
import logo from '../../assets/icons/logo.svg';

const OnboardingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 왼쪽: 환영 메시지와 BARO 로고 */}
        <div className={styles.leftSection}>
          <div className={styles.welcomeText}>
            <p>BARO에 오신 것을</p>
            <p>환영합니다</p>
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="BARO" className={styles.logoImage} />
          </div>
        </div>

        {/* 오른쪽: 로그인 폼 */}
        <div className={styles.formSection}>
          <div className={styles.formInputs}>
            <Input 
              type="text"
              placeholder="이메일 혹은 아이디 입력"
            />
            <Input 
              type="password"
              placeholder="비밀번호 입력"
            />
            <Button fullWidth>
              로그인
            </Button>
          </div>

          {/* 하단 링크들 */}
          <div className={styles.links}>
            <button>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;