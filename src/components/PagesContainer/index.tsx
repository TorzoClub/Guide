import './index.css'
import InnerPage from '../InnerPage'

type InnerPageType = ReturnType<typeof InnerPage>

export default PageContainer
function PageContainer({ pages }: { pages: InnerPageType[] }): JSX.Element {
  return (
    <div className="PageContainer">
      {pages.map((innerPage, idx) => {
        return (
          <div key={idx} className="Page">
            {innerPage}
          </div>
        )
      })}
    </div>
  )
}
