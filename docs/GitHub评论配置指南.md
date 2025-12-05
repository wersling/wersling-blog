# GitHub 评论配置指南（Giscus）

本博客使用 Giscus 评论系统，它基于 GitHub Discussions，可以让读者使用 GitHub 账号进行评论。

## 配置步骤

### 1. 启用 GitHub Discussions

1. 打开你的 GitHub 仓库：https://github.com/wersling/wersling-blog
2. 点击 **Settings** 标签
3. 向下滚动到 **Features** 区域
4. 勾选 **Discussions** 复选框来启用讨论功能

### 2. 安装 Giscus App

1. 访问 https://github.com/apps/giscus
2. 点击 **Install** 按钮
3. 选择安装到 **wersling/wersling-blog** 仓库（或选择所有仓库）
4. 授权应用访问权限

### 3. 配置 Giscus

1. 访问 https://giscus.app/zh-CN
2. 在 **仓库** 部分填写：`wersling/wersling-blog`
3. 等待验证通过（会显示绿色的成功消息）

#### 3.1 页面 ↔️ discussion 映射关系

建议选择：
- ✅ **Discussion 的标题包含页面的 pathname**（已配置）

#### 3.2 Discussion 分类

- 选择一个分类，建议创建一个新分类，例如：
  - 分类名称：**博客评论** 或 **Comments**
  - 描述：用于博客文章的评论讨论
  - 格式：建议选择 **Announcement** 类型

#### 3.3 特性

建议配置：
- ✅ **启用反应**（reactions: '1'）
- ❌ **仅输出元数据**（metadata: '0'）
- 懒加载评论：通过按钮加载（已在代码中实现）

#### 3.4 主题

- 浅色模式：**light**
- 深色模式：**transparent_dark**（已配置）

### 4. 获取配置参数

在 Giscus 配置页面底部的 **启用 giscus** 部分，你会看到类似这样的代码：

```html
<script src="https://giscus.app/client.js"
        data-repo="wersling/wersling-blog"
        data-repo-id="R_xxxxxxxxxxxxx"
        data-category="博客评论"
        data-category-id="DIC_xxxxxxxxxxxxx"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```

记录下以下参数：
- `data-repo`: 你的仓库名（wersling/wersling-blog）
- `data-repo-id`: 仓库 ID（R_开头的字符串）
- `data-category`: 分类名称
- `data-category-id`: 分类 ID（DIC_开头的字符串）

### 5. 配置环境变量

#### 本地开发环境

在项目根目录创建 `.env.local` 文件：

```bash
# Giscus 评论系统配置
NEXT_PUBLIC_GISCUS_REPO=wersling/wersling-blog
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=R_xxxxxxxxxxxxx
NEXT_PUBLIC_GISCUS_CATEGORY=博客评论
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_xxxxxxxxxxxxx
```

⚠️ **注意**：
- 将 `R_xxxxxxxxxxxxx` 替换为你从 Giscus 获取的实际 Repository ID
- 将 `DIC_xxxxxxxxxxxxx` 替换为你的实际 Category ID
- `.env.local` 文件不会被提交到 Git（已在 .gitignore 中）

#### 生产环境（Vercel）

1. 登录 Vercel Dashboard：https://vercel.com/
2. 选择你的项目：wersling-blog
3. 进入 **Settings** → **Environment Variables**
4. 添加以下环境变量：

| Name | Value | Environment |
|------|-------|-------------|
| `NEXT_PUBLIC_GISCUS_REPO` | `wersling/wersling-blog` | Production, Preview, Development |
| `NEXT_PUBLIC_GISCUS_REPOSITORY_ID` | `R_xxxxxxxxxxxxx` | Production, Preview, Development |
| `NEXT_PUBLIC_GISCUS_CATEGORY` | `博客评论` | Production, Preview, Development |
| `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | `DIC_xxxxxxxxxxxxx` | Production, Preview, Development |

5. 点击 **Save** 保存
6. 重新部署项目以应用新的环境变量

### 6. 测试评论功能

#### 本地测试

```bash
# 确保已创建 .env.local 文件并配置正确的环境变量
yarn dev
```

访问 http://localhost:3000，打开任意博客文章，点击"加载评论"按钮，应该能看到 Giscus 评论组件加载。

#### 生产环境测试

1. 部署到 Vercel 后，访问你的博客文章页面
2. 点击"加载评论"按钮
3. 使用 GitHub 账号登录
4. 发表测试评论
5. 检查 GitHub 仓库的 Discussions 区域，确认评论已创建

## 故障排查

### 评论组件无法加载

1. **检查环境变量**：确保所有 `NEXT_PUBLIC_GISCUS_*` 变量都已正确配置
2. **检查仓库权限**：确保仓库是公开的（Public）
3. **检查 Discussions**：确保仓库已启用 Discussions 功能
4. **检查 Giscus App**：确认 Giscus App 已正确安装到仓库

### 无法发表评论

1. **GitHub 登录**：确保已使用 GitHub 账号登录
2. **仓库权限**：检查用户是否有权限在仓库中创建 Discussions
3. **分类设置**：确认选择的分类存在且可用

### 评论不显示

1. **映射方式**：确认 `mapping: 'pathname'` 配置正确
2. **刷新缓存**：清除浏览器缓存后重试
3. **检查 Console**：打开浏览器开发者工具，查看是否有错误信息

## 其他评论系统选项

如果不想使用 Giscus，你也可以选择以下替代方案：

### Utterances

基于 GitHub Issues 的轻量级评论系统。

修改 `data/siteMetadata.js`：

```javascript
comments: {
  provider: 'utterances',
  utterancesConfig: {
    repo: 'wersling/wersling-blog',
    issueTerm: 'pathname',
    label: 'comment',
    theme: 'github-light',
    darkTheme: 'github-dark',
  },
},
```

### Disqus

传统的第三方评论系统，功能强大但较重。

```javascript
comments: {
  provider: 'disqus',
  disqusConfig: {
    shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
  },
},
```

## 参考资料

- [Giscus 官方文档](https://giscus.app/zh-CN)
- [GitHub Discussions 文档](https://docs.github.com/cn/discussions)
- [Pliny 评论组件文档](https://github.com/timlrx/pliny)

## 当前配置状态

✅ 代码已配置 Giscus
✅ 懒加载评论功能已实现（点击按钮加载）
⚠️ 需要配置环境变量
⚠️ 需要在 GitHub 仓库启用 Discussions
⚠️ 需要安装 Giscus App

