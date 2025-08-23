import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-hero text-white py-6 shadow-hero">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-2xl font-bold hover:text-white/90 transition-smooth">
            Seleção Inteligente Digital
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-muted mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Seleção Inteligente Digital</h3>
              <p className="text-muted-foreground">
                Os melhores produtos selecionados especialmente para você. 
                Qualidade, confiança e resultados garantidos.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Redes Sociais</h4>
              <div className="space-y-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth block">
                  📱 Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth block">
                  📘 Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth block">
                  🐦 Twitter
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Links Úteis</h4>
              <div className="space-y-2">
                <a href="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-smooth block">
                  Política de Privacidade
                </a>
                <a href="/sitemap.xml" className="text-muted-foreground hover:text-primary transition-smooth block">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Seleção Inteligente Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};