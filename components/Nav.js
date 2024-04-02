import  request  from "../utils/requests";

function Nav() {
  return (
    <nav>
        <div>
            {Object.entries(request).map(([key, {title, url }]))}
        </div>
    </nav>
  )
}

export default Nav