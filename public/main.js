console.log('我是main.js')

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onreadystatechange = () => {
        //下载完成 但不知道是成功2xx，还是失败4xx、5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到头里面
                document.head.appendChild(style)
            } else {
                console.log("加载css失败")
            }
        }
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/2.js")
    request.onload = () => {
        //创建script标签
        const script = document.createElement('script')
        //填写style内容
        script.innerHTML = request.response
        //插到身体里
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onload = () => {
        //创建div标签
        const div = document.createElement('div')
        //填写div内容
        div.innerHTML = request.response
        //插到身体里
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }; request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log("request.response")
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }
        }
    };
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement("li")
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            }
        }
    };
    request.send()
}