import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Kanban, 
  AlertTriangle, 
  FileCheck, 
  FolderOpen, 
  Users, 
  Layout, 
  BarChart3 
} from 'lucide-react';

const CoreFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: '项目计划与进度管理',
      description: '支持甘特图可视化展示，智能依赖关系管理',
      details: ['甘特图项目计划', '里程碑管理', '进度自动同步', '资源负载均衡']
    },
    {
      icon: Kanban,
      title: '多维度任务协作',
      description: '看板、列表多视图切换，灵活的任务管理方式',
      details: ['看板任务管理', '列表视图', '任务优先级', '工作流配置']
    },
    {
      icon: AlertTriangle,
      title: '问题与风险跟踪',
      description: '全面的问题记录、跟踪和整改措施管理',
      details: ['问题登记跟踪', '风险识别评估', '整改措施管理', '闭环管理']
    },
    {
      icon: FileCheck,
      title: '阶段评审与交付物',
      description: '规范的评审流程和交付物版本管理',
      details: ['评审计划管理', '交付物清单', '版本控制', '评审报告']
    },
    {
      icon: FolderOpen,
      title: '文档中心与任务清单',
      description: '集中式文档管理和标准化任务清单',
      details: ['文档集中管理', '标准任务模板', '权限控制', '搜索功能']
    },
    {
      icon: Users,
      title: '协作机制',
      description: '支持供应链企业共同参与项目协作',
      details: ['供应商协作', '跨企业沟通', '权限分级', '协作看板']
    },
    {
      icon: Layout,
      title: '模板中心',
      description: '丰富的计划、任务、团队标准化模板',
      details: ['项目计划模板', '任务模板库', '团队组织模板', '自定义模板']
    },
    {
      icon: BarChart3,
      title: '项目监控与数据分析',
      description: '实时监控看板和多维度数据分析报表',
      details: ['实时监控看板', '项目健康度', '资源利用率', '绩效分析']
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            核心功能
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            全方位项目管理功能模块
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            从项目计划到协作执行，从风险管控到数据分析，
            AutoPM Pro 为汽车零部件研发项目提供完整的数字化管理解决方案
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-soft hover:shadow-medium transition-all duration-300 border-0 group hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Details */}
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              体验完整功能，立即开始免费试用
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              ≤5人团队永久免费使用全部功能，无需信用卡，立即注册开始您的项目管理之旅
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                立即免费注册
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                预约产品演示
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;