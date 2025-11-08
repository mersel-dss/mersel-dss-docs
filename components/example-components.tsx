import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function ExampleComponents() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Card</h2>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>shadcn/ui Kart Bileşeni</CardTitle>
            <CardDescription>
              Projenizde kullanabileceğiniz modern kart bileşeni
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Bu kart, Tailwind CSS ve Radix UI kullanılarak oluşturulmuştur.
              Tam tip güvenli ve özelleştirilebilir.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Daha Fazla Bilgi</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

