import { useMemo } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

export const useTailwind = () => useMemo(() => resolveConfig(tailwindConfig), [])
