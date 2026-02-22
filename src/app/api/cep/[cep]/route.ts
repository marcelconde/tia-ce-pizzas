import { NextResponse } from 'next/server'
import { fetchAddressByCep } from '@/lib/viacep'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ cep: string }> }
) {
  const { cep } = await params

  const cleanCep = cep.replace(/\D/g, '')

  if (cleanCep.length !== 8) {
    return NextResponse.json(
      { error: 'CEP deve ter 8 dígitos' },
      { status: 400 }
    )
  }

  const address = await fetchAddressByCep(cleanCep)

  if (!address) {
    return NextResponse.json(
      { error: 'CEP não encontrado' },
      { status: 404 }
    )
  }

  return NextResponse.json(address)
}
