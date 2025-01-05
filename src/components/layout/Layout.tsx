// src/components/layout/Layout.tsx
import React from 'react';
import Header from './Header/Header.tsx';
import Navigation from './Navigation/Navigation.tsx';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showNavigation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showHeader = true, 
  showNavigation = true 
}) => {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(180deg, #5175ff 0%, #cfdae6 100%)'}}>
      {/* 반응형 컨테이너 */}
      <div className="mx-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] min-h-screen relative">
        {/* 헤더 */}
        {showHeader && <Header />}
        
        {/* 메인 컨텐츠 */}
        <main className={`
          ${showHeader ? 'pt-24' : ''} 
          ${showNavigation ? 'pb-16' : ''}
        `}>
          {children}
        </main>
        
        {/* 네비게이션 */}
        {showNavigation && <Navigation />}
      </div>
    </div>
  );
};

export default Layout;