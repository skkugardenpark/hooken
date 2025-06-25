'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const interiorImages = [
    { image: "/images/interior/interior-1.jpg", title: "메인 홀", description: "레트로 감성의 따뜻한 메인 홀" },
    { image: "/images/interior/interior-2.jpg", title: "주방 시설", description: "깔끔하고 체계적인 주방 환경" },
    { image: "/images/interior/interior-3.jpg", title: "카운터", description: "모던한 디자인의 주문 카운터" },
    { image: "/images/interior/interior-4.jpg", title: "테이블석", description: "편안한 가족 단위 테이블" },
    { image: "/images/interior/interior-5.jpg", title: "포토존", description: "SNS 인증샷을 위한 특별 공간" },
    { image: "/images/interior/interior-6.jpg", title: "외관", description: "눈에 띄는 간판과 외관 디자인" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interiorImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  };
  const signatureMenus = [
    {
      name: '후켄 후라이드',
      price: '18,000원',
      desc: '바삭바삭 원조 후라이드',
      fullDesc: '1997년부터 변하지 않는 전통 레시피로 만든 바삭바삭한 후라이드. 겉은 바삭하고 속은 촉촉한 최고의 맛을 자랑합니다.',
      image: '/images/후라이드.jpg',
      features: ['전통 레시피', '바삭한 식감', '1호 인기메뉴']
    },
    {
      name: '후켄 양념치킨',
      price: '20,000원',
      desc: '달콤매콤 특제 양념',
      fullDesc: '27년간 비법으로 전해진 특제 양념이 만들어내는 달콤하면서도 매콤한 맛. 한 번 맛보면 잊을 수 없는 그 맛입니다.',
      image: '/images/양념치킨.jpg',
      features: ['비법 양념', '달콤매콤', '대표 메뉴']
    },
    {
      name: '오징어 튀김',
      price: '12,000원',
      desc: '바삭하고 쫄깃한 오징어튀김',
      fullDesc: '신선한 오징어를 바삭하게 튀겨낸 별미 메뉴. 쫄깃한 식감과 고소한 맛이 치킨과 완벽한 조화를 이룹니다.',
      image: '/images/오징어튀김.jpg',
      features: ['신선한 재료', '쫄깃한 식감', '완벽한 안주']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative min-h-[100vh] flex items-end bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage: "url('/images/hooken-hero.png')"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="text-center text-white">
              <h1 className="text-hero font-bold mb-6">
                통통한 맛, <span className="text-accent">전통의 한입</span>
              </h1>
              <p className="text-subhero mb-8 text-gray-100">
                1997년부터 이어온 동네 치킨의 정석 - 검증된 프랜차이즈 브랜드
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/franchise"
                  className="bg-accent-yellow text-dark-brown px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                  가맹 문의하기
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-red transition-all duration-300"
                >
                  브랜드 알아보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 시그니처 메뉴 미리보기 */}
        <section className="py-20 bg-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                검증된 시그니처 메뉴
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                27년간 사랑받아온 후켄의 자랑스러운 메뉴들을 만나보세요
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {signatureMenus.map((menu, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* 메뉴 이미지 */}
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                      src={menu.image}
                      alt={menu.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* 가격 배지 */}
                    <div className="absolute top-4 right-4 bg-primary-red text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                      {menu.price}
                    </div>
                  </div>
                  
                  {/* 메뉴 정보 */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">
                      {menu.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                      {menu.desc}
                    </p>
                    
                    {/* 상세 설명 */}
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                      {menu.fullDesc}
                    </p>
                    
                    {/* 특징 태그 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {menu.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-yellow text-dark-brown"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* 액션 버튼 */}
                    <div className="flex gap-3">
                      <Link
                        href="/menu"
                        className="flex-1 text-center bg-primary-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                      >
                        메뉴 보기
                      </Link>
                      <Link
                        href="/franchise"
                        className="flex-1 text-center border-2 border-primary-red text-primary-red py-3 px-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300"
                      >
                        가맹 문의
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="inline-flex items-center bg-primary-red text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300"
              >
                전체 메뉴 보기
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 3Way 매출 구조 */}
        <section className="py-16 bg-white animate-fade-scale-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-flip-in">
              <h2 className="text-3xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">
                홀 + 배달 + 포장 3Way 매출 구조
              </h2>
              <p className="text-lg text-gray-600 animate-bounce-in-enhanced animate-delay-200">
                다양한 판매 채널로 안정적인 수익 창출
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🏪', title: '홀 매출', desc: '따뜻한 분위기의 매장에서\n가족, 친구들과 함께하는 식사', percent: '40%' },
                { icon: '🛵', title: '배달 매출', desc: '배달앱 연동으로\n편리한 주문과 빠른 배달', percent: '35%' },
                { icon: '📦', title: '포장 매출', desc: '전화 주문 후\n빠른 포장 픽업 서비스', percent: '25%' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-8 bg-cream-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-zoom-in-rotate hover:animate-bounce-in-enhanced"
                  style={{animationDelay: `${index * 0.3}s`}}
                >
                  <div className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 animate-elastic-in transform transition-all duration-300 hover:scale-110 hover:rotate-12 animate-glow-pulse">
                    <span className="text-3xl animate-wiggle">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">
                    {item.desc}
                  </p>
                  <div className="text-2xl font-bold text-primary-red animate-pulse-slow">{item.percent}</div>
                  <p className="text-sm text-gray-500">평균 매출 비중</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI 최대화 섹션 */}
        <section className="py-16 bg-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  ROI 최대화를 위한 시스템
                </h2>
                <div className="space-y-6">
                  {[
                    { num: '1', title: '낮은 초기 투자비용', desc: '8천만원~1억원으로 치킨 프랜차이즈 대비 합리적인 창업 비용' },
                    { num: '2', title: '높은 수익률', desc: '검증된 메뉴와 운영 노하우로 월 순이익 800만원~1,200만원 달성 가능' },
                    { num: '3', title: '빠른 손익분기점', desc: '평균 12~18개월 내 손익분기점 달성으로 안정적인 투자 회수' }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start"
                    >
                      <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white font-bold">{item.num}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">
                  월 예상 수익 분석
                </h3>
                <div className="space-y-4">
                  {[
                    { label: '월 매출액', value: '3,500만원', color: 'text-primary-red' },
                    { label: '원가율 (재료비)', value: '30%', color: 'text-gray-700' },
                    { label: '인건비', value: '25%', color: 'text-gray-700' },
                    { label: '임대료 & 기타', value: '15%', color: 'text-gray-700' },
                    { label: '순이익', value: '1,050만원 (30%)', color: 'text-white', bg: 'bg-primary-red' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-center p-4 rounded-lg ${item.bg || 'bg-cream-white'}`}
                    >
                      <span className={`font-semibold ${item.bg ? 'text-white' : 'text-charcoal'}`}>{item.label}</span>
                      <span className={`text-lg font-bold ${item.color}`}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 고객 후기 슬라이드 섹션 */}
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                생생한 고객 후기
              </h2>
              <p className="text-lg text-gray-600">
                다양한 플랫폼에서 검증된 후켄의 맛과 품질
              </p>
            </div>
            
            {/* 배달의민족 후기 - 오른쪽으로 슬라이드 */}
            <div className="mb-16">
              <div className="flex items-center mb-6 animate-fade-in-right">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center mr-3 animate-bounce-in">
                  <span className="text-white font-bold text-lg">배</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal">배달의 민족 후기</h3>
                <div className="ml-auto bg-accent-yellow px-4 py-2 rounded-full animate-pulse-slow">
                  <span className="text-dark-brown font-bold">평점 4.8/5.0</span>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll-right-infinite space-x-6">
                  {[
                    { rating: "⭐⭐⭐⭐⭐", review: "진짜 바삭바삭하고 맛있어요! 양념도 달콤하면서 매콤해서 딱 제 스타일이에요.", user: "김○○님", menu: "양념치킨", image: "/images/reviews/baemin-1.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "동네에서 유명한 치킨집이라길래 주문해봤는데 정말 맛있네요. 후라이드 바삭함이 장난 아니에요!", user: "이○○님", menu: "후라이드", image: "/images/reviews/baemin-2.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "가족들이랑 먹으려고 반반 시켰는데 둘 다 너무 맛있어서 다음엔 두 마리 시킬 예정이에요", user: "박○○님", menu: "반/반치킨", image: "/images/reviews/baemin-3.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "순살이라 먹기 편하고 아이들도 잘 먹어요. 양도 많고 포장도 깔끔하게 잘 해주셨습니다.", user: "최○○님", menu: "순살 양념치킨", image: "/images/reviews/baemin-4.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "부대찌개도 주문했는데 얼큰하니 치킨이랑 정말 잘 어울리네요. 완전 강추!", user: "정○○님", menu: "얼큰부대찌개", image: "/images/reviews/baemin-5.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "27년 전통이라는데 진짜 맛이 다르네요. 이제 다른 치킨은 못 먹을 것 같아요.", user: "조○○님", menu: "후라이드", image: "/images/reviews/baemin-6.jpg" },
                  ].concat([
                    { rating: "⭐⭐⭐⭐⭐", review: "진짜 바삭바삭하고 맛있어요! 양념도 달콤하면서 매콤해서 딱 제 스타일이에요.", user: "김○○님", menu: "양념치킨", image: "/images/reviews/baemin-1.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "동네에서 유명한 치킨집이라길래 주문해봤는데 정말 맛있네요. 후라이드 바삭함이 장난 아니에요!", user: "이○○님", menu: "후라이드", image: "/images/reviews/baemin-2.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "가족들이랑 먹으려고 반반 시켰는데 둘 다 너무 맛있어서 다음엔 두 마리 시킬 예정이에요", user: "박○○님", menu: "반/반치킨", image: "/images/reviews/baemin-3.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "순살이라 먹기 편하고 아이들도 잘 먹어요. 양도 많고 포장도 깔끔하게 잘 해주셨습니다.", user: "최○○님", menu: "순살 양념치킨", image: "/images/reviews/baemin-4.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "부대찌개도 주문했는데 얼큰하니 치킨이랑 정말 잘 어울리네요. 완전 강추!", user: "정○○님", menu: "얼큰부대찌개", image: "/images/reviews/baemin-5.jpg" },
                    { rating: "⭐⭐⭐⭐⭐", review: "27년 전통이라는데 진짜 맛이 다르네요. 이제 다른 치킨은 못 먹을 것 같아요.", user: "조○○님", menu: "후라이드", image: "/images/reviews/baemin-6.jpg" },
                  ]).map((review, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md min-w-[280px] h-[450px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      {/* 이미지 섹션 */}
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        {review.image ? (
                          <img
                            src={review.image}
                            alt={`${review.menu} 후기 이미지`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center">
                            <span className="text-cyan-500 text-6xl">🍗</span>
                          </div>
                        )}
                      </div>
                      
                      {/* 콘텐츠 섹션 */}
                      <div className="p-4 h-[258px] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-lg">{review.rating}</div>
                            <div className="text-xs text-primary-red font-semibold bg-red-50 px-2 py-1 rounded">
                              {review.menu}
                            </div>
                          </div>
                          
                          <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                            &ldquo;{review.review}&rdquo;
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-2">
                              <span className="text-white text-xs font-bold">배</span>
                            </div>
                            <span className="text-sm text-gray-600">{review.user}</span>
                          </div>
                          <div className="text-xs text-gray-400">배달의민족</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 인스타그램 후기 - 왼쪽으로 슬라이드 */}
            <div className="mb-16">
              <div className="flex items-center mb-6 animate-fade-in-left">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 animate-bounce-in">
                  <span className="text-white font-bold text-lg">📷</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal">인스타그램 후기</h3>
                <div className="ml-auto bg-pink-100 px-4 py-2 rounded-full animate-pulse-slow">
                  <span className="text-pink-700 font-bold">#후켄치킨 #맛집</span>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll-left-infinite space-x-6">
                  {[
                    { image: "/images/reviews/instagram-1.jpg", caption: "후켄 치킨 진짜 맛있다 ㅠㅠ 바삭바삭", user: "@foodlover_k", likes: "좋아요 89개", hashtags: ["#후켄치킨", "#맛집", "#바삭바삭"] },
                    { image: "/images/reviews/instagram-2.jpg", caption: "오징어튀김도 완전 맛있어요! 쫄깃쫄깃", user: "@chicken_master", likes: "좋아요 124개", hashtags: ["#오징어튀김", "#쫄깃", "#후켄"] },
                    { image: "/images/reviews/instagram-3.jpg", caption: "27년 전통이 느껴지는 정말 맛있는 치킨집!", user: "@taste_hunter", likes: "좋아요 156개", hashtags: ["#27년전통", "#치킨맛집", "#후켄"] },
                    { image: "/images/reviews/instagram-4.jpg", caption: "부대찌개랑 치킨 조합이 최고! 완전 강추", user: "@spicy_lover", likes: "좋아요 98개", hashtags: ["#부대찌개", "#치킨", "#조합최고"] },
                    { image: "/images/reviews/instagram-5.jpg", caption: "가족들이랑 와서 먹었는데 다들 만족! 재방문 예정", user: "@family_food", likes: "좋아요 203개", hashtags: ["#가족외식", "#만족", "#재방문"] },
                    { image: "/images/reviews/instagram-6.jpg", caption: "치킨도 맛있지만 오징어튀김이 진짜 별미", user: "@squid_fan", likes: "좋아요 87개", hashtags: ["#별미", "#오징어튀김", "#후켄"] },
                  ].concat([
                    { image: "/images/reviews/instagram-1.jpg", caption: "후켄 치킨 진짜 맛있다 ㅠㅠ 바삭바삭", user: "@foodlover_k", likes: "좋아요 89개", hashtags: ["#후켄치킨", "#맛집", "#바삭바삭"] },
                    { image: "/images/reviews/instagram-2.jpg", caption: "오징어튀김도 완전 맛있어요! 쫄깃쫄깃", user: "@chicken_master", likes: "좋아요 124개", hashtags: ["#오징어튀김", "#쫄깃", "#후켄"] },
                    { image: "/images/reviews/instagram-3.jpg", caption: "27년 전통이 느껴지는 정말 맛있는 치킨집!", user: "@taste_hunter", likes: "좋아요 156개", hashtags: ["#27년전통", "#치킨맛집", "#후켄"] },
                    { image: "/images/reviews/instagram-4.jpg", caption: "부대찌개랑 치킨 조합이 최고! 완전 강추", user: "@spicy_lover", likes: "좋아요 98개", hashtags: ["#부대찌개", "#치킨", "#조합최고"] },
                    { image: "/images/reviews/instagram-5.jpg", caption: "가족들이랑 와서 먹었는데 다들 만족! 재방문 예정", user: "@family_food", likes: "좋아요 203개", hashtags: ["#가족외식", "#만족", "#재방문"] },
                    { image: "/images/reviews/instagram-6.jpg", caption: "치킨도 맛있지만 오징어튀김이 진짜 별미", user: "@squid_fan", likes: "좋아요 87개", hashtags: ["#별미", "#오징어튀김", "#후켄"] },
                  ]).map((post, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md min-w-[280px] h-[500px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      {/* 이미지 섹션 */}
                      <div className="h-64 bg-gray-200 overflow-hidden">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={`${post.user} 인스타그램 포스트`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center">
                            <span className="text-pink-500 text-6xl">📷</span>
                          </div>
                        )}
                      </div>
                      
                      {/* 콘텐츠 섹션 */}
                      <div className="p-4 h-[236px] flex flex-col justify-between">
                        <div>
                          {/* 유저 정보 */}
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-2">
                              <span className="text-white text-xs">📷</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-800">{post.user}</span>
                          </div>
                          
                          {/* 캡션 */}
                          <p className="text-gray-700 text-sm leading-relaxed mb-3">
                            {post.caption}
                          </p>
                          
                          {/* 해시태그 */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {post.hashtags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* 하단 정보 */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <div className="flex items-center space-x-3">
                            <span className="text-red-500 text-lg">❤️</span>
                            <span className="text-gray-500 text-lg">💬</span>
                            <span className="text-gray-500 text-lg">📤</span>
                          </div>
                          <span className="text-xs text-gray-500">{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 네이버 블로그 후기 - 오른쪽으로 슬라이드 */}
            <div>
              <div className="flex items-center mb-6 animate-fade-in-right">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3 animate-bounce-in">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <h3 className="text-2xl font-bold text-charcoal">네이버 블로그 후기</h3>
                <div className="ml-auto bg-green-100 px-4 py-2 rounded-full animate-pulse-slow">
                  <span className="text-green-700 font-bold">블로그 리뷰</span>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll-right-slow-infinite space-x-6">
                  {[
                    { title: "순천 맛집 후켄 치킨 후기", preview: "27년 전통의 치킨집이라고 해서 가봤는데 정말 맛있더라구요! 특히 후라이드가 바삭바삭하고 양념치킨도 달콤매콤해서 너무 맛있었어요.", author: "맛집탐험가", date: "2024.01.15", image: "/images/reviews/blog-1.jpg", views: "조회 1,234" },
                    { title: "후켄 치킨 완전 강추! 가족 외식", preview: "아이들이랑 가족 외식으로 다녀왔어요. 치킨도 맛있고 분위기도 좋고 직원분들도 친절하셔서 정말 만족스러운 시간이었습니다.", author: "육아맘일상", date: "2024.01.20", image: "/images/reviews/blog-2.jpg", views: "조회 856" },
                    { title: "치킨 덕후의 후켄 방문기", preview: "치킨을 정말 좋아하는데 후켄은 진짜 다르더라구요. 바삭함이 남달라요! 27년 전통이 느껴지는 정말 맛있는 치킨집입니다.", author: "치킨러버", date: "2024.01.25", image: "/images/reviews/blog-3.jpg", views: "조회 2,103" },
                    { title: "후켄 오징어튀김이 진짜 맛있어요", preview: "치킨만 먹으려고 갔는데 오징어튀김 먹어보라고 해서 시켜봤는데 대박! 바삭하고 쫄깃한 식감이 정말 일품이었습니다.", author: "순천토박이", date: "2024.02.01", image: "/images/reviews/blog-4.jpg", views: "조회 673" },
                    { title: "순천에서 꼭 가봐야 할 치킨집", preview: "순천 여행 와서 우연히 들른 곳인데 정말 맛있었어요. 서울에도 있었으면 좋겠다는 생각이 들 정도로 인상깊은 맛이었습니다.", author: "여행러버", date: "2024.02.05", image: "/images/reviews/blog-5.jpg", views: "조회 1,892" },
                    { title: "후켄 치킨 재방문 후기", preview: "이번이 벌써 세 번째 방문이에요. 갈 때마다 만족스러워서 단골이 되었네요! 항상 변함없는 맛으로 맞아주는 후켄이 최고입니다.", author: "후켄단골", date: "2024.02.10", image: "/images/reviews/blog-6.jpg", views: "조회 945" },
                  ].concat([
                    { title: "순천 맛집 후켄 치킨 후기", preview: "27년 전통의 치킨집이라고 해서 가봤는데 정말 맛있더라구요! 특히 후라이드가 바삭바삭하고 양념치킨도 달콤매콤해서 너무 맛있었어요.", author: "맛집탐험가", date: "2024.01.15", image: "/images/reviews/blog-1.jpg", views: "조회 1,234" },
                    { title: "후켄 치킨 완전 강추! 가족 외식", preview: "아이들이랑 가족 외식으로 다녀왔어요. 치킨도 맛있고 분위기도 좋고 직원분들도 친절하셔서 정말 만족스러운 시간이었습니다.", author: "육아맘일상", date: "2024.01.20", image: "/images/reviews/blog-2.jpg", views: "조회 856" },
                    { title: "치킨 덕후의 후켄 방문기", preview: "치킨을 정말 좋아하는데 후켄은 진짜 다르더라구요. 바삭함이 남달라요! 27년 전통이 느껴지는 정말 맛있는 치킨집입니다.", author: "치킨러버", date: "2024.01.25", image: "/images/reviews/blog-3.jpg", views: "조회 2,103" },
                    { title: "후켄 오징어튀김이 진짜 맛있어요", preview: "치킨만 먹으려고 갔는데 오징어튀김 먹어보라고 해서 시켜봤는데 대박! 바삭하고 쫄깃한 식감이 정말 일품이었습니다.", author: "순천토박이", date: "2024.02.01", image: "/images/reviews/blog-4.jpg", views: "조회 673" },
                    { title: "순천에서 꼭 가봐야 할 치킨집", preview: "순천 여행 와서 우연히 들른 곳인데 정말 맛있었어요. 서울에도 있었으면 좋겠다는 생각이 들 정도로 인상깊은 맛이었습니다.", author: "여행러버", date: "2024.02.05", image: "/images/reviews/blog-5.jpg", views: "조회 1,892" },
                    { title: "후켄 치킨 재방문 후기", preview: "이번이 벌써 세 번째 방문이에요. 갈 때마다 만족스러워서 단골이 되었네요! 항상 변함없는 맛으로 맞아주는 후켄이 최고입니다.", author: "후켄단골", date: "2024.02.10", image: "/images/reviews/blog-6.jpg", views: "조회 945" },
                  ]).map((blog, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md min-w-[300px] h-[480px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      {/* 이미지 섹션 */}
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        {blog.image ? (
                          <img
                            src={blog.image}
                            alt={`${blog.title} 블로그 이미지`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                            <span className="text-green-500 text-6xl">📝</span>
                          </div>
                        )}
                      </div>
                      
                      {/* 콘텐츠 섹션 */}
                      <div className="p-4 h-[288px] flex flex-col justify-between">
                        <div>
                          {/* 블로그 플랫폼 표시 */}
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-2">
                              <span className="text-white text-xs font-bold">N</span>
                            </div>
                            <span className="text-xs text-green-600 font-semibold">네이버 블로그</span>
                          </div>
                          
                          {/* 제목 */}
                          <h4 className="font-bold text-gray-800 mb-3 text-sm leading-tight line-clamp-2">
                            {blog.title}
                          </h4>
                          
                          {/* 내용 미리보기 */}
                          <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-4">
                            {blog.preview}
                          </p>
                        </div>
                        
                        {/* 하단 정보 */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="font-medium text-gray-700">by {blog.author}</span>
                            <span>{blog.views}</span>
                          </div>
                          
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">{blog.date}</span>
                            <div className="flex items-center space-x-2 text-gray-400">
                              <span>👍</span>
                              <span>💬</span>
                              <span>📄</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 매장 인테리어 섹션 */}
        <section className="py-16 bg-white animate-flip-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-elastic-in">
              <h2 className="text-3xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">
                감각적인 매장 인테리어
              </h2>
              <p className="text-lg text-gray-600 animate-slide-in-enhanced animate-delay-300">
                레트로 감성과 현대적 세련미가 조화된 인테리어 디자인
              </p>
            </div>
            
            {/* 인테리어 이미지 슬라이더 */}
            <div className="mb-12 animate-fade-in-up">
              <div className="relative max-w-4xl mx-auto">
                {/* 메인 이미지 */}
                <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                  {interiorImages[currentSlide] ? (
                    <img
                      src={interiorImages[currentSlide].image}
                      alt={interiorImages[currentSlide].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-6xl">🏪</span>
                    </div>
                  )}
                  
                  {/* 이전 버튼 */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* 다음 버튼 */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* 슬라이드 정보 오버레이 */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h4 className="text-white font-bold text-xl mb-2">{interiorImages[currentSlide]?.title}</h4>
                    <p className="text-gray-200">{interiorImages[currentSlide]?.description}</p>
                  </div>
                </div>
                
                {/* 슬라이드 인디케이터 */}
                <div className="flex justify-center mt-6 space-x-2">
                  {interiorImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary-red scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                {/* 썸네일 */}
                <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                  {interiorImages.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentSlide 
                          ? 'border-primary-red scale-110' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">🏪</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: '🎨', title: '디자인 컨셉', items: ['레트로 간판 스타일과 현대적 감각의 조화', '따뜻한 조명으로 아늑한 분위기 연출', '브랜드 컬러 활용한 통일성 있는 디자인', 'SNS 인증샷 명소가 되는 포토존 구성'] },
                { icon: '💰', title: '인테리어 비용', items: ['소형매장 (20평): 3,000만원', '중형매장 (30평): 4,000만원', '대형매장 (40평): 5,000만원', '본부 직접 시공관리로 품질 보장'] }
              ].map((section, index) => (
                <div 
                  key={index} 
                  className="bg-cream-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                    <span className="mr-3 text-2xl animate-bounce-in">{section.icon}</span>
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {section.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="animate-fade-in-right transform transition-all duration-300 hover:translate-x-2 hover:text-charcoal"
                        style={{animationDelay: `${(index * 0.2) + (itemIndex * 0.1)}s`}}
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-primary-red to-red-700 text-white p-8 rounded-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <h3 className="text-2xl font-bold mb-4 animate-bounce-in">인테리어 무료 설계 서비스</h3>
              <p className="text-lg mb-6 animate-fade-in-delay">
                매장 도면 분석부터 3D 설계까지 전문 디자이너가 무료로 진행합니다
              </p>
              <Link
                href="/franchise"
                className="bg-accent-yellow text-dark-brown px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 inline-block transform hover:-translate-y-1 hover:scale-105 animate-float"
              >
                무료 설계 상담 받기
              </Link>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-16 bg-primary-red text-white animate-zoom-in-rotate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 animate-glow-pulse">
              성공 창업의 기회, 후켄과 함께하세요!
            </h2>
            <p className="text-xl mb-8 text-gray-100 animate-elastic-in animate-delay-200">
              27년 전통의 검증된 브랜드로 안정적인 수익을 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in-enhanced animate-delay-400">
              <Link
                href="/franchise"
                className="bg-accent-yellow text-dark-brown px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-shimmer-enhanced hover:animate-wiggle"
              >
                📞 가맹 상담 신청
              </Link>
              <Link
                href="/stores"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-red transition-all duration-300 transform hover:-translate-y-1 hover:animate-bounce-in-enhanced"
              >
                🏪 매장 둘러보기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
