import './index.css'

export default InnerPage
function InnerPage({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="InnerPage">{children}</div>
}
