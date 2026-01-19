
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-[100dvh] w-full bg-[#FAF9F6] flex flex-col items-center overflow-hidden relative paper-texture selection:bg-[#8B735B]/20">
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
      
      {/* Background Ambience */}
      <div className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] bg-[#8B735B]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] bg-[#D4CDB4]/10 rounded-full blur-[150px] pointer-events-none"></div>
    </div>
  );
};

export default Layout;