import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
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
    <Card className="gradient-card shadow-card transition-bounce hover:shadow-hero hover:scale-105 border-0 overflow-hidden group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge className={getCategoryColor(product.category)}>
            {product.category === 'business' && 'Negócios'}
            {product.category === 'health' && 'Saúde'}
            {product.category === 'beauty' && 'Beleza'}
            {product.category === 'fitness' && 'Fitness'}
            {product.category === 'tech' && 'Tecnologia'}
            {product.category === 'education' && 'Educação'}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {product.shortDescription}
        </CardDescription>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <span 
                key={index}
                className="text-xs bg-accent/50 text-accent-foreground px-2 py-1 rounded-full"
              >
                ✨ {benefit}
              </span>
            ))}
          </div>
          <Link to={`/produto/${product.slug}`}>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
            >
              Saiba Mais
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};