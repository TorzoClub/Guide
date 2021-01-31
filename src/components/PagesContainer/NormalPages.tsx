import { PageProps } from '../Page'

export default Pages
function Pages({ pages }: { pages: PageProps[] }): JSX.Element {
  return (
    <div className="NormalPages">
      {pages.map(({ body }, idx) => {
        return (
          <div key={idx} className="Page">
            {body}
          </div>
        )
      })}
    </div>
  )
}
