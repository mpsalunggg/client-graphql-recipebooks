import {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
  useEffect,
} from 'react'

type AlertType = 'success' | 'error'

type AlertContextType = {
  alertMessage: string | null
  alertType: AlertType | null
  showAlert: (message: string, type: AlertType) => void
  hideAlert: () => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null)
  const [alertType, setAlertType] = useState<AlertType | null>(null)
  const [timeoutId, setTimeoutId] = useState<number | null>(null)

  const showAlert = (message: string, type: AlertType) => {
    setAlertMessage(message)
    setAlertType(type)
    // Hentikan timeout sebelumnya jika ada
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }

    // Mulai timeout baru
    const newTimeoutId = window.setTimeout(() => {
      hideAlert()
    }, 2500)

    // Simpan timeout ID di state
    setTimeoutId(newTimeoutId)
  }

  const hideAlert = () => {
    setAlertMessage(null)
    setAlertType(null)

    if (timeoutId !== null) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
  }

  useEffect(() => {
    // Cleanup timeout saat komponen di-unmount
    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  return (
    <AlertContext.Provider
      value={{ alertMessage, alertType, showAlert, hideAlert }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider')
  }
  return context
}
