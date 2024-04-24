import { Button, ToolCard } from '..'
export const Events = () => {
  return (
    <div className="flex flex-col w-fit gap-2">
      <Button label="Go To Bag" type="secondary" buttonStyle="mb-4" />
      <ToolCard icon="birthdayCake" title="Birthday" subtitle="February 15" />
      <ToolCard icon="email" title="Email" subtitle="jennysmith215@gmail.com" />
      <ToolCard
        icon="loyaltyBadge"
        title="Loyalty Tier"
        subtitle="Trendsetter"
      />
    </div>
  )
}
