import PreviewList from '@/components/previews/preview-list'
import { Heading } from '@/components/typography/heading'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Library, Utensils } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <Heading variant="h1" asChild>
            <h1>Foodify: Your Smart Meal Planner</h1>
          </Heading>
          <p className="text-xl text-muted-foreground">
            Your hub for recipes, meal planning, and food inspiration.
          </p>
          <Button size="lg" className="inline-flex items-center" asChild>
            <Link href="/recipes">
              Browse Recipes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden justify-center flex items-center">
          <PreviewList />
        </div>
      </div>
      <div className="mt-24">
        <Heading variant="h2" asChild className="text-3xl font-bold text-center mb-12">
          <h2>Why Choose Foodify?</h2>
        </Heading>
        <div className="grid gap-8 xl:gap-16 lg:grid-cols-3">
          <FeatureCard
            icon={<Utensils className="h-10 w-10" />}
            title="Personalized Suggestions"
            description="Get meal ideas tailored to your preferences and dietary needs."
          />
          <FeatureCard
            icon={<Library className="h-10 w-10" />}
            title="Diverse Recipe Library"
            description="Discover dishes from around the world, from quick meals to gourmet projects."
          />
          <FeatureCard
            icon={<Heart className="h-10 w-10" />}
            title="Nutrition-Focused Planning"
            description="Make healthier choices with recipes that support your wellness goals."
          />
        </div>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <blockquote className="mt-6 border-l-2 pl-6 italic">{description}</blockquote>
    </div>
  )
}
