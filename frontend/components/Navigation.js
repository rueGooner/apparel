import React from 'react'
import Link from 'next/link'

export default function Navigation({ navItems, error }) {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <nav className="border-b border-t border-red-100 text-center flex items-center justify-center">
      {
        navItems
          && navItems.map(
            (navItem, index) => <Link href={`/${navItem}`} key={`nav-item-${index}`}>
              <a className="p-2 mx-1 text-sm hover:bg-red-100 transition duration-100 ease-in">{navItem}</a>
            </Link>
          )
      }
    </nav>
  )
}
