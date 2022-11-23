import Breadcrumb from "react-bootstrap/Breadcrumb"
import { Link, Outlet } from "react-router-dom"

export const Layout = () => {

  return (
    <div>
    {/* start navbar */}
    <Breadcrumb>
      <Breadcrumb.Item linkAs='span'>
        <Link to='/'>Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs='span'>
        <Link to='create'>Create Todo</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs='span'>
        <Link to='new'>New Todos</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs='span'>
        <Link to='inProgress'>In Progress Todos</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs='span'>
        <Link to='completed'>Completed Todos</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
    {/* end navbar */}
      <Outlet />
    </div>
  )
}