const portfolios = [
  { 
    id: 1,
    title: 'บิงโก้ - Bingo [CLI]', 
    description: 'เกมบิงโก้ที่เล่นใน Terminal เป็นตาราง 5x5 กฏกติกาเหมือนเกมบิงโก้ทั่วไป',
    tag: 'game',
    thumbnailUrl: 'https://zachtix.github.io/img/bingo.jpg', 
    images: [
      'https://zachtix.github.io/img/bingo.jpg'
    ]
  },
  { 
    id: 2,
    title: 'ป็อกเด้ง - Pokdeng', 
    description: 'เกมป็อกเด้งที่เล่นใน Terminal เล่นกับคอม 1-1 มีอัลกอลิทึม ในการตรวจการในมือผู้เล่น และคอมว่าใครเป็นผู้ชนะ กฏกติกาตามแบบเกมป็อกเด้ง และกำลังพัฒนาเป็นในรูปแบบ ui โดยใช้ pygame',
    tag: 'game',
    thumbnailUrl: 'https://zachtix.github.io/img/pokdeng_ui_full.png', 
    images: [
      'https://zachtix.github.io/img/pokdeng_cli.jpg',
      'https://zachtix.github.io/img/pokdeng_ui_full.png'
    ]
  },
  { 
    id: 3,
    title: 'โปรแกรมช่างคอมในตำนาน', 
    description: 'เป็นโปรแกรมที่เพิ่มความสะดวกในการลงโปรแกรมพื้นฐาน เมื่อลงวินโดว์ใหม่ เป็นการใช้ Package จาก Chocolatey Community',
    tag: 'tool',
    thumbnailUrl: 'https://zachtix.github.io/img/changkhom.JPG', 
    images: [
      'https://zachtix.github.io/img/changkhom.JPG'
    ]
  },
  { 
    id: 4,
    title: 'บอทตกปลา Play Together', 
    description: 'โปรแกรมบอทตกปลาเกม Play Together โดยใช้ opencv object detect เมื่อเจอ object ตามรูปแบบที่ตั้งไว้จะสั่งให้โปรแกรมกดปุ่ม',
    tag: 'game',
    thumbnailUrl: 'https://zachtix.github.io/img/botfishing.JPG', 
    images: [
      'https://zachtix.github.io/img/botfishing.JPG'
    ]
  },
  { 
    id: 5,
    title: 'บอทกดของช็อปปี้', 
    description: 'บอทกดของช็อปปี้ใช้ selenium เป็น web driver และใช้ python เขียนคำสั่งให้ selenium ทำตามเป็นขั้นตอน โดยจะสั่งโดยให้ selenium กดหรือกรอกข้อมูลตาม Css seletor ,XPath ที่กำหนดไว้',
    tag: 'bot',
    thumbnailUrl: '', 
    images: [
      ''
    ]
  },
];

export default portfolios;