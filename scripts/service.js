const generateCities = () => {
    cities.cities.forEach((city,index) => {
        const listItem = document.createElement("li");
        index === 0 ? listItem.classList.add("tab", "active") : listItem.classList.add("tab");
        const anchor = document.createElement("a");
        anchor.innerText = city.label;
        listItem.appendChild(anchor);
        document.getElementById("nav-list").appendChild(listItem);
    })
}


const setActive = (element = document.querySelector(".tab.active")) => {
    if(element.classList.contains("tab")){
        element.classList.add("active");
        let slider = document.getElementById("slider_bar");
        slider.style.cssText = `width: ${element.clientWidth}px; left: ${element.offsetLeft}px`;
    }
}

const addActiveClass = (event) => {
    const tabs = [...document.getElementsByClassName("tab")];
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
    setActive(event.target.parentElement);
}

const eventListenerHandler = () => {
    document.getElementById("nav-list").addEventListener("click", addActiveClass);
    setTimeout(() => {
        setActive();
        document.getElementById("slider_bar").classList.add('show');
    }, 5);
}

const onResize = () => {
    window.onresize = () => {
        setActive();
    }
}

generateCities();

eventListenerHandler();

onResize();
