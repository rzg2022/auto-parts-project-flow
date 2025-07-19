import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: '免费版',
      description: '适合小团队试用',
      icon: Star,
      price: { monthly: 0, yearly: 0 },
      userLimit: '≤5人团队',
      popular: false,
      features: [
        '基础项目管理功能',
        '任务看板和甘特图',
        '文档管理（1GB存储）',
        '标准模板库',
        '基础报表统计',
        '邮件通知',
        '7x24小时在线支持'
      ],
      limitations: [
        '项目数量限制：最多3个',
        '用户数量限制：最多5人',
        '存储空间限制：1GB',
        '不支持供应商协作'
      ]
    },
    {
      name: '专业版',
      description: '适合中小型企业',
      icon: Zap,
      price: { monthly: 68, yearly: 680 },
      userLimit: '按用户数计费',
      popular: true,
      features: [
        '全部免费版功能',
        '无限项目数量',
        '高级甘特图和资源管理',
        '供应商协作功能',
        '自定义工作流',
        '高级报表和数据分析',
        '10GB存储空间',
        'API接口调用',
        '专属客户成功经理'
      ],
      limitations: []
    },
    {
      name: '企业版',
      description: '适合大型企业',
      icon: Crown,
      price: { monthly: 168, yearly: 1680 },
      userLimit: '按用户数计费',
      popular: false,
      features: [
        '全部专业版功能',
        '企业级安全认证',
        '私有化部署选项',
        '无限存储空间',
        '高级集成能力',
        '定制化开发服务',
        '现场培训和咨询',
        '7x24小时专线支持',
        'SLA服务保障',
        '多租户管理'
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: '免费版有使用时间限制吗？',
      answer: '没有时间限制。5人以下团队可以永久免费使用基础功能，无需信用卡绑定。'
    },
    {
      question: '如何从免费版升级到付费版？',
      answer: '您可以随时在账户设置中升级套餐。升级后立即享受付费版功能，按比例计费。'
    },
    {
      question: '支持哪些付款方式？',
      answer: '支持支付宝、微信支付、银行转账、对公账户等多种付款方式。企业客户支持月结或季结。'
    },
    {
      question: '可以申请试用企业版吗？',
      answer: '可以申请30天企业版免费试用。请联系我们的销售团队获取试用账号。'
    },
    {
      question: '数据安全如何保障？',
      answer: '我们采用银行级数据加密，通过ISO27001认证，数据托管在阿里云，确保企业数据安全。'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            透明简单的定价方案
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            从免费试用到企业级解决方案，选择适合您团队规模的定价方案
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={billingCycle === 'monthly' ? 'text-white' : 'text-blue-200'}>
              按月付费
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={billingCycle === 'yearly' ? 'text-white' : 'text-blue-200'}>
              按年付费
              <Badge className="ml-2 bg-green-500 text-white">省20%</Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${
                  plan.popular 
                    ? 'border-primary shadow-strong scale-105' 
                    : 'border-border shadow-soft'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-semibold">
                    最受欢迎
                  </div>
                )}
                
                <CardContent className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold">
                        ¥{plan.price[billingCycle]}
                      </span>
                      {plan.price[billingCycle] > 0 && (
                        <span className="text-muted-foreground">
                          /{billingCycle === 'monthly' ? '用户/月' : '用户/年'}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-6">
                      {plan.userLimit}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="bg-muted/30 rounded-lg p-4 mb-8">
                      <h4 className="font-semibold text-sm mb-2 text-muted-foreground">
                        功能限制：
                      </h4>
                      <ul className="space-y-1">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:opacity-90' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.price[billingCycle] === 0 ? '立即免费使用' : '开始免费试用'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              所有付费计划都包含30天免费试用期，随时可以取消或更改套餐
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                联系销售咨询
              </Button>
              <Button variant="ghost">
                查看功能对比表
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">常见问题</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              关于定价和功能的常见问题解答
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;