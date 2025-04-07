import { useCallback, useEffect, useState } from "react"
import type { CardResponseList } from "~/interfaces/CardResponse"

export const LOCAL_STORAGE_KEY = "searchTerm"

export const useSearchTermState = () => {
  // save the search term in local storage
  const [term, _setTerm] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("searchTerm") || ""
    }
    return ""
  })
  const [response, setResponse] = useState<CardResponseList | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // save to local storage on change
  const setTerm = (value: string) => {
    _setTerm(value)
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, value)
    }
  }
  const clearTerm = () => {
    setTerm("")
    if (typeof window !== "undefined") {
      localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
  }
  const searchCards = useCallback((term: string) => {
    setLoading(true)
    setError(null)
    if (typeof window !== "undefined") {
      const encodedTerm = encodeURIComponent(term)
      fetch(`https://api.scryfall.com/cards/search?q=${encodedTerm}`)
        .then(res => {
          if (!res.ok) {
            throw new Error("Network response was not ok")
          }
          return res.json()
        })
        .then(data => {
          if (!data.data) {
            throw new Error("No data found")
          }
          // if (data.data.length === 0) {
          //     throw new Error("No cards found");
          // }
          setResponse(data)
          setLoading(false)
        })
        .catch(err => {
          setError(err)
          setLoading(false)
        })
    }
  }, [])
  useEffect(() => {
    // check if local storage is available
    if (typeof window !== "undefined") {
      const storedTerm = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedTerm) {
        searchCards(storedTerm)
        setTerm(storedTerm)
      }
    }
  }, [])
  return {
    term,
    setTerm,
    clearTerm,
    response,
    setResponse,
    loading,
    setLoading,
    error,
    setError,
    searchCards,
  }
}
