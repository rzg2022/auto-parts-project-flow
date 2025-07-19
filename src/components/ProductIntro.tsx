import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Zap, Globe, Shield } from 'lucide-react';

const ProductIntro = () => {
  const features = [
    {
      icon: Target,
      title: '行业专属定制',
      description: '专为汽车零部件行业量身定制的研发项目管理平台'
    },
    {
      icon: Zap,
      title: '全流程覆盖',
      description: '基于APQP理念，覆盖项目立项到投产的完整生命周期'
    },
    {
      icon: Globe,
      title: 'SaaS云端服务',
      description: '企业用户可在线注册使用，无需本地安装部署'
    },
    {
      icon: Shield,
      title: '多租户架构',
      description: '安全隔离的多租户架构，确保企业数据安全'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            产品简介
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            专业的汽车零部件研发项目管理平台
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AutoPM Pro 是专门为汽车零部件制造企业打造的研发项目管理SaaS平台。
            我们深度理解汽车行业APQP流程，将先进的项目管理理念与行业最佳实践相结合，
            为企业提供从项目立项到批量投产的全流程数字化管理解决方案。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Benefits */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                为什么选择 AutoPM Pro？
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">深度行业理解：</span>
                    基于20年汽车零部件行业经验，深度理解APQP流程要求
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">标准化模板：</span>
                    内置丰富的行业标准模板，快速启动项目管理流程
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">供应链协作：</span>
                    支持供应商企业共同参与，实现全供应链项目协同管理
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">数据驱动决策：</span>
                    丰富的数据分析看板，助力项目管理决策优化
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-medium p-6">
                <div className="space-y-4">
                  <div className="h-3 bg-gradient-primary rounded-full w-3/4"></div>
                  <div className="h-3 bg-muted rounded-full w-1/2"></div>
                  <div className="h-3 bg-accent rounded-full w-2/3"></div>
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    <div className="h-16 bg-gradient-primary/20 rounded"></div>
                    <div className="h-16 bg-muted rounded"></div>
                    <div className="h-16 bg-accent/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;