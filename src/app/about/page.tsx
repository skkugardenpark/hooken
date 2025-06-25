import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* 페이지 헤더 */}
        <section className="bg-gradient-to-br from-primary-red to-red-700 text-white py-20 animate-fade-scale-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-glow-pulse animate-elastic-in">
              후켄 이야기
            </h1>
            <p className="text-xl text-gray-100 animate-bounce-in-enhanced animate-delay-300">
              1997년부터 시작된 우리의 특별한 여정
            </p>
          </div>
        </section>

        {/* 브랜드 철학 */}
        <section className="py-20 bg-cream-white animate-flip-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-charcoal mb-8 animate-shimmer-enhanced animate-zoom-in-rotate">
              &ldquo;우리는 치킨만 파는 게 아니라, 시간을 튀깁니다&rdquo;
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed animate-slide-in-enhanced animate-delay-400">
              후켄에서는 단순히 음식을 파는 것이 아니라, 소중한 추억과 따뜻한 시간을 만들어갑니다.<br />
              가족과 함께, 친구와 함께, 동료와 함께 나누는 특별한 순간들을<br />
              바삭한 치킨과 시원한 맥주로 더욱 맛있게 만들어드리고 싶습니다.
            </p>
          </div>
        </section>

        {/* 브랜드 스토리 */}
        <section className="py-20 bg-white animate-fade-scale-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-enhanced">
                <h2 className="text-3xl font-bold text-charcoal mb-6 animate-bounce-in-enhanced">
                  1997년, 작은 시작
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="animate-elastic-in animate-delay-200">
                    1997년 봄, 전라남도 순천의 작은 골목에서 후켄의 첫 번째 이야기가 시작되었습니다. 
                    창업주 김사장님은 &ldquo;진짜 맛있는 치킨을 동네 사람들과 나누고 싶다&rdquo;는 단순한 마음으로 
                    첫 매장의 문을 열었습니다.
                  </p>
                  <p className="animate-elastic-in animate-delay-400">
                    처음엔 작은 호프집이었지만, 정성스럽게 튀긴 치킨과 따뜻한 서비스로 입소문이 나기 시작했습니다. 
                    &ldquo;후켄 가면 치킨이 정말 맛있어&rdquo;라는 말이 동네 곳곳에 퍼지면서, 
                    자연스럽게 많은 사람들이 찾아오는 명소가 되었습니다.
                  </p>
                </div>
              </div>
              
              <div className="bg-cream-white p-8 rounded-lg animate-zoom-in-rotate hover:animate-wiggle transform-3d">
                <div className="text-center mb-6">
                  <span className="text-6xl animate-bounce-in-enhanced animate-glow-pulse">🏪</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-charcoal mb-2 animate-shimmer-enhanced">첫 매장</h3>
                  <p className="text-gray-600 animate-slide-in-enhanced animate-delay-200">순천 서신동</p>
                  <p className="text-sm text-gray-500 animate-elastic-in animate-delay-300">1997년 개업</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 전통 레시피 */}
        <section className="py-20 bg-cream-white animate-flip-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-zoom-in-rotate">
              <h2 className="text-3xl font-bold text-charcoal mb-4 animate-glow-pulse">
                변하지 않는 전통 레시피
              </h2>
              <p className="text-lg text-gray-600 animate-bounce-in-enhanced animate-delay-200">
                27년간 지켜온 후켄만의 비법
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-lg shadow-md animate-elastic-in hover:animate-bounce-in-enhanced transform-3d">
                <div className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                  <span className="text-3xl animate-wiggle">🔥</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">정통 튀김법</h3>
                <p className="text-gray-600 leading-relaxed animate-slide-in-enhanced animate-delay-300">
                  27년간 변하지 않는 튀김 온도와 시간. 
                  겉은 바삭하고 속은 촉촉한 완벽한 치킨을 위한 노하우입니다.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md animate-elastic-in animate-delay-200 hover:animate-bounce-in-enhanced transform-3d">
                <div className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                  <span className="text-3xl animate-wiggle">🌶️</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">특제 양념</h3>
                <p className="text-gray-600 leading-relaxed animate-slide-in-enhanced animate-delay-400">
                  15가지 천연 향신료를 배합한 후켄만의 특제 양념. 
                  달콤하면서도 중독적인 맛의 비밀입니다.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md animate-elastic-in animate-delay-400 hover:animate-bounce-in-enhanced transform-3d">
                <div className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                  <span className="text-3xl animate-wiggle">🐔</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">신선한 재료</h3>
                <p className="text-gray-600 leading-relaxed animate-slide-in-enhanced animate-delay-500">
                  매일 새벽 도축된 신선한 닭고기만을 사용. 
                  품질에 타협하지 않는 후켄의 철칙입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 시그니처 메뉴 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                시그니처 메뉴
              </h2>
              <p className="text-lg text-gray-600">
                후켄이 자랑하는 대표 메뉴들
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-cream-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🍗</span>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">후켄 후라이드</h3>
                    <p className="text-accent-yellow font-bold">18,000원</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  1997년부터 변하지 않는 원조 후라이드. 바삭한 겉껍질과 촉촉한 속살의 
                  완벽한 조화가 후켄의 시작이자 자랑입니다.
                </p>
                <p className="text-sm text-primary-red font-semibold">
                  ⭐ 가장 많이 주문되는 인기 메뉴
                </p>
              </div>
              
              <div className="bg-cream-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🌶️</span>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">통통 양념치킨</h3>
                    <p className="text-accent-yellow font-bold">20,000원</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  달콤하면서도 매콤한 특제 양념이 일품. 15가지 향신료의 조화로 만들어낸 
                  후켄만의 특별한 맛입니다.
                </p>
                <p className="text-sm text-primary-red font-semibold">
                  ⭐ 단골들이 가장 사랑하는 메뉴
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 현재와 미래 */}
        <section className="py-20 bg-primary-red text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">
              그리고 지금, 그리고 앞으로
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-4">🏆 현재의 후켄</h3>
                <ul className="space-y-2 text-gray-100">
                  <li>• 전국 12개 매장 운영</li>
                  <li>• 연간 50만 마리 치킨 판매</li>
                  <li>• 3세대가 함께 찾는 가족 맛집</li>
                  <li>• 지역 일자리 창출 80여 명</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">🚀 미래의 꿈</h3>
                <ul className="space-y-2 text-gray-100">
                  <li>• 전국 100개 매장 목표</li>
                  <li>• 청년 창업 지원 프로그램</li>
                  <li>• 지역 상생 프로젝트 확대</li>
                  <li>• K-치킨의 글로벌 진출</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg">
              <p className="text-lg leading-relaxed">
                &ldquo;후켄은 단순한 치킨 브랜드가 아닙니다. <br />
                우리는 사람과 사람을 잇는 맛있는 연결고리이고, <br />
                소중한 추억을 만드는 따뜻한 공간입니다.&rdquo;
              </p>
              <p className="mt-4 text-accent-yellow font-semibold">
                - 후켄 창업주 김사장님
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 