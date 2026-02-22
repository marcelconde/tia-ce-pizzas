'use client'

import { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce'

interface CepResult {
  logradouro: string
  bairro: string
  cidade: string
  uf: string
}

interface UseCepLookupReturn {
  loading: boolean
  error: string | null
  address: CepResult | null
}

export function useCepLookup(cep: string): UseCepLookupReturn {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [address, setAddress] = useState<CepResult | null>(null)

  const cleanCep = cep.replace(/\D/g, '')
  const debouncedCep = useDebounce(cleanCep, 500)

  useEffect(() => {
    if (debouncedCep.length !== 8) {
      setAddress(null)
      setError(null)
      return
    }

    const fetchAddress = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/cep/${debouncedCep}`)
        const data = await response.json()

        if (!response.ok || data.error) {
          setError('CEP não encontrado')
          setAddress(null)
          return
        }

        setAddress({
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf,
        })
      } catch {
        setError('Erro ao buscar CEP')
        setAddress(null)
      } finally {
        setLoading(false)
      }
    }

    fetchAddress()
  }, [debouncedCep])

  return { loading, error, address }
}
