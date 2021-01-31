import Page from '../Page'

export default Pages
function Pages({ pageNodes }: { pageNodes: ReturnType<typeof Page>[] }) {
  return <div className="NormalPages">{pageNodes}</div>
}
