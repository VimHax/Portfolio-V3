interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
