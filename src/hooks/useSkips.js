import { useEffect, useState } from "react"
import api from "@/services/api"

function useSkips() {
  const [skips, setSkips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const fetchSkips = async () => {
      try {
        const response = await api.get('/skips/by-location?postcode=NR32&area=Lowestoft', { signal })
        setSkips(response.data)
        console.log(response.data)
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message || 'Failed to fetch skips')
        }
      } finally {
        setLoading(false)
      }
    };

    fetchSkips()
  }, [])

  return { skips, loading, error }
}

export default useSkips