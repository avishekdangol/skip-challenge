import { useState } from 'react'
import useSkips from '@/hooks/useSkips'
import ProductCard from '@/components/ProductCard'
import ProductSkeleton from '@/components/ProductSkeleton'
import SelectedSkipDetails from '@/components/SelectedSkipDetails'

function Skips() {
  const { skips, loading, error } = useSkips()
  const [selectedSkip, setSelectedSkip] = useState(null)
  const [sortedSkips, setSortedSkips] = useState([])

  function sortSkips(event) {
    const sortBy = event.target.value
    let sortedSkips = [...skips]

    if (sortBy === 'price-asc') {
      sortedSkips.sort((a, b) => a.price_before_vat - b.price_before_vat)
    } else if (sortBy === 'price-desc') {
      sortedSkips.sort((a, b) => b.price_before_vat - a.price_before_vat)
    } else if (sortBy === 'size-asc') {
      sortedSkips.sort((a, b) => a.size - b.size)
    } else if (sortBy === 'size-desc') {
      sortedSkips.sort((a, b) => b.size - a.size)
    } else {
      sortedSkips = []
    }

    setSortedSkips(sortedSkips) 
  }

  return (
    <div className='flex flex-col min-h-screen w-full'>
      {/* Header */}
      <div className='mb-8'>
        <h3 className='text-2xl font-bold'>Choose Your Skip Size</h3>
        <p className='text-gray-400'>Select the skip size that best suits your needs.</p>
      </div>

      {/* Filters */}
      <div className='mb-6 text-right'>
        <select
          id='sort-filter'
          className='border border-gray-300 rounded bg-white text-black p-2'
          onChange={sortSkips}
        >
          <option value=''>Sort by</option>
          <option value='price-asc'>Price: Lowest to Highest</option>
          <option value='price-desc'>Price: Highest to Lowest</option>
          <option value='size-asc'>Size: Small to Large</option>
          <option value='size-desc'>Size: Large to Small</option>
        </select>
      </div>

      {/* Loader */}
      {loading && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Error */}
      {error && <p className='text-center text-red-500'>Error: {error}</p>}

      {/* Skips List */}
      <div className={`grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 w-full ${selectedSkip ? 'md:mb-48 mb-72' : ''}`}>
        {
          (sortedSkips.length > 0 ? sortedSkips : skips).map(skip => (
          <ProductCard
            key={skip.id}
            product={skip}
            onSelect={() => {
              if (selectedSkip?.id === skip.id) {
                setSelectedSkip(null)
              } else {
                setSelectedSkip(skip);
              }
            }}
            selected={selectedSkip?.id === skip.id}
          />  
        ))
        }
      </div>

      {/* Selected Skip Details */}
      {
        selectedSkip && (
          <SelectedSkipDetails
            skip={selectedSkip}
            setSelectedSkip={setSelectedSkip}
          />
        )
      }
    </div>
  )
}

export default Skips