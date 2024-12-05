import { Clock, DollarSign, Search, ThumbsDown } from "lucide-react";
import { GradientCard } from "@/components/ui/gradient-card";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const challenges = [
  {
    icon: Clock,
    title: "Délais interminables",
    description: "80% des projets web dépassent les délais initiaux de 2 à 3 mois",
    stat: "3x plus long",
  },
  {
    icon: DollarSign,
    title: "Budget explosé",
    description: "Les devis initiaux sont souvent dépassés de 40% en moyenne",
    stat: "+40% de surcoût",
  },
  {
    icon: ThumbsDown,
    title: "Résultat décevant",
    description: "65% des clients sont insatisfaits du résultat final",
    stat: "65% insatisfaits",
  },
  {
    icon: Search,
    title: "Manque de visibilité",
    description: "90% des sites ne génèrent aucun lead dans les 6 premiers mois",
    stat: "0 lead en 6 mois",
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

export function ChallengesSection() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container">
        <SectionHeading
          title="Avez-vous rencontré une de ces difficultés lors de la création de votre site ?"
          description="Voici les défis fréquents rencontrés par ceux qui font développer leur site web."
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <motion.div key={challenge.title} variants={item}>
                <GradientCard className="h-full group">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-muted-foreground mb-4">{challenge.description}</p>
                    <p className="text-lg font-semibold text-gradient">{challenge.stat}</p>
                  </div>
                </GradientCard>
              </motion.div>
            );
          })}
        </motion.div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5 border-none">
          <CardContent className="p-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-center leading-relaxed text-muted-foreground backdrop-blur-sm"
            >
              Ces problématiques sont courantes chez ceux qui ne mettent pas l'accent sur l'optimisation du design et de l'expérience utilisateur. C'est pour cela que nous avons développé une solution innovante, pensée pour maximiser votre satisfaction, tout en respectant vos contraintes et votre budget.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}