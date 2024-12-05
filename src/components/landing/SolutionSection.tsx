import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, Clock, LineChart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const advantages = [
  {
    icon: Rocket,
    title: "Création avant paiement",
    description: "Nous développons votre site complet avant tout engagement financier",
  },
  {
    icon: Shield,
    title: "Satisfaction garantie",
    description: "Remboursement à 100% si le résultat ne vous convient pas",
  },
  {
    icon: Clock,
    title: "Livraison en 72h",
    description: "Un processus optimisé pour une mise en ligne ultra-rapide",
  },
  {
    icon: LineChart,
    title: "Optimisé conversion",
    description: "Des designs et fonctionnalités pensés pour maximiser vos leads et augmenter vos ventes.",
  },
];

const testimonials = [
  {
    name: "Abel SALAH",
    role: "CEO de Skillco",
    content: "\"J'ai reçu mon site en à peine 48h... Un site qui dépassait mes attentes, je suis bluffé !\"",
    avatar: "/abel-salah.jpg",
  },
  {
    name: "Karim Manar",
    role: "CEO de Sobrii",
    content: "\"J'ai été attiré par le concept de payer après avoir vu les résultats, et je dois dire que j'ai été agréablement surpris. C'était rapide, efficace et à moindre coût. Je ne peux que recommander\"",
    avatar: "/karim-manar.jpg",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Notre solution unique</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une approche innovante qui révolutionne la création de sites web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <Card key={advantage.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-secondary/10 to-primary/10 border-none">
          <CardContent className="p-8">
            <p className="text-lg text-center leading-relaxed text-muted-foreground">
              Nous comprenons vos besoins et proposons une approche différente : créer d'abord, valider ensuite. 
              Notre expertise en UX/UI design et notre engagement total envers votre satisfaction nous permettent 
              de créer des sites web performants qui vous ressemblent. Avec une transparence totale sur les coûts 
              et une flexibilité maximale, nous vous accompagnons dans la création d'une présence digitale qui 
              dépasse vos attentes.
            </p>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Comment ça marche ?
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}