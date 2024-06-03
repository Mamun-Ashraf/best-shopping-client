import { Link, Outlet } from "react-router-dom";

const DashboardRoute = () => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button md:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard/manage-products">Manage all products</Link>
          </li>
          <li>
            <Link to="/dashboard/add-product">Add a product</Link>
          </li>
          <li>
            <Link to="/dashboard/update-product">Update product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardRoute;
