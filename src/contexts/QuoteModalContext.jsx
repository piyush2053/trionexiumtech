import { createContext, useContext, useMemo, useState } from 'react'
import QuoteModal from '../components/QuoteModal'

const QuoteModalContext = createContext(null)

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openQuoteModal = () => setIsOpen(true)
  const closeQuoteModal = () => setIsOpen(false)

  const value = useMemo(() => ({ openQuoteModal, closeQuoteModal }), [])

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeQuoteModal} />
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (!context) {
    throw new Error('useQuoteModal must be used within QuoteModalProvider')
  }
  return context
}
