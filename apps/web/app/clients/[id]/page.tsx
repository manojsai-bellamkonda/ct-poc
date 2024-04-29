import {
  MobileNavBar,
  MobileNavBarData,
  RecentOrderCarousel,
  orderDetails,
} from '@repo/ui'
export default function Client(): JSX.Element {
  return (
    <main>
      <div className="">
        <MobileNavBar navBarData={MobileNavBarData} />
        <RecentOrderCarousel recentOrderCardData={orderDetails} />
      </div>
    </main>
  )
}
