import { useParams, Navigate } from "react-router-dom";
import { products } from "@/types/product";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    if (product) {
      document.title = product.metaTitle;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', product.metaDescription);
      }
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const handleAffiliateClick = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      business: "bg-blue-100 text-blue-800",
      health: "bg-green-100 text-green-800", 
      beauty: "bg-pink-100 text-pink-800",
      fitness: "bg-orange-100 text-orange-800",
      tech: "bg-purple-100 text-purple-800",
      education: "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || colors.business;
  };

  return (
    <Layout>
      <article className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-4">
          <Badge className={getCategoryColor(product.category)}>
            {product.category === 'business' && 'Negócios'}
            {product.category === 'health' && 'Saúde'}
            {product.category === 'beauty' && 'Beleza'}
            {product.category === 'fitness' && 'Fitness'}
            {product.category === 'tech' && 'Tecnologia'}
            {product.category === 'education' && 'Educação'}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {product.name}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {product.shortDescription}
          </p>
        </header>

        {/* CTA Superior */}
        <section className="text-center gradient-hero text-white py-8 rounded-2xl shadow-hero">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Transforme sua vida hoje mesmo!
          </h2>
          <Button 
            variant="secondary" 
            size="xl" 
            onClick={handleAffiliateClick}
            className="font-bold"
          >
            🎯 Quero Aproveitar Agora
          </Button>
        </section>

        {/* Descrição Detalhada */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Sobre o Produto</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {product.fullDescription}
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Principais Benefícios</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 gradient-card rounded-lg shadow-card"
              >
                <span className="text-primary text-xl">✅</span>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Como Usar */}
        {product.howToUse && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Como Usar</h2>
            <Card className="gradient-card shadow-card">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {product.howToUse}
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Depoimentos */}
        {product.testimonials && product.testimonials.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">O que dizem nossos clientes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.testimonials.map((testimonial, index) => (
                <Card key={index} className="gradient-card shadow-card">
                  <CardContent className="pt-6">
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{testimonial}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Diferenciais */}
        {product.differentials && product.differentials.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Por que escolher este produto?</h2>
            <div className="space-y-3">
              {product.differentials.map((differential, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 border border-border rounded-lg"
                >
                  <span className="text-secondary text-xl">⭐</span>
                  <span className="text-foreground">{differential}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {product.faqs && product.faqs.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {product.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="gradient-card rounded-lg px-6 border-0 shadow-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* CTA Final */}
        <section className="text-center gradient-secondary text-white py-12 rounded-2xl shadow-hero">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não perca esta oportunidade!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com este produto. 
            Agora é a sua vez de fazer parte desta história de sucesso.
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={handleAffiliateClick}
            className="font-bold text-lg px-12"
          >
            🚀 Comprar Agora
          </Button>
        </section>
      </article>
    </Layout>
  );
};

export default ProductPage;