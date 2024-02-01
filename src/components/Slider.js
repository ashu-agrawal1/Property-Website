import React, { useEffect } from 'react'
import "./Slider.css"

export default function Slider({Values}) {
    function getVals() {
        // Get slider values
        let parent = this.parentNode;
        console.log("ppp",parent)
        let slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat(slides[0].value);
        let slide2 = parseFloat(slides[1].value);
        // Neither slider will clip the other, so make sure we determine which is larger
        if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

        let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "&#x20B9;" + slide1 + " - &#x20B9;" + slide2;
        if (Values) {
            console.log("1111111111",slide1, slide2)
            Values(slide1, slide2)
        }
    }

    useEffect(() => {
        let sliderSections = document.getElementsByClassName("range-slider");
        for (let x = 0; x < sliderSections.length; x++) {
            let sliders = sliderSections[x].getElementsByTagName("input");
            for (let y = 0; y < sliders.length; y++) {
                if (sliders[y].type === "range") {
                    sliders[y].oninput = getVals;
                    // Manually trigger event first time to display values
                    sliders[y].oninput();
                }
            }
        }
    }, [])

    return (
        <div className="range-slider">
            <span className="rangeValues" />
            <input defaultValue={0} min={0} max={49500} step={500} type="range" />
            <input
                defaultValue={50000}
                min={500}
                max={50000}
                step={500}
                type="range"
            />
        </div>
    )
}
