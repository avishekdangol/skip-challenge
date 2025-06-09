function SelectedSkipDetails({ skip, setSelectedSkip }) {
  return (
    <div className='fixed bottom-0 left-0 w-full'>
      <div className='backdrop-blur-md bg-gray-800/80 border border-gray-700/50 py-4 md:px-24 px-4 text-left shadow-lg'>
        <div className="md:flex items-end w-full">
          {/* Selected Skip Description */}
          <div className="w-full mb-2">
            <h4 className='font-bold'>Selected Skip</h4>
            <div className="flex items-center bg-gray-600 p-4 rounded shadow-lg md:w-1/2">
              <img
                src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
                alt={skip.size}
                className='w-16 h-16 object-cover rounded mr-4'
              />
              <div className='ml-1'>
                <p className='font-bold'>{skip.size} Yard Skip</p>
                <div className="flex font-semibold">
                  <p>£{skip.price_before_vat}</p>
                  {skip.transport_cost && (
                    <p>+ £{skip.transport_cost} Transport</p>
                  )}
                </div>
                <small className='text-gray-300'>{skip.hire_period_days} days hire period</small>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className='ml-auto flex gap-4'>
            <button
              className='cursor-pointer bg-gray-500 text-white px-6 py-2 rounded shadow hover:bg-gray-400 transition-colors w-1/2'
              onClick={() => setSelectedSkip(null)}
            >
              Back
            </button>
            <button
              className='cursor-pointer bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 transition-colors w-1/2'
              onClick={() => alert(`Proceeding with ${skip.size} Yard Skip`)}
            >
              Continue
            </button>
          </div>
        </div>

        <small className='text-xs md:text-sm text-gray-400'>
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
        </small>
      </div>
    </div>
  )
}

export default SelectedSkipDetails;