import React from 'react'
import Link from 'next/link'

export default function Navigation({ navItems, error }) {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <nav className="mx-10 border-b border-t border-red-400 text-center flex items-center justify-center mb-5">
      <div className="mr-auto">
        <Link href="/">
          <a>Apparel<span className="font-bold text-red-400">4</span>U</a>
        </Link>
      </div>
      <div className="flex">
        {
          navItems
            && navItems.map(
              (navItem, index) => <Link href={navItem.href} key={`nav-item-${index}`}>
                <a className="p-2 mx-1 text-sm hover:bg-red-400 hover:text-white transition duration-100 ease-in">{navItem.name}</a>
              </Link>
            )
        }
      </div>
      <div className="ml-auto">
        <p>//CART\\</p>
      </div>
    </nav>
  )
}
