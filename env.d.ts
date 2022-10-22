/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_REQUESTER_BASE_URL: string
  readonly VITE_REQUESTER_TIMEOUT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
