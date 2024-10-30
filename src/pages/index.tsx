import './styles/index.css'

function IndexPage() {
  return (
    <div className="container">
      <div className="background-shape"></div>

      <header className="header">
        <div className="avatar">
          {/* 替换为你的照片 URL */}
          <img src="https://via.placeholder.com/150" alt="个人头像" />
        </div>
        <h1>你的名字</h1>
        <p className="subtitle">前端开发工程师</p>
        <div className="header-social">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </header>

      <main>
        <section className="about">
          <h2>关于我</h2>
          <div className="card">
            <p>你好！我是一名充满激情的前端开发者，专注于创造直观、高效的用户界面。</p>
            <p>
              我热衷于学习新技术，并将其应用到实际项目中。在过去的工作中，我参与开发了多个大型 Web
              应用，积累了丰富的实战经验。
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>技能专长</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <i className="fab fa-react"></i>
              <h3>前端框架</h3>
              <p>React / Next.js</p>
            </div>
            <div className="skill-card">
              <i className="fab fa-js"></i>
              <h3>编程语言</h3>
              <p>TypeScript / JavaScript</p>
            </div>
            <div className="skill-card">
              <i className="fab fa-html5"></i>
              <h3>Web 基础</h3>
              <p>HTML5 / CSS3</p>
            </div>
            <div className="skill-card">
              <i className="fab fa-node"></i>
              <h3>后端技术</h3>
              <p>Node.js / Express</p>
            </div>
          </div>
        </section>

        <section className="projects">
          <h2>项目展示</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="https://via.placeholder.com/300x200" alt="项目预览" />
              </div>
              <div className="project-content">
                <h3>项目名称</h3>
                <p>使用 React 和 TypeScript 开发的现代化 Web 应用...</p>
                <div className="project-links">
                  <a href="#" className="button">
                    查看演示
                  </a>
                  <a href="#" className="button">
                    源代码
                  </a>
                </div>
              </div>
            </div>
            {/* 可以添加更多项目卡片 */}
          </div>
        </section>

        <section className="contact">
          <h2>联系我</h2>
          <div className="contact-card">
            <a href="mailto:your.email@example.com" className="contact-button">
              <i className="fas fa-envelope"></i>
              发送邮件
            </a>
            <a href="https://github.com/yourusername" className="contact-button">
              <i className="fab fa-github"></i>
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="contact-button">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default IndexPage
