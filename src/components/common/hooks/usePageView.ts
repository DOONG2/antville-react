import GA4React from 'ga-4-react'
import { useEffect } from 'react'
export default function usePageView(title: string) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      if (GA4React.isInitialized()) {
        const ga4 = GA4React.getGA4React()
        if (ga4) {
          ga4.pageview(
            window.location.pathname + window.location.search,
            window.location,
            title
          )
        }
      } else {
        const ga4React = new GA4React('G-W1N0NF60VB', {
          debug_mode: process.env.NODE_ENV !== 'production',
          send_page_view: process.env.NODE_ENV === 'production',
        })
        ga4React
          .initialize()
          .then((ga4) => {
            ga4.pageview(
              window.location.pathname + window.location.search,
              window.location,
              title
            )
          })
          .catch((_) => {})
      }
    }
  }, [])
}
