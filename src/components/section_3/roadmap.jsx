import "./roadmap.css";
import {RoadmapItem} from "../ui/roadmapItem";


const items = [
    {
        itemTitle: "Reload X",
        itemInfo: "Game application for earning tokens",
        itemInfoImg: "/assets/icons/roadmap/line_chart_prz9popgio221.svg",
        itemDate: "First quarter 2025",
        itemTag: "completed"
    },
    {
        itemTitle: "Reload X",
        itemInfo: "Game application for earning tokens",
        itemInfoImg: "/assets/icons/roadmap/line_chart_prz9popgio221.svg",
        itemDate: "First quarter 2025",
        itemTag: "completed"
    },
    {
        itemTitle: "Reload X",
        itemInfo: "Game application for earning tokens",
        itemInfoImg: "/assets/icons/roadmap/line_chart_prz9popgio221.svg",
        itemDate: "First quarter 2025",
        itemTag: "completed"
    },
    {
        itemTitle: "Reload X",
        itemInfo: "Game application for earning tokens",
        itemInfoImg: "/assets/icons/roadmap/line_chart_prz9popgio221.svg",
        itemDate: "First quarter 2025",
        itemTag: "completed"
    },
    {
        itemTitle: "Reload X",
        itemInfo: "Game application for earning tokens",
        itemInfoImg: "/assets/icons/roadmap/line_chart_prz9popgio221.svg",
        itemDate: "First quarter 2025",
        itemTag: "completed"
    },
    {
        itemTitle: "Reload X",
        itemInfo: "Game application for earning tokens",
        itemInfoImg: "/assets/icons/roadmap/line_chart_prz9popgio221.svg",
        itemDate: "First quarter 2025",
        itemTag: "completed"
    },
    {
        itemTitle: "Reload X",
        itemInfo: "Game application for earning tokens",
        itemInfoImg: "/assets/icons/roadmap/line_chart_prz9popgio221.svg",
        itemDate: "First quarter 2025",
        itemTag: "completed"
    },
    {
        itemTitle: "Reload X",
        itemInfo: "Game application for earning tokens",
        itemInfoImg: "/assets/icons/roadmap/line_chart_prz9popgio221.svg",
        itemDate: "First quarter 2025",
        itemTag: "completed"
    }
]

export const RoadmapBody = () => {
    const firstSliderItems = items.filter((_, index) => [0, 1, 3, 4, 6, 7].includes(index));
    const secondSliderItems = items.filter((_, index) => [2, 5].includes(index));
    return(
        <main className="roadmap-slide">
            <h1>ROADMAP</h1>
            <div className="roadmap__slider-wrapper">
                <div className="roadmap__slider">
                    {firstSliderItems.map((item) => (
                        <RoadmapItem itemTitle={item.itemTitle} itemDate={item.itemDate} itemInfo={item.itemInfo}
                                     itemTag={item.itemTag} itemInfoImg={item.itemInfoImg}/>
                    ))}
                </div>
                <div className="roadmap__slider roadmap__slider--row">
                    {secondSliderItems.map((item) => (
                        <RoadmapItem itemTitle={item.itemTitle} itemDate={item.itemDate} itemInfo={item.itemInfo}
                                     itemTag={item.itemTag} itemInfoImg={item.itemInfoImg}/>
                    ))}
                </div>
            </div>
        </main>
    )
}


export const RoadmapSection = () => {
    return (
        <section className="wrapper">
            <RoadmapBody/>
        </section>
    )
}