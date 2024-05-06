import { ToolCard } from '../ToolCard'

interface Client {
  id: number
  email: string
  birthday: string
  loyalty: string
}
interface EventsProps {
  client: Client
}

export const Events = ({ client }: EventsProps) => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <ToolCard
        title="Birthday"
        subtitle={client.birthday}
        icon="birthdayCake"
      />
      <ToolCard title="Email" subtitle={client.email} icon="email" />
      <ToolCard
        title="Loyalty Tier"
        subtitle={client.loyalty}
        icon="loyaltyBadge"
      />
    </div>
  )
}
