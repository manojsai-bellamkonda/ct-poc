'use client'

import { useParams } from 'next/navigation'
import { Events, MobileNavBar, MobileNavBarData, clientDetails } from '@repo/ui'

export default function ClientPage(): JSX.Element {
  const { id } = useParams()
  const clientID = typeof id === 'string' ? Number(id) : null
  const client =
    clientID !== null && !isNaN(clientID)
      ? clientDetails.find((c) => c.id === clientID)
      : null

  return (
    <main>
      <div className="pb-24 md:pb-0">
        <MobileNavBar navBarData={MobileNavBarData} />
        {client ? (
          <Events client={client} />
        ) : (
          <p>No client found with this ID.</p>
        )}
      </div>
    </main>
  )
}
