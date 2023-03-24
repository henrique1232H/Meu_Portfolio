import { PopoverMenu } from "../popover"
import "./style.css"

export function Menu() {

    return (
        <aside>

            <h2>Menu</h2>

            <nav>
                <ul>
                    <li> </li>
                    <li> <a href="">Sobre</a></li>
                    <li> <PopoverMenu /> </li>
                </ul>
            </nav>
        </aside>
    )
}