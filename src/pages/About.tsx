import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Target, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const companyValues = [
    {
      icon: Target,
      title: '专业专注',
      description: '20年深耕制造业数字化，专注汽车零部件行业项目管理解决方案'
    },
    {
      icon: Users,
      title: '客户至上',
      description: '以客户成功为导向，提供贴近业务需求的产品和服务'
    },
    {
      icon: Award,
      title: '持续创新',
      description: '不断探索新技术，持续优化产品体验和功能价值'
    },
    {
      icon: Heart,
      title: '诚信负责',
      description: '诚信经营，对客户负责，对员工负责，对社会负责'
    }
  ];

  const teamMembers = [
    {
      name: '张建国',
      position: '创始人 & CEO',
      background: '前某知名汽车制造企业项目管理总监，20年汽车行业经验',
      expertise: '项目管理、APQP流程、数字化转型'
    },
    {
      name: '李梅',
      position: '产品副总裁',
      background: '前SAP产品经理，专注制造业ERP和项目管理系统',
      expertise: '产品设计、用户体验、行业需求分析'
    },
    {
      name: '王强',
      position: '技术副总裁',
      background: '前阿里云架构师，专注企业级SaaS平台架构设计',
      expertise: 'SaaS架构、云计算、数据安全'
    },
    {
      name: '陈晓',
      position: '客户成功总监',
      background: '10年制造业数字化咨询经验，服务过百家汽车零部件企业',
      expertise: '客户成功、实施咨询、培训服务'
    }
  ];

  const milestones = [
    { year: '2019', event: '公司成立，专注汽车零部件行业项目管理软件研发' },
    { year: '2020', event: 'AutoPM Pro 1.0版本发布，获得首批50家客户认可' },
    { year: '2021', event: '完成A轮融资，用户规模突破200家企业' },
    { year: '2022', event: '推出供应链协作功能，服务客户超过500家' },
    { year: '2023', event: '获得ISO27001认证，企业级安全能力获得认可' },
    { year: '2024', event: '用户规模突破1000家，成为行业领先的项目管理平台' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            关于 AutoPM Pro
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            我们致力于为汽车零部件制造企业提供专业的研发项目管理SaaS解决方案，
            让项目管理变得更简单、更高效、更规范
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              我们的使命
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              让汽车零部件研发项目管理更简单高效
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              我们深度理解汽车零部件行业的项目管理挑战，基于APQP理念和行业最佳实践，
              为企业提供从立项到投产的全生命周期数字化管理解决方案。
              我们相信，通过专业的工具和服务，能够帮助每一家汽车零部件企业实现项目管理的数字化转型，
              提升研发效率，降低项目风险，实现可持续发展。
            </p>
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="bg-white shadow-soft hover:shadow-medium transition-all duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">核心团队</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              拥有深厚行业背景和丰富经验的核心团队，为产品和服务质量提供坚实保障
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-soft">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-primary text-center mb-3 font-medium">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {member.background}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold">专长：</span>{member.expertise}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">发展历程</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从初创到行业领先，见证我们与客户共同成长的每一个重要时刻
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    
                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                      <Card className="bg-white shadow-soft">
                        <CardContent className="p-6">
                          <Badge className="mb-3 bg-primary text-white">
                            {milestone.year}
                          </Badge>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.event}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">联系我们</h2>
              <p className="text-muted-foreground">
                欢迎您随时与我们联系，我们将为您提供专业的咨询和服务
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Info */}
              <Card className="bg-white shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">公司信息</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold">公司名称：</span>
                      <span className="text-muted-foreground">上海智造云科技有限公司</span>
                    </div>
                    <div>
                      <span className="font-semibold">注册地址：</span>
                      <span className="text-muted-foreground">上海市浦东新区张江高科技园区</span>
                    </div>
                    <div>
                      <span className="font-semibold">邮政编码：</span>
                      <span className="text-muted-foreground">201203</span>
                    </div>
                    <div>
                      <span className="font-semibold">统一社会信用代码：</span>
                      <span className="text-muted-foreground">91310115MA1HM8CX2H</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-white shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">联系方式</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold">客服热线：</span>
                      <span className="text-muted-foreground">400-123-4567</span>
                    </div>
                    <div>
                      <span className="font-semibold">商务合作：</span>
                      <span className="text-muted-foreground">business@autopm-pro.com</span>
                    </div>
                    <div>
                      <span className="font-semibold">技术支持：</span>
                      <span className="text-muted-foreground">support@autopm-pro.com</span>
                    </div>
                    <div>
                      <span className="font-semibold">官方网站：</span>
                      <span className="text-muted-foreground">www.autopm-pro.com</span>
                    </div>
                    <div className="pt-4">
                      <span className="font-semibold">备案信息：</span>
                      <br />
                      <span className="text-muted-foreground text-sm">
                        沪ICP备2024123456号-1<br />
                        沪公网安备31011502123456号
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;