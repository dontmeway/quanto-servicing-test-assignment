import compose from 'compose-function'
import { withChakra } from './withChakra'
import { withQueryClient } from './withQueryClient'
import { withSuspense } from './withSuspense'

export const withProviders = compose(withChakra, withSuspense, withQueryClient)