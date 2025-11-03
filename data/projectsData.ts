interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Parsely - AI Document Conversion',
    description: `Convert complex documents to beautiful Markdown with 97% accuracy. 
    Supporting PDF, Word, PowerPoint, Excel, video and more formats. Boost your 
    productivity 10x through seamless workflow and intelligent processing.`,
    href: 'http://106.15.107.220:8501/',
  },
]

export default projectsData
