import { useGlobalLoading } from '../../hooks/useGlobalLoading.js'

/** Wires global click + route-change behavior into the loading context. */
export default function GlobalLoadingHandler() {
  useGlobalLoading()
  return null
}
