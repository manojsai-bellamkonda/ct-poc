'use client'
import { Button, ToolCard } from '..'
import { ToolCardProps } from '../ToolCard'

type Props = {
  eventsData: ToolCardProps[]
}
const handleButtonClick = () => {
  alert('Redirected to bag page')
}
export const Events: React.FC<Props> = ({ eventsData }) => {
  return (
    <div className="flex flex-col w-fit gap-2">
      <Button
        label="Go To Bag"
        type="secondary"
        buttonStyle="mb-4"
        onClick={handleButtonClick}
      />
      {eventsData.map((event) => (
        <ToolCard
          key={event.title}
          title={event.title}
          subtitle={event.subtitle}
          icon={event.icon}
          link={event.link}
        />
      ))}
    </div>
  )
}
