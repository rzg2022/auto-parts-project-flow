import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: '产品功能', path: '/features' },
      { name: '解决方案', path: '/solutions' },
      { name: '定价方案', path: '/pricing' },
      { name: '客户案例', path: '/cases' }
    ],
    company: [
      { name: '关于我们', path: '/about' },
      { name: '新闻动态', path: '/news' },
      { name: '加入我们', path: '/careers' },
      { name: '联系我们', path: '/contact' }
    ],
    support: [
      { name: '帮助中心', path: '/help' },
      { name: '产品文档', path: '/docs' },
      { name: 'API文档', path: '/api' },
      { name: '视频教程', path: '/tutorials' }
    ],
    legal: [
      { name: '服务条款', path: '/terms' },
      { name: '隐私政策', path: '/privacy' },
      { name: '数据安全', path: '/security' },
      { name: '合规认证', path: '/compliance' }
    ]
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded bg-gradient-primary"></div>
              <span className="text-xl font-bold">AutoPM Pro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              专注于汽车零部件行业的研发项目管理SaaS平台，
              基于APQP理念，为企业提供全生命周期项目管理解决方案。
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">contact@autopm-pro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">400-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">上海市浦东新区张江高科技园区</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">公司</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">支持</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">法律</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 AutoPM Pro. 保留所有权利.</p>
              <p className="mt-1">沪ICP备12345678号-1 | 沪公网安备31011502123456号</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>我们的使命：让汽车零部件研发项目管理更简单高效</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;