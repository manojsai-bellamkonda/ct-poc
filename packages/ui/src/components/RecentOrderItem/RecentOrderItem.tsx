export interface RecentOrderItemProps {
  store: string
  orderNumber: number
  employeeID: number
  deliveryDate: string
  shipingStatus: string
  rackNumber?: number
  purchaseDate: string
  isInStore: boolean
}
export const RecentOrderItem = ({
  store,
  orderNumber,
  employeeID,
  deliveryDate,
  shipingStatus,
  rackNumber,
}: RecentOrderItemProps) => {
  return (
    <div
      className={` bg-white py-4 px-5  rounded-xl border-2 border-silver-light `}
    >
      <div className={`flex justify-between text-black  `}>
        <p className="font-semibold text-xs leading-[14.6px] capitalize pb-4">
          {store}
        </p>
        <p className="font-semibold text-xs leading-[14.6px]">
          {shipingStatus} {rackNumber && `#${rackNumber} `} {deliveryDate}
        </p>
      </div>
      <p className="font-normal text-xs leading-[14.6px] whitespace-pre">
        {`Order #: ${orderNumber}    Employee: ${employeeID}`}
      </p>
    </div>
  )
}
