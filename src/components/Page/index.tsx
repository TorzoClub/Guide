import PageBody from '../PageBody'
export interface PageProps {
  title: string
  body: ReturnType<typeof PageBody>
}

export default Page
function Page({ title, body }: PageProps) {
  return (
    <div className="Page">
      <div className="PageTitle">{title}</div>
      <div className="PageBody">{body}</div>
    </div>
  )
}
