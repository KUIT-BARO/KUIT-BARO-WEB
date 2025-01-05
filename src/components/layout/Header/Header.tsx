// components/layout/Header/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import logoIcon from '../../../assets/icons/logo.svg';
import bellIcon from '../../../assets/icons/bell.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src={logoIcon} alt="BARO" className={styles.logo} />
        <div className={styles.icons}>
          <button className={styles.iconButton}>
            <img src={bellIcon} alt="notifications" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;