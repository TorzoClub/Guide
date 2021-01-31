import './index.css'

import useScreen from '../../utils/useScreen'
import MobilePages from './MobilePages'
import NormalPages from './NormalPages'

import { useMemo } from 'react'
import { PageProps } from '../Page'

export default PageContainer
function PageContainer({ pages }: { pages: PageProps[] }) {
  const screen = useScreen()

  const pagesNode = useMemo(() => {
    switch (screen) {
      case 'mobile':
        // 移动端的话
        return <MobilePages pages={pages} />

      default:
        // 非移动端(大屏)
        return <NormalPages pages={pages} />
    }
  }, [pages, screen])

  return <div className="PageContainer">{pagesNode}</div>
}
