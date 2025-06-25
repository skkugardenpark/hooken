'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigation = [
    { name: '브랜드 소개', href: '/about' },
    { name: '매장 찾기', href: '/stores' },
    { name: '가맹 안내', href: '/franchise' },
  ];

  const menuCategories = [
    { name: '전체 메뉴', href: '/menu' },
    { name: '치킨', href: '/menu' },
    { name: '튀김/사이드', href: '/menu' },
    { name: '국물요리', href: '/menu' },
    { name: '마른안주', href: '/menu' },
  ];

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/hooken-logo.png"
              alt="후켄 로고"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* 메뉴 드롭다운 */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="/menu"
                className="text-white hover:text-accent-yellow transition-colors duration-200 font-medium flex items-center"
              >
                메뉴
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              
              {/* 드롭다운 메뉴 */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {menuCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-red transition-colors duration-200"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-accent-yellow transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 가맹 문의 버튼 */}
          <div className="hidden md:flex">
            <Link
              href="/franchise"
              className="bg-primary-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
            >
              가맹 문의
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-accent-yellow"
          >
            <span className="sr-only">메뉴 열기</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-600">
            <Link
              href="/menu"
              className="block px-3 py-2 text-base font-medium text-white hover:text-accent-yellow hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              메뉴
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-white hover:text-accent-yellow hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/franchise"
              className="block w-full text-center bg-primary-red text-white px-3 py-2 rounded-lg font-medium mt-4 hover:bg-red-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              가맹 문의
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 