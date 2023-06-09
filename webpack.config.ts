import type webpack from 'webpack'
import { buildWebPackConfig } from './config/build/buildWebPackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode ?? 'development'
  const PORT = env.port ?? 3000
  const apiUrl = env?.apiUrl || 'https://crb29.ru/api/'

  const config: webpack.Configuration = buildWebPackConfig({
    mode,
    paths,
    isDev: mode === 'development',
    port: PORT,
    apiUrl
  })

  return config
}
