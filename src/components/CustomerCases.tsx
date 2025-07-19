import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Users, Target } from 'lucide-react';

const CustomerCases = () => {
  const cases = [
    {
      company: '精诚汽车零部件有限公司',
      industry: '发动机零部件制造',
      scale: '500-1000人',
      challenge: '管理40+并行研发项目，跨部门协作效率低，项目延期率高达35%',
      solution: '部署AutoPM Pro统一项目管理平台，标准化APQP流程，建立协作机制',
      results: [
        { metric: '项目准时交付率', before: '65%', after: '92%', improvement: '+27%' },
        { metric: '平均项目周期', before: '18个月', after: '14个月', improvement: '-22%' },
        { metric: '跨部门协作效率', before: '2.3分', after: '4.6分', improvement: '+100%' },
        { metric: '项目文档规范性', before: '45%', after: '95%', improvement: '+111%' }
      ],
      testimonial: '"AutoPM Pro帮助我们建立了标准化的项目管理体系，显著提升了研发效率。特别是APQP流程的数字化，让我们的项目管理更加规范有序。"',
      position: '研发总监 张先生'
    },
    {
      company: '华鑫汽车科技股份有限公司',
      industry: '新能源汽车零部件',
      scale: '200-500人',
      challenge: '新能源项目技术迭代快，供应链协作复杂，质量问题追溯困难',
      solution: '使用AutoPM Pro供应链协作功能，建立质量问题追溯体系，实现敏捷项目管理',
      results: [
        { metric: '供应商协作效率', before: '1.8分', after: '4.2分', improvement: '+133%' },
        { metric: '质量问题响应时间', before: '5天', after: '1.5天', improvement: '-70%' },
        { metric: '项目变更处理时间', before: '12天', after: '4天', improvement: '-67%' },
        { metric: '客户满意度', before: '78%', after: '94%', improvement: '+16%' }
      ],
      testimonial: '"平台的供应商协作功能特别实用，现在我们可以实时跟踪供应商的项目进度，大大提升了供应链管理效率。"',
      position: '供应链总监 李女士'
    }
  ];

  const successMetrics = [
    { icon: TrendingUp, value: '500+', label: '服务企业数量' },
    { icon: Clock, value: '30%', label: '平均项目周期缩短' },
    { icon: Users, value: '10万+', label: '活跃用户数量' },
    { icon: Target, value: '95%', label: '客户满意度' }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            客户成功案例
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            与领先企业共同成长，见证数字化转型成果
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            已有500+汽车零部件企业选择AutoPM Pro，在项目管理数字化转型中取得显著成效
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-muted-foreground text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Customer Cases */}
        <div className="space-y-12">
          {cases.map((caseItem, index) => (
            <Card key={index} className="bg-white shadow-medium border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Company Info */}
                  <div className="bg-gradient-primary text-white p-8">
                    <h3 className="text-xl font-bold mb-4">{caseItem.company}</h3>
                    <div className="space-y-2 text-blue-100">
                      <p><span className="font-semibold">行业：</span>{caseItem.industry}</p>
                      <p><span className="font-semibold">规模：</span>{caseItem.scale}</p>
                    </div>
                    <div className="mt-6 p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2">面临挑战</h4>
                      <p className="text-sm text-blue-100">{caseItem.challenge}</p>
                    </div>
                    <div className="mt-4 p-4 bg-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2">解决方案</h4>
                      <p className="text-sm text-blue-100">{caseItem.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-2 p-8">
                    <h4 className="text-lg font-semibold mb-6 text-foreground">实施效果</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {caseItem.results.map((result, idx) => (
                        <div key={idx} className="bg-muted/30 rounded-lg p-4">
                          <div className="text-sm text-muted-foreground mb-2">{result.metric}</div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="text-sm text-muted-foreground">
                                {result.before}
                              </span>
                              <span className="text-muted-foreground">→</span>
                              <span className="text-lg font-bold text-foreground">
                                {result.after}
                              </span>
                            </div>
                            <Badge 
                              variant="secondary" 
                              className="bg-green-100 text-green-700 border-green-200"
                            >
                              {result.improvement}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-card rounded-lg p-6 border-l-4 border-primary">
                      <p className="text-muted-foreground italic mb-4">
                        {caseItem.testimonial}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        —— {caseItem.position}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              成为下一个成功案例
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              加入500+领先汽车零部件企业的行列，开启您的项目管理数字化转型之旅。
              我们的专业团队将为您提供全程支持。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                预约专属演示
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                下载客户案例集
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCases;