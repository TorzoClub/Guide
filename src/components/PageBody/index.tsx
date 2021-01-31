import './index.css'

export default PageBody
function PageBody({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="PageBody">{children}</div>
}
