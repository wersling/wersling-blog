# SEO 优化指南

## 已完成的优化

### 1. 基础元数据优化

#### 标题和描述优化
- ✅ **网站标题**：从 "Sean's Blog" 更新为 "Sean's Blog - AI、RAG 和技术分享"
  - 包含关键词，更有利于搜索引擎理解网站主题
  
- ✅ **描述优化**：添加了详细的中文描述
  - 原：`Sean's blog about AI, RAG, and other cool stuff`
  - 新：`分享 AI、RAG、机器学习、深度学习、编程技术和个人成长的技术博客。探索人工智能前沿技术，记录开发实践经验。`

#### 关键词设置
添加了核心关键词列表：
```javascript
keywords: [
  'AI',
  'RAG',
  '人工智能',
  '机器学习',
  '深度学习',
  '技术博客',
  '编程',
  'Python',
  'TypeScript',
  'Next.js',
  '个人成长',
]
```

### 2. Open Graph 和社交媒体优化

- ✅ 修正 locale 为 `zh_CN`（之前是 `en_US`）
- ✅ 添加完整的 Twitter Card 元数据
- ✅ 设置作者和创建者信息

### 3. 结构化数据

- ✅ `robots.txt` 已配置
- ✅ `sitemap.xml` 已配置
- ✅ RSS feed 已启用

### 4. 技术 SEO

- ✅ **语义化 HTML**：使用正确的 `lang` 属性（zh-cn）
- ✅ **响应式设计**：移动端友好
- ✅ **性能优化**：Next.js 14+ 自动优化
- ✅ **图片优化**：使用 Next.js Image 组件

## 需要手动配置的项目

### 1. Google Search Console 验证

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加你的网站 `https://blog.wersling.cn`
3. 选择 HTML 标签验证方式，获取验证代码
4. 在 `.env.local` 中添加：
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code
```

### 2. 百度站长平台验证

1. 访问 [百度站长平台](https://ziyuan.baidu.com/)
2. 添加网站并验证
3. 提交 sitemap：`https://blog.wersling.cn/sitemap.xml`

### 3. 创建/优化 Social Banner

当前社交分享图片：`/static/images/twitter-card.png`

**建议尺寸**：
- Open Graph：1200 x 630 px
- Twitter Card：1200 x 675 px

**设计建议**：
- 包含网站名称和标语
- 使用品牌颜色
- 确保文字清晰可读

### 4. 优化文章 SEO

每篇博客文章应包含：

```mdx
---
title: '文章标题 - 简洁且包含关键词'
date: '2024-01-01'
tags: ['AI', 'Python', '机器学习']
draft: false
summary: '文章摘要，150-160字符，包含核心关键词'
images: ['/static/images/article-banner.jpg']
---
```

**文章优化建议**：
- ✅ 使用 H1-H6 标题层级
- ✅ 添加内部链接
- ✅ 优化图片 alt 文本
- ✅ 保持 URL 简洁友好
- ✅ 添加相关标签

## 进阶 SEO 优化

### 1. 结构化数据（Schema.org）

考虑添加以下结构化数据：

#### Article Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "文章标题",
  "author": {
    "@type": "Person",
    "name": "SeanZou"
  },
  "datePublished": "2024-01-01",
  "description": "文章描述"
}
```

#### Person Schema（关于页面）
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "SeanZou",
  "url": "https://blog.wersling.cn",
  "sameAs": [
    "https://github.com/wersling"
  ]
}
```

### 2. 性能优化

#### 已实现
- ✅ Next.js 自动代码分割
- ✅ 图片懒加载
- ✅ 静态生成（SSG）

#### 建议添加
- [ ] 启用 HTTP/2
- [ ] 压缩资源（Gzip/Brotli）
- [ ] CDN 加速
- [ ] 预加载关键资源

### 3. 内容策略

#### 关键词研究
使用工具：
- Google Keyword Planner
- 百度指数
- 5118

#### 内容更新
- 定期发布高质量原创内容
- 更新旧文章保持时效性
- 建立内部链接网络

### 4. 外部链接建设

- 在 GitHub README 中链接博客
- 社交媒体分享
- 技术社区（掘金、CSDN等）分享
- 参与相关论坛讨论

## SEO 检查清单

### 上线前检查

- [x] 网站标题和描述优化
- [x] 关键词设置
- [x] Open Graph 标签
- [x] Twitter Card 标签
- [x] robots.txt 配置
- [x] sitemap.xml 生成
- [x] RSS feed 启用
- [x] 移动端响应式
- [x] 页面加载速度
- [ ] Google Search Console 验证
- [ ] 百度站长平台验证
- [ ] Social Banner 图片优化

### 定期检查

- [ ] 检查死链接（每月）
- [ ] 更新 sitemap（自动）
- [ ] 监控搜索排名
- [ ] 分析用户行为（Google Analytics/Umami）
- [ ] 优化加载速度
- [ ] 检查移动端体验

## 有用的工具

### SEO 分析
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 结构化数据测试
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

### 性能测试
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

### 关键词研究
- [Google Trends](https://trends.google.com/)
- [百度指数](https://index.baidu.com/)
- [5118](https://www.5118.com/)

## 监控和分析

### 已集成的分析工具
1. ✅ Google Analytics (G-5LZ445CMN0)
2. ✅ Umami Analytics（需配置环境变量）
3. ✅ Vercel Web Analytics

### 监控指标
- 页面浏览量（PV）
- 独立访客（UV）
- 跳出率
- 平均停留时间
- 搜索排名
- 索引页面数量

## 下一步行动

1. **立即行动**：
   - [ ] 配置 Google Search Console 验证码
   - [ ] 注册百度站长平台
   - [ ] 创建/优化 Social Banner 图片

2. **本周完成**：
   - [ ] 检查所有博客文章的元数据
   - [ ] 优化文章标题和摘要
   - [ ] 添加内部链接

3. **持续优化**：
   - [ ] 定期发布高质量内容
   - [ ] 监控 SEO 性能
   - [ ] 根据数据调整策略

## 参考资源

- [Next.js SEO 指南](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google 搜索中心](https://developers.google.com/search)
- [百度搜索资源平台](https://ziyuan.baidu.com/college/index)

