/**
 * 浙江海洋大学 (ZJOU) 课程与期末考试资料共享站 - 核心数据体系
 */

// ================= 1. 往年期末试卷 - 按科目归类 =================
const EXAM_SUBJECTS = [
  {
    id: "math",
    name: "高等数学",
    title: "《高等数学》",
    icon: "📐",
    type: "通识核心必修课",
    description: "按年份与专业班级从新到旧整理的高等数学历年期末统考真题试卷PDF原件合集（涵盖2023-2024、2021-2022、2020-2021学年）。",
    papers: [
      // ----------- 2023-2024 学年 -----------
      {
        id: "math-2023-cs",
        title: "2023-2024学年《高等数学A1》期末考试卷（A23计算机1、2班，B23物理2班）",
        tag: "期末真题",
        year: "2023-2024",
        fileType: "pdf",
        fileSize: "320 KB",
        description: "2023级第一学期《高等数学A1》期末统考试卷真题PDF原件，适用专业班级：A23计算机科学与技术1、2班，B23物理2班。",
        contributor: "浙海大学子",
        updateTime: "2024-01-15",
        localUrl: "js/Exam-Resources/高数/高等数学A1（ A23计算机1、2，B23物理2）.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/高数/高等数学A1（ A23计算机1、2，B23物理2）.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/高数/高等数学A1（ A23计算机1、2，B23物理2）.pdf", isDirect: true }
        ]
      },
      {
        id: "math-2023-ee",
        title: "2023-2024学年《高等数学A1》期末考试卷（A23电信1、2班，A23机器人工程）",
        tag: "期末真题",
        year: "2023-2024",
        fileType: "pdf",
        fileSize: "268 KB",
        description: "2023级第一学期《高等数学A1》期末统考试卷真题PDF原件，适用专业班级：A23电子信息工程1、2班，A23机器人工程班。",
        contributor: "浙海大学子",
        updateTime: "2024-01-15",
        localUrl: "js/Exam-Resources/高数/高等数学A1（A23电信1、2，A23机器人）.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/高数/高等数学A1（A23电信1、2，A23机器人）.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/高数/高等数学A1（A23电信1、2，A23机器人）.pdf", isDirect: true }
        ]
      },

      // ----------- 2021-2022 学年 -----------
      {
        id: "math-2022-a",
        title: "2021-2022学年《高等数学A》期末统考试卷(A卷)",
        tag: "期末真题",
        year: "2021-2022",
        fileType: "pdf",
        fileSize: "200 KB",
        description: "浙江海洋大学2021-2022学年《高等数学A》期末统考真题试卷A卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2022-01-12",
        localUrl: "js/Exam-Resources/高数/2022高数A.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/高数/2022高数A.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/高数/2022高数A.pdf", isDirect: true }
        ]
      },

      // ----------- 2020-2021 学年 -----------
      {
        id: "math-2020-a2",
        title: "2020-2021学年《高等数学A2》课程期末考试卷(A卷)",
        tag: "期末真题",
        year: "2020-2021",
        fileType: "pdf",
        fileSize: "196 KB",
        description: "浙江海洋大学2020-2021学年第二学期《高等数学A2》课程期末统考试卷A卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2021-06-20",
        localUrl: "js/Exam-Resources/高数/2020-2021年《 高等数学A2 》课程期末考试卷(A)(2).pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/高数/2020-2021年《 高等数学A2 》课程期末考试卷(A)(2).pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/高数/2020-2021年《 高等数学A2 》课程期末考试卷(A)(2).pdf", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "linear-algebra",
    name: "线性代数",
    title: "《线性代数》",
    icon: "🔢",
    type: "通识核心必修课",
    description: "按年份从新至旧整理的浙江海洋大学《线性代数》历年期末统考A/B/C卷试卷PDF原件合集（涵盖2021-2022、2020-2021、2019-2020学年）。",
    papers: [
      // ----------- 2021-2022 学年 -----------
      {
        id: "la-2021-2022-1-a",
        title: "浙江海洋大学《线性代数》2021-2022学年第一学期期末试卷A卷",
        tag: "期末真题",
        year: "2021-2022",
        fileType: "pdf",
        fileSize: "3.5 MB",
        description: "2021-2022学年第一学期《线性代数》期末统考真题A卷PDF原件，包含行列式计算、矩阵特征值与特征向量、二次型等考题。",
        contributor: "浙海大学子",
        updateTime: "2022-01-10",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷A卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷A卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷A卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2021-2022-1-b",
        title: "浙江海洋大学《线性代数》2021-2022学年第一学期期末试卷B卷",
        tag: "期末真题",
        year: "2021-2022",
        fileType: "pdf",
        fileSize: "3.8 MB",
        description: "2021-2022学年第一学期《线性代数》期末统考真题B卷PDF原件，包含向量组线性相关性、线性方程组求解大题。",
        contributor: "浙海大学子",
        updateTime: "2022-01-10",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷B卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷B卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷B卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2021-2022-1-c",
        title: "浙江海洋大学《线性代数》2021-2022学年第一学期期末试卷C卷",
        tag: "期末真题",
        year: "2021-2022",
        fileType: "pdf",
        fileSize: "3.8 MB",
        description: "2021-2022学年第一学期《线性代数》期末统考真题C卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2022-01-10",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷C卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷C卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022第一学期期末试卷C卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2021-2022-1-all",
        title: "浙江海洋大学《线性代数》2021-2022学年第一学期期末试卷 (统考合集)",
        tag: "期末真题",
        year: "2021-2022",
        fileType: "pdf",
        fileSize: "5.1 MB",
        description: "2021-2022学年第一学期《线性代数》期末统考完整试卷PDF扫描件。",
        contributor: "浙海大学子",
        updateTime: "2022-01-10",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022学年第一学期期末试卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022学年第一学期期末试卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2021-2022学年第一学期期末试卷.pdf", isDirect: true }
        ]
      },

      // ----------- 2020-2021 学年 -----------
      {
        id: "la-2020-2021-2-a",
        title: "浙江海洋大学《线性代数》2020-2021学年第二学期期末试卷A卷",
        tag: "期末真题",
        year: "2020-2021",
        fileType: "pdf",
        fileSize: "2.7 MB",
        description: "2020-2021学年第二学期《线性代数》期末考试真题A卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2021-06-25",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷A卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷A卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷A卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2020-2021-2-b",
        title: "浙江海洋大学《线性代数》2020-2021学年第二学期期末试卷B卷",
        tag: "期末真题",
        year: "2020-2021",
        fileType: "pdf",
        fileSize: "2.7 MB",
        description: "2020-2021学年第二学期《线性代数》期末考试真题B卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2021-06-25",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷B卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷B卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷B卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2020-2021-2-c",
        title: "浙江海洋大学《线性代数》2020-2021学年第二学期期末试卷C卷",
        tag: "期末真题",
        year: "2020-2021",
        fileType: "pdf",
        fileSize: "2.7 MB",
        description: "2020-2021学年第二学期《线性代数》期末考试真题C卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2021-06-25",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷C卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷C卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第二学期期末试卷C卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2020-2021-1-c",
        title: "浙江海洋大学《线性代数》2020-2021学年第一学期期末试卷C卷",
        tag: "期末真题",
        year: "2020-2021",
        fileType: "pdf",
        fileSize: "3.5 MB",
        description: "2020-2021学年第一学期《线性代数》期末考试真题C卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2021-01-15",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第一学期期末试卷C卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第一学期期末试卷C卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2020-2021第一学期期末试卷C卷.pdf", isDirect: true }
        ]
      },

      // ----------- 2019-2020 学年 -----------
      {
        id: "la-2019-2020-2-a",
        title: "浙江海洋大学《线性代数》2019-2020学年第二学期期末试卷A卷",
        tag: "期末真题",
        year: "2019-2020",
        fileType: "pdf",
        fileSize: "2.7 MB",
        description: "2019-2020学年第二学期《线性代数》期末考试真题A卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2020-06-28",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷A卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷A卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷A卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2019-2020-2-a-lite",
        title: "浙江海洋大学《线性代数》2019-2020学年第二学期期末试卷A (精简版)",
        tag: "期末真题",
        year: "2019-2020",
        fileType: "pdf",
        fileSize: "308 KB",
        description: "2019-2020学年第二学期《线性代数》期末统考试卷A卷精简版PDF。",
        contributor: "浙海大学子",
        updateTime: "2020-06-28",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷A.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷A.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷A.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2019-2020-2-b",
        title: "浙江海洋大学《线性代数》2019-2020学年第二学期期末试卷B卷",
        tag: "期末真题",
        year: "2019-2020",
        fileType: "pdf",
        fileSize: "5.2 MB",
        description: "2019-2020学年第二学期《线性代数》期末考试真题B卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2020-06-28",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷B.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷B.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷B.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2019-2020-2-c",
        title: "浙江海洋大学《线性代数》2019-2020学年第二学期期末试卷C卷",
        tag: "期末真题",
        year: "2019-2020",
        fileType: "pdf",
        fileSize: "2.7 MB",
        description: "2019-2020学年第二学期《线性代数》期末考试真题C卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2020-06-28",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷C卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷C卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第二学期期末试卷C卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2019-2020-1-b",
        title: "浙江海洋大学《线性代数》2019-2020学年第一学期期末试卷B卷",
        tag: "期末真题",
        year: "2019-2020",
        fileType: "pdf",
        fileSize: "2.7 MB",
        description: "2019-2020学年第一学期《线性代数》期末考试真题B卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2020-01-12",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第一学期期末试卷B卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第一学期期末试卷B卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第一学期期末试卷B卷.pdf", isDirect: true }
        ]
      },
      {
        id: "la-2019-2020-1-c",
        title: "浙江海洋大学《线性代数》2019-2020学年第一学期期末试卷C卷",
        tag: "期末真题",
        year: "2019-2020",
        fileType: "pdf",
        fileSize: "2.6 MB",
        description: "2019-2020学年第一学期《线性代数》期末考试真题C卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2020-01-12",
        localUrl: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第一学期期末试卷C卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第一学期期末试卷C卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/线性代数/浙江海洋大学《线性代数》2019-2020第一学期期末试卷C卷.pdf", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "phys",
    name: "大学物理",
    title: "《大学物理》",
    icon: "⚡",
    type: "通识基础必修课",
    description: "按年份从新到旧整理的浙江海洋大学《大学物理》历年期末统考真题试卷PDF原件合集（涵盖2022-2023、2020-2021学年）。",
    papers: [
      // ----------- 2022-2023 学年 -----------
      {
        id: "phys-2022-2-a",
        title: "2022-2023学年第二学期《大学物理》期末考试A卷",
        tag: "期末真题",
        year: "2022-2023",
        fileType: "pdf",
        fileSize: "502 KB",
        description: "浙江海洋大学2022-2023学年第二学期《大学物理》期末统考真题试卷A卷PDF原件，包含力学、热学、电磁学等大题计算及标准解答考点。",
        contributor: "浙海大学子",
        updateTime: "2023-06-25",
        localUrl: "js/Exam-Resources/大学物理/2022-2023-2期末卷物理考试A卷_20230908200034(2).pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/大学物理/2022-2023-2期末卷物理考试A卷_20230908200034(2).pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/大学物理/2022-2023-2期末卷物理考试A卷_20230908200034(2).pdf", isDirect: true }
        ]
      },

      // ----------- 2020-2021 学年 -----------
      {
        id: "phys-2020-2-a",
        title: "2020-2021学年第二学期《大学物理C》期末考试A卷",
        tag: "期末真题",
        year: "2020-2021",
        fileType: "pdf",
        fileSize: "208 KB",
        description: "浙江海洋大学2020-2021学年第二学期《大学物理C》期末统考真题A卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2021-06-20",
        localUrl: "js/Exam-Resources/大学物理/2020-2021-2大学物理C期末卷A(1).pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/大学物理/2020-2021-2大学物理C期末卷A(1).pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/大学物理/2020-2021-2大学物理C期末卷A(1).pdf", isDirect: true }
        ]
      },
      {
        id: "phys-2020-2-b",
        title: "2020-2021学年第二学期《大学物理C》期末考试B卷",
        tag: "期末真题",
        year: "2020-2021",
        fileType: "pdf",
        fileSize: "226 KB",
        description: "浙江海洋大学2020-2021学年第二学期《大学物理C》期末统考真题B卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2021-06-20",
        localUrl: "js/Exam-Resources/大学物理/2_2020-2021-2大学物理C期末卷B.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/大学物理/2_2020-2021-2大学物理C期末卷B.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/大学物理/2_2020-2021-2大学物理C期末卷B.pdf", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "co",
    name: "计算机组成原理",
    title: "《计算机组成原理》",
    icon: "🖥️",
    type: "计算机专业核心课",
    description: "按年份从新至旧整理的浙江海洋大学《计算机组成原理》历年期末统考A/B卷及详细参考答案PDF原件合集（涵盖2023-2024、2022-2023、2021-2022学年）。",
    papers: [
      // ----------- 2023-2024 学年 -----------
      {
        id: "co-2023-2024-a",
        title: "2023-2024学年《计算机组成原理》期末考试试卷A卷",
        tag: "期末真题",
        year: "2023-2024",
        fileType: "pdf",
        fileSize: "375 KB",
        description: "浙江海洋大学2023-2024学年《计算机组成原理》期末统考真题试卷A卷PDF原件，包含指令系统、CPU结构、存储系统大题计算与问答。",
        contributor: "浙海大学子",
        updateTime: "2024-01-15",
        localUrl: "js/Exam-Resources/计算机组成原理/2023-2024 计算机组成原理试卷A.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/计算机组成原理/2023-2024 计算机组成原理试卷A.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/计算机组成原理/2023-2024 计算机组成原理试卷A.pdf", isDirect: true }
        ]
      },
      {
        id: "co-2023-2024-ans",
        title: "2023-2024学年《计算机组成原理》试卷A参考答案（A21数科）",
        tag: "参考答案",
        year: "2023-2024",
        fileType: "pdf",
        fileSize: "356 KB",
        description: "2023-2024学年第一学期《计算机组成原理》试卷A标准参考答案与阅卷踩分点解析。",
        contributor: "浙海大学子",
        updateTime: "2024-01-15",
        localUrl: "js/Exam-Resources/计算机组成原理/2023-2024 A21数科《计算机组成原理》试卷A答案.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/计算机组成原理/2023-2024 A21数科《计算机组成原理》试卷A答案.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/计算机组成原理/2023-2024 A21数科《计算机组成原理》试卷A答案.pdf", isDirect: true }
        ]
      },

      // ----------- 2022-2023 学年 -----------
      {
        id: "co-2022-2023-a",
        title: "2022-2023学年《现代计算机组成原理》期末考试A卷（Z22计算机）",
        tag: "期末真题",
        year: "2022-2023",
        fileType: "pdf",
        fileSize: "508 KB",
        description: "浙江海洋大学2022-2023学年《现代计算机组成原理》期末统考试卷A卷PDF原件，适用专业班级：Z22计算机。",
        contributor: "浙海大学子",
        updateTime: "2023-01-10",
        localUrl: "js/Exam-Resources/计算机组成原理/2022-2023 Z22计算机《现代计算机组成原理》A卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/计算机组成原理/2022-2023 Z22计算机《现代计算机组成原理》A卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/计算机组成原理/2022-2023 Z22计算机《现代计算机组成原理》A卷.pdf", isDirect: true }
        ]
      },

      // ----------- 2021-2022 学年 -----------
      {
        id: "co-2021-2022-a",
        title: "2021-2022学年《计算机组成原理》期末考试A卷",
        tag: "期末真题",
        year: "2021-2022",
        fileType: "pdf",
        fileSize: "510 KB",
        description: "2021-2022学年《计算机组成原理》期末统考真题试卷A卷PDF原件。",
        contributor: "浙海大学子",
        updateTime: "2022-01-12",
        localUrl: "js/Exam-Resources/计算机组成原理/2021-2022《计算机组成原理》A卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/计算机组成原理/2021-2022《计算机组成原理》A卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/计算机组成原理/2021-2022《计算机组成原理》A卷.pdf", isDirect: true }
        ]
      },
      {
        id: "co-2021-2022-a20-a",
        title: "2021-2022学年《计算机组成原理》期末考试A卷（A20数科）",
        tag: "期末真题",
        year: "2021-2022",
        fileType: "pdf",
        fileSize: "528 KB",
        description: "2021-2022学年《计算机组成原理》期末统考试卷A卷PDF原件，适用专业班级：A20数科。",
        contributor: "浙海大学子",
        updateTime: "2022-01-12",
        localUrl: "js/Exam-Resources/计算机组成原理/2021-2022 A20数科《计算机组成原理》A卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/计算机组成原理/2021-2022 A20数科《计算机组成原理》A卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/计算机组成原理/2021-2022 A20数科《计算机组成原理》A卷.pdf", isDirect: true }
        ]
      },
      {
        id: "co-2021-2022-a20-b",
        title: "2021-2022学年《计算机组成原理》期末考试B卷（A20数科）",
        tag: "期末真题",
        year: "2021-2022",
        fileType: "pdf",
        fileSize: "487 KB",
        description: "2021-2022学年《计算机组成原理》期末统考试卷B卷PDF原件，适用专业班级：A20数科。",
        contributor: "浙海大学子",
        updateTime: "2022-01-12",
        localUrl: "js/Exam-Resources/计算机组成原理/2021-2022 A20数科《计算机组成原理》B卷.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Exam-Resources/计算机组成原理/2021-2022 A20数科《计算机组成原理》B卷.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/计算机组成原理/2021-2022 A20数科《计算机组成原理》B卷.pdf", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "db",
    name: "数据库",
    title: "《数据库原理及应用》",
    icon: "🗄️",
    type: "计算机/数据科学核心必修课",
    description: "按年份整理的浙江海洋大学《数据库原理及应用》期末统考真题试卷HTML原件题库（涵盖2024-2025学年第一学期）。",
    papers: [
      // ----------- 2024-2025 学年 -----------
      {
        id: "db-2024-2025-1-a",
        title: "2024-2025学年第一学期《数据库原理及应用》期末考试（A卷）判断与综合题库",
        tag: "期末真题",
        year: "2024-2025",
        fileType: "html",
        fileSize: "618 KB",
        description: "2024-2025学年第一学期《数据库原理及应用》期末考试真题（A卷）完整网页版试卷与判断题库，适用专业班级：A23数科1、2班。",
        contributor: "浙海大学子",
        updateTime: "2025-01-10",
        localUrl: "js/Exam-Resources/数据库/True or False - Problem List - 2024-2025-1 A23数科1，2 数据库原理及应用考试（A卷）.html",
        links: [
          { platform: "本地 HTML 网页真题直阅", url: "js/Exam-Resources/数据库/True or False - Problem List - 2024-2025-1 A23数科1，2 数据库原理及应用考试（A卷）.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/数据库/True or False - Problem List - 2024-2025-1 A23数科1，2 数据库原理及应用考试（A卷）.html", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "ds",
    name: "数据结构",
    title: "《数据结构》",
    icon: "🌲",
    type: "计算机/数据科学核心必修课",
    description: "按年份整理的浙江海洋大学《数据结构》期末统考真题试卷HTML原件题库（涵盖2024-2025学年第一学期）。",
    papers: [
      // ----------- 2024-2025 学年 -----------
      {
        id: "ds-2024-2025-1-a",
        title: "2024-2025学年第一学期《数据结构》期末考试真题与题库（A23数科1、2班）",
        tag: "期末真题",
        year: "2024-2025",
        fileType: "html",
        fileSize: "570 KB",
        description: "2024-2025学年第一学期《数据结构》期末统考真题判断与核心大题完整网页版试卷，适用专业班级：A23数科1、2班。",
        contributor: "浙海大学子",
        updateTime: "2025-01-10",
        localUrl: "js/Exam-Resources/数据结构/True or False - Problem List - 2024-2025-1 《数据结构》期末考试 A23数科1、2.html",
        links: [
          { platform: "本地 HTML 网页真题直阅", url: "js/Exam-Resources/数据结构/True or False - Problem List - 2024-2025-1 《数据结构》期末考试 A23数科1、2.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Exam-Resources/数据结构/True or False - Problem List - 2024-2025-1 《数据结构》期末考试 A23数科1、2.html", isDirect: true }
        ]
      }
    ]
  }
];

// ================= 2. 课程资料 - 按科目归类 =================
const COURSE_SUBJECTS = [
  {
    id: "os",
    name: "操作系统",
    title: "《操作系统》",
    icon: "💻",
    type: "计算机专业核心课",
    description: "涵盖《操作系统》期末复习提纲源文件PDF（OS课程复习提纲、操作系统复习提纲）。",
    papers: [
      {
        id: "os-001",
        title: "OS课程复习提纲(2).pdf",
        tag: "PDF源文件",
        year: "操作系统",
        fileType: "pdf",
        fileSize: "1.3 MB",
        description: "源文件：OS课程复习提纲(2).pdf。涵盖进程管理、死锁处理、内存管理与虚拟内存、文件系统与I/O设备管理等全书核心考点梳理。",
        contributor: "浙海大学子",
        updateTime: "2024-01-10",
        localUrl: "js/Subjects-Resources/操作系统/OS课程复习提纲(2).pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/操作系统/OS课程复习提纲(2).pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/操作系统/OS课程复习提纲(2).pdf", isDirect: true }
        ]
      },
      {
        id: "os-002",
        title: "操作系统复习提纲(2).pdf",
        tag: "PDF源文件",
        year: "操作系统",
        fileType: "pdf",
        fileSize: "253 KB",
        description: "源文件：操作系统复习提纲(2).pdf。精简版操作系统期末考前必背核心要点与大题解题技巧归纳。",
        contributor: "浙海大学子",
        updateTime: "2024-01-10",
        localUrl: "js/Subjects-Resources/操作系统/操作系统复习提纲(2).pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/操作系统/操作系统复习提纲(2).pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/操作系统/操作系统复习提纲(2).pdf", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "bigdata",
    name: "大数据技术与应用",
    title: "《大数据技术与应用》",
    icon: "📊",
    type: "专业进阶选修课",
    description: "涵盖《大数据技术与应用》平时练习题与期末复习题库Word文档（Hadoop、Spark、HBase等考点）。",
    papers: [
      {
        id: "bd-001",
        title: "《大数据技术与应用》平时练习题与期末复习题库",
        tag: "练习题库",
        year: "大数据技术",
        fileType: "doc",
        fileSize: "438 KB",
        description: "涵盖Hadoop分布式架构、MapReduce编程模型、HDFS工作原理、Spark生态等高频练习题与答案。",
        contributor: "浙海大学子",
        updateTime: "2024-01-10",
        localUrl: "js/Subjects-Resources/大数据技术与应用/练习题.doc",
        links: [
          { platform: "本地 DOC 下载", url: "js/Subjects-Resources/大数据技术与应用/练习题.doc", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/大数据技术与应用/练习题.doc", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "ml",
    name: "机器学习",
    title: "《机器学习》",
    icon: "🤖",
    type: "专业核心课程",
    description: "涵盖《机器学习》代码填空与简答PDF、单选&填空&问答题库PDF、题库表格XLSX等课程学习与复习资料。",
    papers: [
      {
        id: "ml-001",
        title: "代码填空 & 核心简答题解析",
        tag: "代码填空",
        year: "机器学习",
        fileType: "pdf",
        fileSize: "1.3 MB",
        description: "涵盖机器学习常用算法（决策树、SVM、K-Means、神经网络等）代码填空必背模板与核心概念简答题要点。",
        contributor: "浙海大学子",
        updateTime: "2024-01-10",
        localUrl: "js/Subjects-Resources/机器学习-信息工程学院/代码填空&简答.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/机器学习-信息工程学院/代码填空&简答.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/机器学习-信息工程学院/代码填空&简答.pdf", isDirect: true }
        ]
      },
      {
        id: "ml-002",
        title: "单选 & 填空 & 问答大题全集",
        tag: "复习题库",
        year: "机器学习",
        fileType: "pdf",
        fileSize: "1.5 MB",
        description: "期末与平时测验高频题库汇总，包含单选题、填空题与重点论述问答题详细答案。",
        contributor: "浙海大学子",
        updateTime: "2024-01-10",
        localUrl: "js/Subjects-Resources/机器学习-信息工程学院/单选&填空&问答.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/机器学习-信息工程学院/单选&填空&问答.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/机器学习-信息工程学院/单选&填空&问答.pdf", isDirect: true }
        ]
      },
      {
        id: "ml-003",
        title: "单选 & 多选 & 填空题库清单 (3 Sheet)",
        tag: "题库表格",
        year: "机器学习",
        fileType: "xlsx",
        fileSize: "35 KB",
        description: "Excel表格格式题库，包含单选、多选、填空3个工作表，方便搜索与自测刷题。",
        contributor: "浙海大学子",
        updateTime: "2024-01-10",
        localUrl: "js/Subjects-Resources/机器学习-信息工程学院/单选&多选&填空(3sheet).xlsx",
        links: [
          { platform: "本地 XLSX 下载", url: "js/Subjects-Resources/机器学习-信息工程学院/单选&多选&填空(3sheet).xlsx", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/机器学习-信息工程学院/单选&多选&填空(3sheet).xlsx", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "phys-exp",
    name: "物理实验",
    title: "《大学物理实验》",
    icon: "🔬",
    type: "基础实验必修课",
    description: "涵盖浙江海洋大学《大学物理实验》各项必做实验的标准示范报告PDF（含杨氏模量、分光计、静电场描绘、牛顿环、示波器使用等）。",
    papers: [
      {
        id: "pe-102",
        title: "（102）用拉伸法测金属丝的杨氏模量示范报告",
        tag: "实验示范",
        year: "物理实验",
        fileType: "pdf",
        fileSize: "208 KB",
        description: "包含实验原理、光杠杆放大法光路图、原始数据记录表、逐差法计算处理与不确定度分析。",
        contributor: "浙海大学子",
        updateTime: "2023-12-01",
        localUrl: "js/Subjects-Resources/物理实验/（102）用拉伸法测金属丝的杨氏模量示范报告.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/物理实验/（102）用拉伸法测金属丝的杨氏模量示范报告.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/物理实验/（102）用拉伸法测金属丝的杨氏模量示范报告.pdf", isDirect: true }
        ]
      },
      {
        id: "pe-145",
        title: "（145）分光计的调整与三棱镜顶角的测量示范",
        tag: "实验示范",
        year: "物理实验",
        fileType: "pdf",
        fileSize: "187 KB",
        description: "分光计粗调与细调操作步骤、望远镜聚焦无穷远调焦、自准直法测顶角及反射法完整数据处理。",
        contributor: "浙海大学子",
        updateTime: "2023-12-01",
        localUrl: "js/Subjects-Resources/物理实验/（145）分光计的调整与三棱镜顶角的测量示范.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/物理实验/（145）分光计的调整与三棱镜顶角的测量示范.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/物理实验/（145）分光计的调整与三棱镜顶角的测量示范.pdf", isDirect: true }
        ]
      },
      {
        id: "pe-211",
        title: "（211）用模拟法测绘静电场示范报告",
        tag: "实验示范",
        year: "物理实验",
        fileType: "pdf",
        fileSize: "610 KB",
        description: "同轴圆柱面电极与平行导线电极等位线描绘图、电力线分布图及电场分布计算示范报告。",
        contributor: "浙海大学子",
        updateTime: "2023-12-01",
        localUrl: "js/Subjects-Resources/物理实验/（211）用模拟法测绘静电场示范报告.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/物理实验/（211）用模拟法测绘静电场示范报告.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/物理实验/（211）用模拟法测绘静电场示范报告.pdf", isDirect: true }
        ]
      },
      {
        id: "pe-213",
        title: "（213）等厚干涉——牛顿环实验示范报告",
        tag: "实验示范",
        year: "物理实验",
        fileType: "pdf",
        fileSize: "172 KB",
        description: "读数显微镜使用、牛顿环暗环环序测量、曲率半径R计算公式推导与逐差法误差分析报告。",
        contributor: "浙海大学子",
        updateTime: "2023-12-01",
        localUrl: "js/Subjects-Resources/物理实验/（213）等厚干涉——牛顿环.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/物理实验/（213）等厚干涉——牛顿环.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/物理实验/（213）等厚干涉——牛顿环.pdf", isDirect: true }
        ]
      },
      {
        id: "pe-220",
        title: "（220）示波器的使用示范报告",
        tag: "实验示范",
        year: "物理实验",
        fileType: "pdf",
        fileSize: "587 KB",
        description: "双踪示波器面板操作、正弦波周期与电压测量、李萨如图形法测频率示范与波形记录。",
        contributor: "浙海大学子",
        updateTime: "2023-12-01",
        localUrl: "js/Subjects-Resources/物理实验/（220）示波器的使用示范报告.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Subjects-Resources/物理实验/（220）示波器的使用示范报告.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/物理实验/（220）示波器的使用示范报告.pdf", isDirect: true }
        ]
      }
    ]
  },
  {
    id: "ds-course",
    name: "数据结构",
    title: "《数据结构》",
    icon: "🌲",
    type: "计算机专业核心课",
    description: "涵盖《数据结构》阶段测验1~3试卷与解析、平时作业1~10题库答案HTML原件全集。",
    papers: [
      // ----------- 阶段性测验 -----------
      {
        id: "ds-test-1",
        title: "《数据结构》阶段测验1 试卷与答案解析",
        tag: "阶段测验",
        year: "数据结构",
        fileType: "html",
        fileSize: "295 KB",
        description: "涵盖算法复杂度分析、线性表（顺序表/单链表/双链表）基本操作与核心考点解析。",
        contributor: "浙海大学子",
        updateTime: "2024-11-20",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 测验1-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线真题与答案", url: "js/Subjects-Resources/数据结构/数据结构 测验1-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 测验1-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-test-2",
        title: "《数据结构》阶段测验2 试卷与答案解析",
        tag: "阶段测验",
        year: "数据结构",
        fileType: "html",
        fileSize: "293 KB",
        description: "涵盖栈与队列的特性、二叉树与树的遍历算法、哈夫曼树构造及性质测验试题与答案。",
        contributor: "浙海大学子",
        updateTime: "2024-12-10",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 测验2-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线真题与答案", url: "js/Subjects-Resources/数据结构/数据结构 测验2-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 测验2-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-test-3",
        title: "《数据结构》阶段测验3 试卷与答案解析",
        tag: "阶段测验",
        year: "数据结构",
        fileType: "html",
        fileSize: "293 KB",
        description: "涵盖图论算法（DFS/BFS/最短路径/拓扑排序）、二叉搜索树、哈希表与排序算法测验解析。",
        contributor: "浙海大学子",
        updateTime: "2024-12-28",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 测验3-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线真题与答案", url: "js/Subjects-Resources/数据结构/数据结构 测验3-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 测验3-ANSWER.html", isDirect: true }
        ]
      },
      // ----------- 平时作业 1 ~ 10 -----------
      {
        id: "ds-hw-1",
        title: "《数据结构》作业1：算法与复杂度分析",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "444 KB",
        description: "数据结构基本概念、时间复杂度与空间复杂度计算（大O表示法）专项练习与答案。",
        contributor: "浙海大学子",
        updateTime: "2024-10-10",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业1-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业1-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业1-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-2",
        title: "《数据结构》作业2：线性表与顺序存储/链式存储",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "282 KB",
        description: "顺序表、单链表、循环链表与双向链表的操作算法实现与判断题专项练习。",
        contributor: "浙海大学子",
        updateTime: "2024-10-18",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业2-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业2-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业2-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-3",
        title: "《数据结构》作业3：栈与队列及其实际应用",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "484 KB",
        description: "栈（LIFO）与队列（FIFO）的顺序/链式实现、循环队列判满判空及表达式求值/括号匹配应用题。",
        contributor: "浙海大学子",
        updateTime: "2024-10-26",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业3-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业3-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业3-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-4",
        title: "《数据结构》作业4：串与数组、广义表",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "303 KB",
        description: "串的模式匹配（BF/KMP算法）、特殊矩阵（对称/三角/稀疏矩阵）压缩存储与广义表题目解析。",
        contributor: "浙海大学子",
        updateTime: "2024-11-04",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业4-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业4-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业4-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-5",
        title: "《数据结构》作业5：树与二叉树的遍历及性质",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "457 KB",
        description: "二叉树的五大性质、前序/中序/后序/层序遍历、线索二叉树与森林转换题目答案与解析。",
        contributor: "浙海大学子",
        updateTime: "2024-11-12",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业5-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业5-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业5-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-6",
        title: "《数据结构》作业6：哈夫曼树与二叉搜索树",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "317 KB",
        description: "带权路径长度WPL计算、哈夫曼树构造与编码、二叉搜索树（BST）插入/删除/查找算法解析。",
        contributor: "浙海大学子",
        updateTime: "2024-11-20",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业6-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业6-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业6-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-7",
        title: "《数据结构》作业7：图的基本概念与存储遍历",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "320 KB",
        description: "有向图/无向图度数、邻接矩阵/邻接表存储、深度优先搜索（DFS）与广度优先搜索（BFS）专项题目。",
        contributor: "浙海大学子",
        updateTime: "2024-11-28",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业7-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业7-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业7-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-8",
        title: "《数据结构》作业8：图的应用（最小生成树/最短路径/拓扑排序）",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "427 KB",
        description: "Prim/Kruskal 最小生成树算法、Dijkstra/Floyd 最短路径算法、AOV网拓扑排序与AOE关键路径题目与解析。",
        contributor: "浙海大学子",
        updateTime: "2024-12-06",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业8-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业8-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业8-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-9",
        title: "《数据结构》作业9：查找算法与散列表（Hash）",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "330 KB",
        description: "顺序查找、折半查找、平衡二叉树（AVL）、B/B+树与哈希表构造及冲突解决（开放定址/链地址法）题目与答案。",
        contributor: "浙海大学子",
        updateTime: "2024-12-14",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业9-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业9-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业9-ANSWER.html", isDirect: true }
        ]
      },
      {
        id: "ds-hw-10",
        title: "《数据结构》作业10：内部排序与外部排序算法",
        tag: "平时作业",
        year: "数据结构",
        fileType: "html",
        fileSize: "218 KB",
        description: "直接插入/希尔排序、冒泡/快速排序、简单选择/堆排序、归并排序与基数排序时间/空间复杂度对比与综合大题解析。",
        contributor: "浙海大学子",
        updateTime: "2024-12-22",
        localUrl: "js/Subjects-Resources/数据结构/数据结构 作业10-ANSWER.html",
        links: [
          { platform: "本地 HTML 在线题目与答案", url: "js/Subjects-Resources/数据结构/数据结构 作业10-ANSWER.html", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Subjects-Resources/数据结构/数据结构 作业10-ANSWER.html", isDirect: true }
        ]
      }
    ]
  }
];

// ================= 3. 优秀学长案例 (Ivory Tower) - 按分类/文件夹归类 =================
const SENIOR_SUBJECTS = [
  {
    id: "tongji",
    name: "考研上岸同济大学",
    title: "《考研上岸同济大学》",
    icon: "🏛️",
    image: "js/Ivory Tower/考研上岸同济大学/add16d9d72433707d6bf2b45d8b8d194.png",
    type: "985名校考研经验",
    headline: "11408 一战 372 分成功上岸同济大学",
    quote: "信院最高战力！！！！！",
    quoteSub: "哦不对，海大最高战力！",
    description: "海大最高战力！浙海大学长考研成功上岸同济大学全流程高分经验分享与备考指南PDF。",
    introMdUrl: "js/Ivory Tower/考研上岸同济大学/简介.md",
    papers: [
      {
        id: "tj-001",
        title: "浙海大学长考研上岸同济大学全流程经验分享与备考指南",
        tag: "考研经验",
        year: "同济大学",
        fileType: "pdf",
        fileSize: "1.8 MB",
        description: "信院/海大最高战力！涵盖考研初试全科复习时间线、专业课备考突破、心态调整与复试面试通关实战总结。",
        contributor: "同济上岸学长",
        updateTime: "2024-04-15",
        localUrl: "js/Ivory Tower/考研上岸同济大学/考研经验.pdf",
        links: [
          { platform: "本地 PDF 原件直阅 / 下载", url: "js/Ivory Tower/考研上岸同济大学/考研经验.pdf", isDirect: true },
          { platform: "GitHub 仓库源文件", url: "https://github.com/AuRoRa-TH/ZJOU-Hub/blob/main/js/Ivory%20Tower/%E8%80%83%E7%A0%94%E4%B8%8A%E5%B2%B8%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6/%E8%80%83%E7%A0%94%E7%BB%8F%E9%AA%8C.pdf", isDirect: true }
        ]
      }
    ]
  }
];

