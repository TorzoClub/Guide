import './index.css'
import InnerPage from '../InnerPage'
import useScreen from '../../utils/useScreen'
import MobilePages from './MobilePages'
import NormalPages from './NormalPages'

import { ReactNode } from 'react'

type InnerPageType = ReturnType<typeof InnerPage>

export default PageContainer
function PageContainer({ pages }: { pages: InnerPageType[] }): JSX.Element {
  const screen = useScreen()

  let pagesNode: ReactNode = null

  if (screen === 'mobile') {
    // 移动端的话
    pagesNode = <MobilePages pages={pages} />
  } else {
    // 非移动端(大屏)
    pagesNode = <NormalPages pages={pages} />
  }

  return <div className="PageContainer">{pagesNode}</div>
}
