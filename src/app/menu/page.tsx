'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  emoji: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('전체 메뉴');

  const menuData: MenuCategory[] = [
    {
      category: '치킨',
      items: [
        {
          name: '후라이드',
          description: '바삭바삭 원조 후라이드, 1997년부터 변하지 않는 그 맛',
          price: '18,000원',
          emoji: '🍗'
        },
        {
          name: '양념치킨',
          description: '달콤매콤한 특제 양념이 입안 가득',
          price: '20,000원',
          emoji: '🍗'
        },
        {
          name: '간장치킨',
          description: '깔끔하고 담백한 간장 베이스 양념',
          price: '20,000원',
          emoji: '🍗'
        },
        {
          name: '반/반치킨',
          description: '후라이드와 양념의 완벽한 조합',
          price: '19,000원',
          emoji: '🍗'
        },
        {
          name: '순살 후라이드',
          description: '먹기 편한 순살로만, 바삭함은 그대로',
          price: '22,000원',
          emoji: '🍗'
        },
        {
          name: '순살 양념치킨',
          description: '부드러운 순살에 달콤한 양념까지',
          price: '24,000원',
          emoji: '🍗'
        },
        {
          name: '순살 간장치킨',
          description: '순살의 부드러움과 간장의 깔끔함',
          price: '24,000원',
          emoji: '🍗'
        },
        {
          name: '순살 반/반치킨',
          description: '순살로 만든 후라이드와 양념의 만남',
          price: '23,000원',
          emoji: '🍗'
        }
      ]
    },
    {
      category: '튀김/사이드',
      items: [
        {
          name: '오징어튀김',
          description: '바삭하고 쫄깃한 오징어튀김',
          price: '12,000원',
          emoji: '🦑'
        },
        {
          name: '왕새우튀김',
          description: '크고 탱탱한 왕새우 튀김',
          price: '15,000원',
          emoji: '🍤'
        },
        {
          name: '무뼈 닭발 튀김',
          description: '매콤하고 바삭한 무뼈 닭발',
          price: '13,000원',
          emoji: '🔥'
        },
        {
          name: '무뼈 닭발 볶음',
          description: '매콤달콤하게 볶아낸 무뼈 닭발',
          price: '14,000원',
          emoji: '🌶️'
        }
      ]
    },
    {
      category: '국물요리',
      items: [
        {
          name: '얼큰부대찌개',
          description: '얼큰하고 시원한 부대찌개',
          price: '16,000원',
          emoji: '🍲'
        },
        {
          name: '모듬어묵탕',
          description: '따뜻하고 깔끔한 어묵탕',
          price: '14,000원',
          emoji: '🍜'
        }
      ]
    },
    {
      category: '마른안주',
      items: [
        {
          name: '먹태',
          description: '고소하고 담백한 먹태',
          price: '8,000원',
          emoji: '🐟'
        },
        {
          name: '쥐포',
          description: '쫄깃하고 짭짤한 쥐포',
          price: '10,000원',
          emoji: '🐟'
        },
        {
          name: '노가리',
          description: '바삭바삭한 노가리',
          price: '7,000원',
          emoji: '🐟'
        },
        {
          name: '한치',
          description: '부드럽고 고소한 한치',
          price: '12,000원',
          emoji: '🦑'
        }
      ]
    }
  ];

  const categories = ['전체 메뉴', '치킨', '튀김/사이드', '국물요리', '마른안주'];

  const getFilteredMenus = () => {
    if (activeTab === '전체 메뉴') {
      return menuData;
    }
    return menuData.filter(menu => menu.category === activeTab);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* 페이지 헤더 */}
        <section className="bg-primary-red text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              후켄 메뉴
            </h1>
            <p className="text-xl text-gray-100">
              통통한 맛, 전통의 한입을 경험해보세요
            </p>
          </div>
        </section>

        {/* 카테고리 탭 */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === category
                      ? 'bg-primary-red text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 메뉴 섹션 */}
        <section className="py-16 bg-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {getFilteredMenus().map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
                  {category.category}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      {/* 메뉴 이미지 */}
                      <div className="aspect-square bg-gray-100 flex items-center justify-center">
                        <span className="text-6xl">{item.emoji}</span>
                      </div>
                      
                      {/* 메뉴 정보 */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-charcoal mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex justify-center">
                          <span className="text-2xl font-bold text-primary-red">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 가맹 안내 */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-charcoal mb-8">
              다양한 메뉴로 안정적인 매출!
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cream-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  🍗 풍부한 메뉴 구성
                </h3>
                <p className="text-gray-600 mb-4">
                  치킨부터 안주까지<br />
                  다양한 고객층을 만족시킬 수 있는 메뉴
                </p>
                <Link
                  href="/franchise"
                  className="btn-primary px-6 py-3 rounded-lg font-semibold inline-block"
                >
                  가맹 문의하기
                </Link>
              </div>
              
              <div className="bg-cream-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4">
                  💰 높은 수익성
                </h3>
                <p className="text-gray-600 mb-4">
                  검증된 레시피와 합리적인 가격으로<br />
                  안정적인 수익 구조 확보
                </p>
                <Link
                  href="/about"
                  className="bg-dark-brown text-white px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-800 transition-colors duration-200"
                >
                  브랜드 알아보기
                </Link>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-dark-brown">
                <strong>💡 프랜차이즈의 장점:</strong> 모든 메뉴는 본부에서 개발한 표준화된 레시피로 
                누구나 쉽게 조리할 수 있으며, 지속적인 신메뉴 개발로 경쟁력을 유지합니다.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 