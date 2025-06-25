'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: '',
    experience: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 서버로 데이터를 전송
    alert('가맹 상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      region: '',
      experience: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* 페이지 헤더 */}
        <section className="bg-gradient-to-br from-primary-red to-red-700 text-white py-20 animate-zoom-in-rotate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-glow-pulse animate-elastic-in">
              후켄 가맹 안내
            </h1>
            <p className="text-xl text-gray-100 animate-bounce-in-enhanced animate-delay-300">
              성공 창업의 기회, 후켄과 함께하세요
            </p>
          </div>
        </section>

        {/* 가맹 장점 */}
        <section className="py-20 bg-cream-white animate-flip-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-scale-up">
              <h2 className="text-3xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">
                후켄 가맹의 장점
              </h2>
              <p className="text-lg text-gray-600 animate-slide-in-enhanced animate-delay-200">
                27년간 쌓아온 노하우와 검증된 비즈니스 모델
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-8 rounded-lg shadow-md animate-elastic-in hover:animate-bounce-in-enhanced transform-3d">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                  <span className="text-2xl animate-wiggle">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">검증된 브랜드</h3>
                <p className="text-gray-600 animate-slide-in-enhanced animate-delay-300">
                  27년간 축적된 브랜드 가치와 고객 신뢰도
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md animate-elastic-in animate-delay-100 hover:animate-bounce-in-enhanced transform-3d">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                  <span className="text-2xl animate-wiggle">📈</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">안정적 수익</h3>
                <p className="text-gray-600 animate-slide-in-enhanced animate-delay-400">
                  검증된 메뉴와 운영 시스템으로 안정적인 매출 구조
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md animate-elastic-in animate-delay-200 hover:animate-bounce-in-enhanced transform-3d">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                  <span className="text-2xl animate-wiggle">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">체계적 지원</h3>
                <p className="text-gray-600 animate-slide-in-enhanced animate-delay-500">
                  창업부터 운영까지 전 과정 맞춤형 지원
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-lg shadow-md animate-elastic-in animate-delay-300 hover:animate-bounce-in-enhanced transform-3d">
                <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                  <span className="text-2xl animate-wiggle">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">차별화된 메뉴</h3>
                <p className="text-gray-600 animate-slide-in-enhanced animate-delay-600">
                  독자적인 레시피와 지속적인 메뉴 개발
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 창업 비용 */}
        <section className="py-20 bg-white animate-fade-scale-up">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-zoom-in-rotate">
              <h2 className="text-3xl font-bold text-charcoal mb-4 animate-glow-pulse">
                창업 비용 안내
              </h2>
              <p className="text-lg text-gray-600 animate-bounce-in-enhanced animate-delay-200">
                투명하고 합리적인 창업 비용 구조
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-primary-red text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">항목</th>
                    <th className="px-6 py-4 text-left">금액</th>
                    <th className="px-6 py-4 text-left">설명</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">가맹비</td>
                    <td className="px-6 py-4 text-primary-red font-bold">1,500만원</td>
                    <td className="px-6 py-4 text-gray-600">브랜드 사용권 및 초기 교육</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">보증금</td>
                    <td className="px-6 py-4 text-primary-red font-bold">500만원</td>
                    <td className="px-6 py-4 text-gray-600">계약 이행 보증 (만료시 반환)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">인테리어</td>
                    <td className="px-6 py-4 text-primary-red font-bold">3,000~5,000만원</td>
                    <td className="px-6 py-4 text-gray-600">매장 규모에 따라 차등</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">장비</td>
                    <td className="px-6 py-4 text-primary-red font-bold">2,000~3,000만원</td>
                    <td className="px-6 py-4 text-gray-600">주방장비, POS 시스템 등</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">운영자금</td>
                    <td className="px-6 py-4 text-primary-red font-bold">1,000만원</td>
                    <td className="px-6 py-4 text-gray-600">초기 재료비, 인건비 등</td>
                  </tr>
                  <tr className="bg-primary-red text-white font-bold">
                    <td className="px-6 py-4">총 창업 비용</td>
                    <td className="px-6 py-4">8,000~1억원</td>
                    <td className="px-6 py-4">매장 조건에 따라 차등</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 가맹 절차 */}
        <section className="py-20 bg-cream-white animate-flip-in">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-elastic-in">
              <h2 className="text-3xl font-bold text-charcoal mb-4 animate-shimmer-enhanced">
                가맹 절차
              </h2>
              <p className="text-lg text-gray-600 animate-slide-in-enhanced animate-delay-200">
                체계적이고 투명한 가맹 진행 과정
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1단계', title: '상담 신청', desc: '온라인/전화 상담 신청 및 기본 정보 확인', icon: '📞' },
                { step: '2단계', title: '사업 설명회', desc: '브랜드 소개 및 사업 모델 설명', icon: '💼' },
                { step: '3단계', title: '계약 체결', desc: '가맹 계약서 작성 및 계약금 납부', icon: '📋' },
                { step: '4단계', title: '매장 오픈', desc: '인테리어, 교육, 홍보를 거쳐 정식 오픈', icon: '🎉' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{process.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center text-dark-brown font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{process.step}</h3>
                  <h4 className="text-lg font-semibold text-primary-red mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 지원 내용 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                본부 지원 내용
              </h2>
              <p className="text-lg text-gray-600">
                성공 창업을 위한 전방위적 지원 시스템
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-cream-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <span className="mr-3">🏗️</span>
                  매장 개발
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 입지 분석 및 선정 지원</li>
                  <li>• 인테리어 설계 및 시공 관리</li>
                  <li>• 각종 인허가 업무 지원</li>
                  <li>• 장비 설치 및 점검</li>
                </ul>
              </div>
              
              <div className="bg-cream-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <span className="mr-3">👨‍🏫</span>
                  교육 훈련
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 점주 교육 프로그램</li>
                  <li>• 직원 교육 및 매뉴얼</li>
                  <li>• 조리법 및 서비스 교육</li>
                  <li>• 정기 재교육 실시</li>
                </ul>
              </div>
              
              <div className="bg-cream-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <span className="mr-3">📊</span>
                  운영 지원
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 매출 분석 및 컨설팅</li>
                  <li>• 재료 공급 시스템</li>
                  <li>• POS 시스템 운영</li>
                  <li>• 정기 점검 및 관리</li>
                </ul>
              </div>
              
              <div className="bg-cream-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <span className="mr-3">📢</span>
                  마케팅
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 브랜드 광고 및 홍보</li>
                  <li>• 지역 마케팅 지원</li>
                  <li>• 프로모션 기획 및 진행</li>
                  <li>• SNS 마케팅 교육</li>
                </ul>
              </div>
              
              <div className="bg-cream-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <span className="mr-3">🔧</span>
                  기술 지원
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• IT 시스템 구축</li>
                  <li>• 장비 유지보수</li>
                  <li>• 신메뉴 개발 및 공유</li>
                  <li>• 기술 업데이트</li>
                </ul>
              </div>
              
              <div className="bg-cream-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center">
                  <span className="mr-3">💰</span>
                  금융 지원
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 창업 자금 대출 연계</li>
                  <li>• 정부 지원 사업 안내</li>
                  <li>• 리스 및 할부 서비스</li>
                  <li>• 경영 컨설팅</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 가맹 상담 신청 폼 */}
        <section className="py-20 bg-primary-red animate-fade-scale-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 text-white animate-zoom-in-rotate">
              <h2 className="text-3xl font-bold mb-4 animate-glow-pulse">
                가맹 상담 신청
              </h2>
              <p className="text-xl text-gray-100 animate-bounce-in-enhanced animate-delay-200">
                후켄과 함께할 여러분의 연락을 기다립니다
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg animate-elastic-in animate-delay-400 transform-3d">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                      희망 지역 *
                    </label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      required
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      placeholder="예: 서울시 강남구"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      예상 투자 금액
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    >
                      <option value="">선택해주세요</option>
                      <option value="5000-8000">5,000만원 ~ 8,000만원</option>
                      <option value="8000-1억">8,000만원 ~ 1억원</option>
                      <option value="1억-1.5억">1억원 ~ 1.5억원</option>
                      <option value="1.5억이상">1.5억원 이상</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    창업 경험
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  >
                    <option value="">선택해주세요</option>
                    <option value="없음">창업 경험 없음</option>
                    <option value="외식업">외식업 경험 있음</option>
                    <option value="가맹점">가맹점 운영 경험</option>
                    <option value="기타">기타 창업 경험</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    placeholder="궁금한 점이나 문의 사항을 자유롭게 작성해주세요"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary-red text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-200 animate-shimmer-enhanced hover:animate-wiggle transform hover:-translate-y-1 hover:scale-105"
                  >
                    상담 신청하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 