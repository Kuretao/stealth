


export const RoadmapItem = ({itemTitle, itemInfo, itemInfoImg, itemDate, itemTag}) =>{
    return(
        <div className="roadmap-item">
            <h3>{itemTitle}</h3>

            <div className="item__info">
                <img src={itemInfoImg} alt=""/>
                <p>{itemInfo}</p>
            </div>

            <span className="item__date">{itemDate}</span>

            <div className={`item__tag ${itemTag}`}>{itemTag}</div>
        </div>
    )
}