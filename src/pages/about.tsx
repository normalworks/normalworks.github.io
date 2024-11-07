import header from "~/assets/header.png";

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "张三",
      role: "创始人 & CEO",
      image: header,
      description: "拥有10年互联网行业经验，曾任职于多家知名科技公司。",
    },
    {
      id: 2,
      name: "李四",
      role: "技术总监",
      image: header,
      description: "全栈开发专家，专注于前沿技术研究与团队管理。",
    },
    {
      id: 3,
      name: "王五",
      role: "产品总监",
      image: header,
      description: "专注用户体验设计，深耕产品管理领域8年。",
    },
    {
      id: 4,
      name: "赵六",
      role: "市场总监",
      image: header,
      description: "拥有丰富的市场营销经验，善于品牌策划与推广。",
    },
    {
      id: 5,
      name: "孙七",
      role: "UI设计师",
      image: header,
      description: "多年设计经验，专注于用户界面和交互设计。",
    },
    {
      id: 6,
      name: "周八",
      role: "后端工程师",
      image: header,
      description: "精通分布式系统架构，注重性能优化。",
    },
    {
      id: 7,
      name: "吴九",
      role: "前端工程师",
      image: header,
      description: "热衷于前端新技术，追求极致用户体验。",
    },
    {
      id: 8,
      name: "郑十",
      role: "运营总监",
      image: header,
      description: "擅长数据分析与用户增长，推动产品持续发展。",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">团队介绍</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="team-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="member-image w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-center">{member.name}</h2>
            <p className="member-role text-gray-600 text-center my-2">
              {member.role}
            </p>
            <p className="description text-gray-500 text-sm text-center">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
