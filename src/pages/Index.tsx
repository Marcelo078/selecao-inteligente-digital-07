import { products } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center py-16 gradient-hero text-white rounded-2xl shadow-hero">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Conheça os Melhores Produtos
              <span className="block gradient-text bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Selecionados para Você!
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Descubra uma coleção exclusiva de produtos que realmente funcionam. 
              Cada item foi cuidadosamente selecionado para trazer os melhores resultados para sua vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Todos os Produtos
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Por que escolher nossos produtos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada produto em nossa seleção passou por rigorosos critérios de qualidade e eficácia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 gradient-card rounded-xl shadow-card">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Qualidade Garantida</h3>
              <p className="text-muted-foreground">
                Todos os produtos são testados e aprovados por especialistas
              </p>
            </div>
            
            <div className="text-center p-6 gradient-card rounded-xl shadow-card">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Resultados Rápidos</h3>
              <p className="text-muted-foreground">
                Soluções eficazes que entregam resultados em pouco tempo
              </p>
            </div>
            
            <div className="text-center p-6 gradient-card rounded-xl shadow-card">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Confiança Total</h3>
              <p className="text-muted-foreground">
                Produtos de marcas confiáveis com garantia de satisfação
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos" className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nossa Seleção Especial
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção cuidadosamente selecionada de produtos que transformam vidas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 gradient-secondary text-white rounded-2xl shadow-hero">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar sua Vida?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Não perca mais tempo! Escolha o produto perfeito para você e comece sua transformação hoje mesmo.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Escolher Meu Produto
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
