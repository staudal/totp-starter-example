import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card.tsx'

export default function Wishlists() {
  const cardData = [
    {
      title: 'Wishlist1',
      description: 'Description for Card 1',
      content: 'Content for Card 1',
      footer: 'Footer for Card 1',
    },
    {
      title: 'Wishlist2',
      description: 'Description for Card 2',
      content: 'Content for Card 2',
      footer: 'Footer for Card 2',
    },
    {
      title: 'Wishlist3',
      description: 'Description for Card 3',
      content: 'Content for Card 3',
      footer: 'Footer for Card 3',
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {cardData.map((card, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{card.content}</p>
          </CardContent>
          <CardFooter>
            <p>{card.footer}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
