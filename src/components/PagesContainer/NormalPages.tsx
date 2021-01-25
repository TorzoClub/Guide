import InnerPage from '../InnerPage'
type InnerPageType = ReturnType<typeof InnerPage>

export default Pages
function Pages({ pages }: { pages: InnerPageType[] }): JSX.Element {
  return (
    <div className="NormalPages">
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
