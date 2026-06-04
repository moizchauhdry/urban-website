import { normalizeDeployPath } from './deployPath.js'

/** Upload dist/ to `/var/www/urbanelitelimo/connecticut-black-car-service/` */
export const DEPLOY_PATH = normalizeDeployPath(import.meta.env.VITE_DEPLOY_PATH)

export const DEPLOY_SEGMENT = DEPLOY_PATH.replace(/^\/|\/$/g, '')
