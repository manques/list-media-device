function listMediaDevice() {
    navigator.mediaDevices.enumerateDevices().then( devices => {
        console.log(devices);
        const ul = document.createElement("ul");
        let li; 
        for(let i = 0; i < devices.length; i++){
                li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML =  `Device Id: ${devices[i].deviceId}`;
                //
                li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML =  `groupId: ${devices[i].groupId}`;
                // 
                li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML =  `kind: ${devices[i].kind}`;
                 // 
                 li = document.createElement("li");
                 ul.appendChild(li);
                 li.innerHTML =  `label: ${devices[i].label}`;
                 li.style.borderBottom = "1px solid black";
        }
        const listElement = document.querySelector("div.list-media-device");
        listElement.appendChild(ul);
        listElement.style.overflow = "scroll";
        listElement.style.boxSizing = "border-box";
        ul.style.listStyle = "none";
    });
}

listMediaDevice();