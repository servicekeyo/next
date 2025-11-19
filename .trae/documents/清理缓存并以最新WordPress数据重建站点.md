## 目标
- 删除构建与运行期缓存
- 以「最新的 WordPress 数据」重新打包生成静态站点

## 背景说明
- WordPress API 地址读取自 `WORDPRESS_API_URL` 环境变量（src/lib/wordpress.ts:13）。
- 数据获取多处使用 `cache: 'force-cache'`（src/lib/wordpress.ts:19-22, 77-79, 103-106, 114-118, 126-129），意味着「在构建时抓取并固化到静态输出」，要更新数据需重新构建。
- 首页声明 `dynamic = 'force-static'` 且 `revalidate = false`（src/app/page.tsx:12-13），因此不会在运行时再次请求，必须重新打包才能生效。

## 执行步骤
### 1) 停止开发服务器（如正在运行）
- 关闭正在运行的本地 dev 进程，避免占用 `.next` 目录与锁定文件。

### 2) 清理缓存与构建产物
- 删除以下目录与文件（Windows PowerShell）：
  - `.next`（上次构建产物）
  - `.turbo`（Turbopack 增量缓存，若存在）
  - `node_modules\._cache` 或 `node_modules\.cache`（工具缓存，若存在）
  - `.eslintcache`（ESLint 缓存，若存在）
- 参考命令：
  - `if (Test-Path .next) { Remove-Item -Recurse -Force .next }`
  - `if (Test-Path .turbo) { Remove-Item -Recurse -Force .turbo }`
  - `if (Test-Path node_modules\.cache) { Remove-Item -Recurse -Force node_modules\.cache }`
  - `if (Test-Path .eslintcache) { Remove-Item -Force .eslintcache }`

### 3) 校验 WordPress API 配置
- 确认 `.env.local` 中 `WORDPRESS_API_URL` 指向正确的生产/目标站点。
- 如未设置，将使用默认 `https://admin.keyfirebbq.com/wp-json/wp/v2`（src/lib/wordpress.ts:13）。

### 4) 重新打包（以最新数据）
- 执行：`npm run build`
- Turbopack 构建阶段会按上述 `force-cache` 策略重新拉取 WordPress 最新数据并固化到静态页面。

### 5) 构建验证
- 检查构建输出路由列表与完成状态，确保无错误。
- 可选：运行 `npm run start` 进行本地预览，快速确认首页、博客列表与详情页的数据已更新。

## 可选增强
- 若需要对部分页面支持运行时更新（而非每次都重建）：将对应页面的 `revalidate` 设置为一个正数（例如 `revalidate = 600`），或在请求中使用 `cache: 'no-store'`（参考 src/lib/wordpress.ts:49）。
- 为避免外部网络抖动影响构建，可在失败分支提供后备数据或重试逻辑（现有代码已在多处提供兜底数组返回）。

请确认以上计划，我将按此执行清理、拉取并重新打包。