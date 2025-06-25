'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Store {
  name: string;
  address: string;
  phone: string;
  hours: string;
  status: 'open' | 'closed' | 'new';
  features?: string[];
  city: string;
  district: string;
  lat?: number;
  lng?: number;
}

export default function StoresPage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const stores: Store[] = [
    {
      name: '후켄 서신동 본점',
      address: '전라남도 순천시 서신동 123-45',
      phone: '061-123-4567',
      hours: '매일 17:00 - 02:00',
      status: 'open',
      features: ['1호점', '주차가능', '단체석'],
      city: '전라남도',
      district: '순천시',
      lat: 34.9506,
      lng: 127.4872
    },
    {
      name: '후켄 순천 조례점',
      address: '전라남도 순천시 조례동 567-89',
      phone: '061-234-5678',
      hours: '매일 17:00 - 02:00',
      status: 'open',
      features: ['주차가능', '배달가능'],
      city: '전라남도',
      district: '순천시',
      lat: 34.9489,
      lng: 127.4894
    },
    {
      name: '후켄 광양점',
      address: '전라남도 광양시 중마동 789-12',
      phone: '061-345-6789',
      hours: '매일 17:00 - 02:00',
      status: 'open',
      features: ['드라이브스루', '주차가능'],
      city: '전라남도',
      district: '광양시',
      lat: 34.9407,
      lng: 127.6978
    },
    {
      name: '후켄 여수점',
      address: '전라남도 여수시 문수동 345-67',
      phone: '061-456-7890',
      hours: '매일 17:00 - 02:00',
      status: 'open',
      features: ['바다뷰', '주차가능', '단체석'],
      city: '전라남도',
      district: '여수시',
      lat: 34.7604,
      lng: 127.6622
    },
    {
      name: '후켄 목포점',
      address: '전라남도 목포시 연산동 890-12',
      phone: '061-567-8901',
      hours: '매일 17:00 - 02:00',
      status: 'open',
      features: ['주차가능', '배달가능'],
      city: '전라남도',
      district: '목포시',
      lat: 34.8118,
      lng: 126.3922
    },
    {
      name: '후켄 광주 상무점',
      address: '광주광역시 서구 상무대로 456-78',
      phone: '062-123-4567',
      hours: '매일 17:00 - 02:00',
      status: 'new',
      features: ['신규오픈', '주차가능', '단체석', '배달가능'],
      city: '광주광역시',
      district: '서구',
      lat: 35.1559,
      lng: 126.8613
    }
  ];

  const cities = ['전체', '전라남도', '광주광역시'];
  const getDistricts = (city: string) => {
    if (city === '전라남도') return ['전체', '순천시', '광양시', '여수시', '목포시'];
    if (city === '광주광역시') return ['전체', '서구', '동구', '남구', '북구', '광산구'];
    return ['전체'];
  };

  const filteredStores = stores.filter(store => {
    const cityMatch = !selectedCity || selectedCity === '전체' || store.city === selectedCity;
    const districtMatch = !selectedDistrict || selectedDistrict === '전체' || store.district === selectedDistrict;
    const nameMatch = !searchTerm || store.name.toLowerCase().includes(searchTerm.toLowerCase());
    return cityMatch && districtMatch && nameMatch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-yellow text-dark-brown">
            신규
          </span>
        );
      case 'open':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            영업중
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            준비중
          </span>
        );
      default:
        return null;
    }
  };

  const handleSearch = () => {
    // 검색 로직은 이미 filteredStores에서 처리됨
    console.log('검색 실행:', { selectedCity, selectedDistrict, searchTerm });
  };

  const handleStoreClick = (store: Store) => {
    setSelectedStore(store);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* 페이지 헤더 */}
        <section className="bg-primary-red text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              매장 찾기
            </h1>
            <p className="text-xl text-gray-100">
              가까운 후켄 매장을 찾아보세요
            </p>
          </div>
        </section>

        {/* 검색 섹션 */}
        <section className="bg-white py-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-4 justify-center">
              {/* 시/도 선택 */}
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedDistrict('');
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
              >
                <option value="">시/도</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              {/* 시/구/군 선택 */}
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                disabled={!selectedCity || selectedCity === '전체'}
              >
                <option value="">시/구/군</option>
                {selectedCity && selectedCity !== '전체' && getDistricts(selectedCity).map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              {/* 매장명 입력 */}
              <input
                type="text"
                placeholder="매장명 입력"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent min-w-[200px]"
              />

              {/* 검색 버튼 */}
              <button
                onClick={handleSearch}
                className="bg-primary-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                검색
              </button>
            </div>
          </div>
        </section>

        {/* 메인 컨텐츠 - 매장 리스트 + 지도 */}
        <section className="flex-1">
          <div className="h-[calc(100vh-280px)] flex">
            {/* 좌측 매장 리스트 */}
            <div className="w-full lg:w-1/2 bg-gray-50 overflow-y-auto">
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-charcoal">
                    매장 목록 ({filteredStores.length}개)
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {filteredStores.map((store, index) => (
                    <div 
                      key={index} 
                      className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
                        selectedStore?.name === store.name ? 'border-primary-red' : 'border-transparent'
                      }`}
                      onClick={() => handleStoreClick(store)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-charcoal">
                            {store.name}
                          </h3>
                          {getStatusBadge(store.status)}
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <span className="text-base mr-2">📍</span>
                          <span>{store.address}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-base mr-2">📞</span>
                          <a 
                            href={`tel:${store.phone}`} 
                            className="text-primary-red hover:underline font-semibold"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {store.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-base mr-2">🕐</span>
                          <span>{store.hours}</span>
                        </div>
                      </div>

                      {/* 매장 특징 */}
                      {store.features && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {store.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* 액션 버튼 */}
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const query = encodeURIComponent(store.address);
                            window.open(`https://maps.google.com/maps?q=${query}`, '_blank');
                          }}
                          className="bg-dark-brown text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-800 transition-colors duration-200"
                        >
                          길찾기
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = '/franchise';
                          }}
                          className="btn-primary px-3 py-1.5 rounded text-xs font-medium"
                        >
                          가맹 문의
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredStores.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">🔍</div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
                    <p className="text-gray-500">다른 검색 조건을 시도해보세요.</p>
                  </div>
                )}
              </div>
            </div>

            {/* 우측 지도 */}
            <div className="hidden lg:block w-1/2 bg-gray-200 relative">
              <div className="h-full">
                {selectedStore ? (
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedStore.address)}&output=embed&z=15`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${selectedStore.name} 지도`}
                  ></iframe>
                ) : (
                  <div className="h-full flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="text-gray-400 text-6xl mb-4">🗺️</div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">매장을 선택해주세요</h3>
                      <p className="text-gray-500">왼쪽 목록에서 매장을 클릭하면<br />해당 위치를 지도에서 확인할 수 있습니다.</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* 지도 위 선택된 매장 정보 */}
              {selectedStore && (
                <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-charcoal">{selectedStore.name}</h4>
                    {getStatusBadge(selectedStore.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{selectedStore.address}</p>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${selectedStore.phone}`}
                      className="text-primary-red text-sm font-medium hover:underline"
                    >
                      📞 {selectedStore.phone}
                    </a>
                    <span className="text-sm text-gray-500">|</span>
                    <span className="text-sm text-gray-600">{selectedStore.hours}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 모바일용 지도 섹션 */}
        <section className="lg:hidden">
          {selectedStore && (
            <div className="h-96 bg-gray-200">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedStore.address)}&output=embed&z=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${selectedStore.name} 지도`}
              ></iframe>
            </div>
          )}
        </section>

        {/* CTA 섹션 */}
        <section className="py-16 bg-primary-red text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              새로운 매장이 곧 오픈합니다!
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              후켄이 더 가까운 곳에서 여러분을 기다릴게요
            </p>
            <a
              href="/franchise"
              className="bg-accent-yellow text-dark-brown px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-200 inline-block"
            >
              가맹 문의하기
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 