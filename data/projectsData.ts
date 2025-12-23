interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Parsely - AI 文档转换',
    description: `将复杂文档高达 97% 准确率转换为优美的 Markdown。支持 PDF、Word、PPT、Excel、视频等多种格式。通过无缝工作流与智能处理，工作效率提升 10 倍。`,
    href: 'http://106.15.107.220:8501/',
  },
  {
    title: '行云计算器',
    description: `高颜值超好用的日常计算器，支持iOS、MacOS。`,
    href: 'http://wersling.cn/',
  },
  {
    title: 'TomatoBar',
    description: `用 AI 开发一款强制锁屏的番茄钟软件，让孩子无法逃避休息时间。仅支持MacOS。`,
    href: 'https://github.com/wersling/TomatoBar',
  },
  {
    title: 'AI训练师考试练习系统',
    description: `一个基于 React + Node.js 的全栈答题练习系统，前端使用 React + TypeScript + Vite，后端使用 Node.js + Express。`,
    href: 'https://ai-practice.wersling.cn',
  },
]

export default projectsData
