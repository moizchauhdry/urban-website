import { normalizeDeployPath } from './deployPath.js'

/** Where `dist/` is uploaded once, e.g. `/var/www/urbanelitelimo/urban-app/` */
export const DEPLOY_PATH = normalizeDeployPath(import.meta.env.VITE_DEPLOY_PATH)

export const DEPLOY_SEGMENT = DEPLOY_PATH.replace(/^\/|\/$/g, '')
