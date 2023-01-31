import { Main } from "../components/main/Main"
import { Menu } from "../components/menu/Menu"
import "./style.css"

export function Home() {

  return (
    <div className="container">

      <section id="main">

      <Menu />

        <div>
            <Main />
        </div>
      </section>

      
      
      <section id="port">

      </section>

    </div>
  )
}