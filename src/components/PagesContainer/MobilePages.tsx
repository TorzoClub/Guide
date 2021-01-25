import { useState } from 'react'

import InnerPage from '../InnerPage'
type InnerPageType = ReturnType<typeof InnerPage>

export default Pages
function Pages({ pages }: { pages: InnerPageType[] }): JSX.Element {
  const [pageCode] = useState(0)

  const currentPage = pages[pageCode]

  return (
    <div className="MobilePages">
      <div className="CurrentPage">{currentPage}</div>
      <div className="SideBarRight">SideBarRight</div>
    </div>
  )
}
