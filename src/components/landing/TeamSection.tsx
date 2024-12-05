import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Maxime Huguet",
    role: "CTO / Senior Développeur Web",
    description: "Expert en architecture technique et stratégie digitale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Timothée Raonison",
    role: "CMO / Expert IA",
    description: "Expert en intégration IA, automatisation et stratégie opérationnelle",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
  },
  {
    name: "Voanio Ramialison",
    role: "COO / Head of Business Development",
    description: "Expert en stratégie marketing et développement commercial",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
  },
  {
    name: "Samira Oukhach",
    role: "Senior AE / Key Account Manager",
    description: "Responsable relations stratégiques et gestion des comptes clients",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56",
  },
  {
    name: "Audrey Franken",
    role: "Head of CSM / Designer UX/UI",
    description: "Experte en design UX/UI et responsable de la satisfaction client",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
  {
    name: "Ilian Bagrowski",
    role: "Head of Sales",
    description: "Responsable équipe de vente et stratégie commerciale",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des experts passionnés qui donnent vie à vos projets digitaux
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={item}>
              <Card className="h-full group hover:shadow-lg transition-shadow bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-6">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}