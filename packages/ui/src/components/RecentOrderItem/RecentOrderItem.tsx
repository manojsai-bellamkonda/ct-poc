export interface RecentOrderItemProps {
  brand: string
  orderId: number
  empId: number
  orderDate: string
  orderStatus: string
  inStoreId?: number
}
export const RecentOrderItem = ({
  brand,
  orderId,
  empId,
  orderDate,
  orderStatus,
  inStoreId,
}: RecentOrderItemProps) => {
  return (
    <div
      className={` bg-white py-4 px-5  rounded-xl border-2 border-silver-light `}
    >
      <div className={`flex justify-between text-black  `}>
        <p className="font-semibold text-xs leading-[14.6px] capitalize pb-4">
          {brand}
        </p>
        <p className="font-semibold text-xs leading-[14.6px]">
          {orderStatus} {inStoreId && `#${inStoreId} `} {orderDate}
        </p>
      </div>
      <p className="font-normal text-xs leading-[14.6px] whitespace-pre">
        {`Order #: ${orderId}    Employee: ${empId}`}
      </p>
    </div>
  )
}
