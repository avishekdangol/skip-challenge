import { useState } from 'react'
import { CiWarning } from 'react-icons/ci'
import { TbTruckDelivery } from 'react-icons/tb'

function ProductCard({ product, selected, onSelect }) {
  const [onRoadWarningHovered, setOnRoadWarningHovered] = useState(false)
  const [heavyWasteWarningHovered, setHeavyWasteWarningHovered] = useState(false)
  const [forbiddenHovered, setForbiddenHovered] = useState(false)
  
  return (
    <>
      {/* Card Container */}
      <div
        className={`border border-gray-400 shadow rounded transition-all duration-200 cursor-pointer relative overflow-hidden ${selected ? 'opacity-80 border-yellow-700 shadow-md shadow-yellow-400' : 'hover:bg-indigo-950 hover:text hover:border-yellow-500 hover:shadow-md hover:shadow-yellow-500'}`}
        role='listbox'
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect();
          }
        }}
        onClick={onSelect}
      >
        {/* Image */}
        <div className='w-full h-72'>
          <img
            className='w-full h-full object-cover rounded'
            src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${product.size}-yarder-skip.jpg`}
            alt={`${product.size} Yard Skip`}
          />
        </div>

        {/* Badges */}
        <div className='flex flex-col items-start gap-1 absolute top-2 left-2'>
          <div className='flex gap-2'>
            {/* Not Allowed on Road Badge */}
            {
              !product.allowed_on_road && (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <div 
                  className='flex text-white items-center bg-yellow-600 px-2 py-2 rounded shadow-lg'
                  role='tooltip'
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setOnRoadWarningHovered(true)}
                  onMouseLeave={() => setOnRoadWarningHovered(false)}
                >
                  <CiWarning
                    className='text-lg'
                    size={24}
                    title='Not Allowed on the Road'
                  />
                  <small className={`whitespace-nowrap ${onRoadWarningHovered ? 'max-w-[150px] opacity-100' : 'max-w-0 opacity-0'} transition-all duration-300 overflow-hidden`}>
                    Not Allowed on the Road!
                  </small>
                </div>
              )
            }

            {/* Heavy Waste Badge */}
            {
              !product.allows_heavy_waste && (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <div 
                  className='flex text-white items-center bg-yellow-600 px-2 py-2 rounded shadow-lg'
                  role='tooltip'
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setHeavyWasteWarningHovered(true)}
                  onMouseLeave={() => setHeavyWasteWarningHovered(false)}
                >
                  <CiWarning
                    className='text-lg'
                    size={24}
                  />
                  <small className={`whitespace-nowrap ${heavyWasteWarningHovered ? 'max-w-[172px] opacity-100' : 'max-w-0 opacity-0'} transition-all duration-300 overflow-hidden`}>
                    Not Suitable for Heavy Waste!
                  </small>
                </div>
              )
            }
          </div>

          <div>
            {/* Forbidden Badge */}
            {
              product.forbidden && (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <div 
                  className='flex text-white items-center bg-red-600 px-2 py-2 rounded shadow-lg'
                  role='tooltip'
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => setForbiddenHovered(true)}
                  onMouseLeave={() => setForbiddenHovered(false)}
                >
                  <CiWarning
                    className='text-lg'
                    size={24}
                  />
                  <small className={`whitespace-nowrap ${forbiddenHovered ? 'max-w-[150px] opacity-100' : 'max-w-0 opacity-0'} transition-all duration-300 overflow-hidden`}>
                    Forbidden!
                  </small>
                </div>
              )
            }
          </div>
        </div>

        {/* Details */}
        <div className='flex justify-between p-4'>
          <div className='text-left'>
            <h4 className='font-bold text-xl mb-2'>{product.size} Yard Skip</h4>
            <p className='text-gray-400'>{product.hire_period_days} days hire period</p>
          </div>
          <div className='text-right'>
            <h4 className='font-bold text-xl mb-2'>£{product.price_before_vat}</h4>
            {
              product.transport_cost && (
                <div
                  className='flex items-center text-gray-300 gap-2'
                  title='Transport Cost'
                >
                  <TbTruckDelivery className='text-lg' size={24} />
                  <h4 className='font-bold'>£{product.transport_cost}</h4>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard