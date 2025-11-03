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
]

export default projectsData
