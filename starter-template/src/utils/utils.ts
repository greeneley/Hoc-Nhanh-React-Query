import { useSearchParams } from 'react-router-dom'
import axios, { AxiosError } from 'axios'

export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}
