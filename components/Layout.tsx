import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-[100dvh] w-full bg-[#FAF9F6] flex flex-col items-center overflow-hidden relative paper-texture selection:bg-[#8B735B]/20">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 0% 0%, rgba(139, 115, 91, 0.08) 0%, transparent 60%), radial-gradient(circle at 100% 100%, rgba(212, 205, 180, 0.15) 0%, transparent 60%)'
      }} />
      
      <div className="w-full max-w-2xl mx-auto flex flex-col h-full relative z-10 px-4 md:px-8">
        <header className="pt-8 pb-4 text-center shrink-0">
          <h1 className="text-[14px] md:text-base font-serif font-bold text-[#5C4D42] tracking-[0.2em] uppercase opacity-60">
            δ ι α ν ο ι α
          </h1>
        </header>
        <main className="flex-1 w-full flex flex-col justify-center items-center relative overflow-visible">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;