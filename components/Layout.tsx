
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-xl mx-auto flex flex-col">
        <header className="text-center mb-10 opacity-60">
          <h1 className="text-xl font-serif font-bold text-[#5C4D42] tracking-[0.2em] uppercase">
            Desconectados Digital
          </h1>
        </header>
        <main className="flex-1 flex flex-col justify-center items-center">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
