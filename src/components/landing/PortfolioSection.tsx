import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type ProjectType = 
  | "all" 
  | "restaurant" 
  | "boutique" 
  | "photo" 
  | "coach" 
  | "boulangerie" 
  | "formateur" 
  | "masseur" 
  | "coiffure" 
  | "hotel";

const projects = [
  {
    id: 1,
    title: "Boutique Bio en Ligne",
    description: "E-commerce avec 300% d'augmentation des ventes",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    type: "boutique",
    tags: ["Shopify", "UX Design", "SEO"],
  },
  {
    id: 2,
    title: "Restaurant Le Gourmet",
    description: "Réservations multipliées par 3",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    type: "restaurant",
    tags: ["React", "Next.js", "SEO"],
  },
  {
    id: 3,
    title: "Studio Photo Lumière",
    description: "Portfolio et système de réservation",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5",
    type: "photo",
    tags: ["React", "Next.js", "SEO"],
  },
  {
    id: 4,
    title: "Coach Sportif Elite",
    description: "Plateforme de coaching en ligne",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    type: "coach",
    tags: ["React Native", "Firebase", "Redux"],
  },
];

const filters = [
  { id: "all", label: "Tous" },
  { id: "restaurant", label: "Restaurants/Bars/Cafés" },
  { id: "boutique", label: "Boutiques locales" },
  { id: "photo", label: "Photographes/Vidéastes" },
  { id: "coach", label: "Coachs sportifs" },
  { id: "boulangerie", label: "Boulangeries/Pâtisseries/Traiteurs" },
  { id: "formateur", label: "Formateurs" },
  { id: "masseur", label: "Masseurs" },
  { id: "coiffure", label: "Salons de coiffure" },
  { id: "hotel", label: "Maisons d'hôtes" },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter
  );

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des projets concrets qui ont transformé l'activité de nos clients
          </p>
        </div>

        <ScrollArea className="w-full mb-12 pb-4">
          <div className="flex gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id as ProjectType)}
                className="whitespace-nowrap"
              >
                {filter.label}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-2"
                  >
                    Voir le projet
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}