// HomeItems.jsx
import "./HomeItems.scss"

const HomeItems = () => {
  return (
    <div className="HomeItemsContainer">
        <div className="hotItems">
            <div className="title">-----   熱賣商品    -----</div>
            <ul className="Items">
                <li className="EachItems">EachItems_1</li>
                <li className="EachItems">EachItems_2</li>
                <li className="EachItems">EachItems_3</li>
                <li className="EachItems">EachItems_4</li>
            </ul>
            <ul className="Items">
                <li className="EachItems">EachItems_5</li>
                <li className="EachItems">EachItems_6</li>
                <li className="EachItems">EachItems_7</li>
                <li className="EachItems">EachItems_8</li>
            </ul>
        </div>
    </div>
  )
};

export default HomeItems;