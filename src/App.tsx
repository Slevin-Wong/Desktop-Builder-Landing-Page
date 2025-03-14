import React from 'react';
import { ArrowRight, Palette, Code, Store, RefreshCw, Zap, Download, Upload, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            重新定义桌面：从创意到体验，你的数字空间由你掌控
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            无论是设计师的灵感迸发，还是用户的个性化追求，Codigger桌面生态为你提供从创作到应用的完整解决方案。
            Desktop Builder 让创意变现触手可及，Configure Look 让个性化体验一键实现。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition">
              <span className="block text-xl font-semibold">我是设计师</span>
              <span className="flex items-center justify-center gap-2 text-sm opacity-80">
                立即探索 Desktop Builder
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </button>
            <button className="group bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition">
              <span className="block text-xl font-semibold">我是用户</span>
              <span className="flex items-center justify-center gap-2 text-sm">
                立即体验 Configure Look
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            你的数字空间，由创意与体验共同定义
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
              <div className="flex items-center gap-4 mb-6">
                <Code className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900">Desktop Builder</h3>
              </div>
              <p className="text-gray-600 mb-6">
                为设计师打造的一站式创作工具，通过模块化设计与AI生图功能，让灵感快速转化为可交易的数字资产，并直接发布至全球市场。
              </p>
              <p className="text-lg font-semibold text-indigo-600">
                你的设计，值得被所有人看见
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
              <div className="flex items-center gap-4 mb-6">
                <Palette className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Configure Look</h3>
              </div>
              <p className="text-gray-600 mb-6">
                为Desktop用户设计的零门槛配置工具，从全球海量创作者作品库中自由组合壁纸、皮肤、动态元素等组件，一键打造专属桌面。
              </p>
              <p className="text-lg font-semibold text-purple-600">
                你的桌面，从此告别千篇一律
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Designers Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Desktop Builder —— 创作者的商业画布
            </h2>
            <p className="text-xl text-gray-600">让创意自由生长，让价值触手可及</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <RefreshCw className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">模块化设计，自由组合</h3>
              <p className="text-gray-600">
                从图标、任务栏到窗口边框皆可自由搭配，打造独一无二的视觉风格
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Zap className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">顶尖AI模型，辅助创作</h3>
              <p className="text-gray-600">
                内置AI生图功能，快速生成壁纸、图标等视觉元素，一键输出创作灵感
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <Upload className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">一键发布，快速变现</h3>
              <p className="text-gray-600">
                作品上架Codigger Store，触达全球用户，自主定价，收益实时到账
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-900 mb-6">
              你的设计，全球用户的桌面风景
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              立即体验 Desktop Builder，开启你的数字艺术商业之旅
            </button>
          </div>
        </div>
      </section>

      {/* For Users Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Configure Look —— 用户的个性化终端
            </h2>
            <p className="text-xl text-gray-600">零门槛打造你的专属数字空间</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl">
              <Palette className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">主题丰富多样，一键应用</h3>
              <p className="text-gray-600">
                海量预设主题，从极简风到炫彩风，工作娱乐两不误，一键匹配不同场景
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl">
              <RefreshCw className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">组件自由搭配，个性组合</h3>
              <p className="text-gray-600">
                像搭积木一样自由组合各种美化元素，每一处调整即时生效，所见即所得
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl">
              <Store className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">便捷浏览商店，发现全球创意</h3>
              <p className="text-gray-600">
                从独立创作者到专业团队，全球设计师作品一键下载，满足你的审美需求
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-gray-900 mb-6">
              你的桌面，你来定义
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
              立即体验 Configure Look，打造你的梦想桌面
            </button>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            创作 - 分发 - 使用：构建生生不息的Desktop生态闭环
          </h2>
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-around">
              {/* 步骤一：创建内容 */}
              <div className="relative w-40 h-40 rounded-full bg-white shadow-md flex flex-col items-center justify-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mt-2">创建内容</h3>
                <p className="text-gray-600 text-sm text-center">设计师开发新设计和构建。</p>
              </div>

              {/* 步骤二：分发设计 */}
              <div className="relative w-40 h-40 rounded-full bg-white shadow-md flex flex-col items-center justify-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Store className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mt-2">分发设计</h3>
                <p className="text-gray-600 text-sm text-center">通过Store连接用户</p>
              </div>

              {/* 步骤三：应用外观 */}
              <div className="relative w-40 h-40 rounded-full bg-white shadow-md flex flex-col items-center justify-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Palette className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mt-2">应用外观</h3>
                <p className="text-gray-600 text-sm text-center">用户配置和应用设计。</p>
              </div>

              {/* 步骤四：收集反馈 */}
              <div className="relative w-40 h-40 rounded-full bg-white shadow-md flex flex-col items-center justify-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <span>💬</span> {/* 使用一个简单的聊天气泡图标代替 */}
                </div>
                <h3 className="text-xl font-semibold mt-2">收集反馈</h3>
                <p className="text-gray-600 text-sm text-center">用户提供体验反馈。</p>
              </div>

              {/* 步骤五：优化设计 */}
              <div className="relative w-40 h-40 rounded-full bg-white shadow-md flex flex-col items-center justify-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <RefreshCw className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mt-2">优化设计</h3>
                <p className="text-gray-600 text-sm text-center">设计师根据反馈改进设计。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            重新定义桌面的价值，你的未来数字空间已就绪
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-opacity-90 transition">
              <span className="block text-xl font-semibold">开启你的变现之旅</span>
              <span className="text-sm opacity-80">Desktop Builder</span>
            </button>
            <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              <span className="block text-xl font-semibold">打造你的专属桌面</span>
              <span className="text-sm opacity-80">Configure Look</span>
            </button>
          </div>
          <p className="text-xl font-semibold opacity-90">不止于工具，更是生态</p>
        </div>
      </section>
    </div>
  );
}

export default App;
