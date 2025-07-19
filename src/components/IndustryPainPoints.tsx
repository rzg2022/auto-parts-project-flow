import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, CheckCircle } from 'lucide-react';

const IndustryPainPoints = () => {
  const painPoints = [
    {
      problem: 'APQP流程执行不规范',
      description: '缺乏标准化的APQP流程模板，执行随意性大',
      solution: '内置标准APQP流程模板，确保流程规范执行',
      icon: '📋'
    },
    {
      problem: '项目交付物管理混乱',
      description: '交付物版本控制困难，文档散落各处',
      solution: '集中式文档管理，完善的版本控制机制',
      icon: '📄'
    },
    {
      problem: '缺乏统一的变更管理流程',
      description: '变更申请、审批、执行缺乏标准流程',
      solution: '标准化变更管理工作流，全程可追溯',
      icon: '🔄'
    },
    {
      problem: '跨部门协同效率低下',
      description: '信息传递不及时，协作效率低',
      solution: '实时协作平台，消息通知与任务联动',
      icon: '🤝'
    },
    {
      problem: '多项目并行资源竞争',
      description: '资源分配不合理，项目进度相互影响',
      solution: '智能资源调度，项目优先级管理',
      icon: '⚖️'
    },
    {
      problem: '项目风险识别不及时',
      description: '缺乏有效的风险预警机制',
      solution: '智能风险识别与预警系统',
      icon: '⚠️'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="destructive" className="mb-4 px-4 py-2">
            行业痛点
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            汽车零部件研发项目管理的典型挑战
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            基于对行业深度调研和实践总结，我们识别出汽车零部件企业在研发项目管理中面临的核心痛点，
            并针对性地提供解决方案
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((item, index) => (
            <Card key={index} className="relative overflow-hidden bg-white shadow-soft hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="p-6">
                {/* Problem Section */}
                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <X className="h-5 w-5 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-semibold text-red-700 mb-2">
                        {item.problem}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-200 my-4"></div>

                {/* Solution Section */}
                <div className="mt-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-700 mb-2">
                        AutoPM Pro 解决方案
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-primary/5 rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              解决这些痛点，从选择 AutoPM Pro 开始
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              我们深度理解汽车零部件行业的项目管理挑战，并为此构建了专业的解决方案。
              立即注册，体验如何让项目管理变得简单高效。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                免费体验解决方案
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                下载解决方案白皮书
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryPainPoints;