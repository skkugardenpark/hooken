import Link from 'next/link';

export default function Footer() {
  const navigation = [
    { name: '메뉴', href: '/menu' },
    { name: '브랜드 소개', href: '/about' },
    { name: '매장 찾기', href: '/stores' },
    { name: '가맹 문의', href: '/franchise' },
  ];

  return (
    <footer className="bg-dark-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 브랜드 정보 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                후켄<span className="text-accent-yellow">HOOKEN</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              통통한 맛, 전통의 한입<br />
              1997년부터 이어온 동네 치킨의 정석
            </p>
            <p className="text-sm text-gray-400">
              우리는 치킨만 파는 게 아니라, 시간을 튀깁니다
            </p>
          </div>

          {/* 메뉴 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">메뉴</h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-accent-yellow transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* 연락처 및 SNS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-300">
                <span className="block">대표전화</span>
                <a href="tel:061-123-4567" className="text-accent-yellow hover:underline">
                  061-123-4567
                </a>
              </p>
              <p className="text-gray-300">
                <span className="block">가맹문의</span>
                <a href="tel:061-987-6543" className="text-accent-yellow hover:underline">
                  061-987-6543
                </a>
              </p>
            </div>

            {/* SNS 아이콘 */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-yellow transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.354-1.057-2.354-2.354s1.057-2.354 2.354-2.354 2.354 1.057 2.354 2.354-1.057 2.354-2.354 2.354zm3.568 0c-1.297 0-2.354-1.057-2.354-2.354s1.057-2.354 2.354-2.354 2.354 1.057 2.354 2.354-1.057 2.354-2.354 2.354zm3.568 0c-1.297 0-2.354-1.057-2.354-2.354s1.057-2.354 2.354-2.354 2.354 1.057 2.354 2.354-1.057 2.354-2.354 2.354z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-yellow transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-yellow transition-colors duration-200"
              >
                <span className="sr-only">Blog</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm-1-13h2v6h-2zm0-2h2v2h-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 하단 경계선과 저작권 */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 1997 HOOKEN. 후켄통통치킨 All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 