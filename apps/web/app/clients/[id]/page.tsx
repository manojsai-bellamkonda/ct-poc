'use client'

import { useParams, useRouter } from 'next/navigation'
import {
  Events,
  MobileNavBar,
  MobileNavBarData,
  clientDetails,
  RecentOrderCarousel,
  orderDetails,
  Button,
} from '@repo/ui'

export default function ClientPage(): JSX.Element {
  const { id } = useParams()
  const router = useRouter()
  const clientID = typeof id === 'string' ? Number(id) : null
  const client =
    clientID !== null && !isNaN(clientID)
      ? clientDetails.find((c) => c.id === clientID)
      : null
  const redirectToBag = () => {
    router.push(`/bags`)
  }
  const bagCount = client ? client.bag.length : 0
  const buttonLabel = `Go To Bag (${bagCount})`

  return (
    <main>
      <div className="pb-24 md:pb-0">
        <MobileNavBar navBarData={MobileNavBarData} />

        <div className="flex flex-col w-fit gap-2">
          <Button
            label={buttonLabel}
            onClick={redirectToBag}
            type="secondary"
            buttonStyle="mb-2"
          />
          {client ? (
            <Events client={client} />
          ) : (
            <p>No client found with this ID.</p>
          )}
        </div>
        <RecentOrderCarousel recentOrderCardData={orderDetails} />
      </div>
    </main>
  )
}
