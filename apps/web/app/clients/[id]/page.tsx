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
  ImageCarousel,
  ProfileDetailsCard,
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

  if (!client) {
    router.back()
  }

  return (
    <main>
      <MobileNavBar navBarData={MobileNavBarData} />

      <div className="flex flex-col md:flex-row wrap p-4 md:px-8 gap-8">
        {client && (
          <ProfileDetailsCard
            profilePic={client?.profilePic}
            firstName={client?.firstName}
            lastName={client?.lastName}
            city={client?.city}
            stateCode={client?.stateCode}
            tag={client?.tag}
            isFavourite={client?.isFavourite}
            isEmailEnabled={client?.isEmailEnabled}
            isSmsEnabled={client?.isEmailEnabled}
            isCallEnabled={client?.isCallEnabled}
          />
        )}

        <div className="flex flex-col gap-2 w-full md:w-[50%]">
          <Button
            label={buttonLabel}
            onClick={redirectToBag}
            type="secondary"
            buttonStyle="mb-2"
          />
          {client && <Events client={client} />}
        </div>
      </div>

      <RecentOrderCarousel recentOrderCardData={orderDetails} />
      <ImageCarousel title="Latest From WHBM" />
    </main>
  )
}
