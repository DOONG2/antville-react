import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import store from './features/store'
import * as dotenv from 'dotenv'
import { WebsocketProvider } from 'src/websocket/websocket'

dotenv.config()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WebsocketProvider>
          <App />
        </WebsocketProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
