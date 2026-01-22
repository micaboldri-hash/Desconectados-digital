import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  withHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, withHeader = true }) => {
  return (
    <div className="h-[100dvh] w-full bg-[#FAF9F6] flex flex-col items-center overflow-hidden relative paper-texture selection:bg-[#8B735B]/20">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 0% 0%, rgba(139, 115, 91, 0.08) 0%, transparent 60%), radial-gradient(circle at 100% 100%, rgba(212, 205, 180, 0.15) 0%, transparent 60%)'
      }} />
      
      <div className="w-full max-w-2xl mx-auto flex flex-col h-full relative z-10 px-4 md:px-8">
        {withHeader && (
          <header className="pt-8 pb-4 shrink-0 flex flex-col items-center justify-center gap-4 animate-fade-in-up">
            {/* Logo Doble Infinito Desfasado */}
            <div className="text-[#5C4D42] opacity-80 flex flex-col items-center relative">
               <svg width="80" height="28" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  {/* Definición de un infinito centrado */}
                  <path id="singleInfinity" d="M50,20 C35,35 20,35 20,20 C20,5 35,5 50,20 C65,35 80,35 80,20 C80,5 65,5 50,20" />
                </defs>
                
                {/* Infinito 1 (desfasado a la izquierda) */}
                <use href="#singleInfinity" x="-8" strokeWidth="1.2" />
                
                {/* Infinito 2 (desfasado a la derecha) */}
                <use href="#singleInfinity" x="8" strokeWidth="1.2" />
              </svg>
            </div>
            <h1 className="text-[14px] md:text-[16px] font-serif font-bold text-[#5C4D42] tracking-[0.4em] uppercase opacity-90 pl-1">
              ITERABLE
            </h1>
          </header>
        )}
        <main className="flex-1 w-full relative overflow-y-auto overflow-x-hidden custom-scrollbar">
          <div className="min-h-full w-full flex flex-col justify-center items-center py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;