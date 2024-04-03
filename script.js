let girlsData = [
    {
        Name : "Angela",
        imageUrl : "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age : "32",
        from : "new delhi",
        ststus : 'Online',
        id : 0
    },
    {
        Name :"Matheus Ferrero",
        imageUrl : "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age : "24",
        from : "delhi",
        ststus : '1h ago',
        id : 1
    },
    {
        Name : "averie woodard",
        imageUrl : "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age : "22",
        from : "haryana",
        ststus : '54Min ago',
        id : 2
    },
    {
        Name : "Kareya Saleh",
        imageUrl : "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age : "25",
        from : "punjab",
        ststus : 'Online',
        id : 3
    },
    {
        Name : "Alexandru",
        imageUrl : "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age : "26",
        from : "noida",
        ststus : '21Min ago',
        id :4 
    },
    {
        Name : "Aiony Haust",
        imageUrl : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age : "24",
        from : "Gaziyabad",
        ststus : '15Min ago',
        id :5
    },
    {
        Name : "Kimson Doan",
        imageUrl : "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        age : "19",
        from : "Lucknow",
        ststus : 'Online',
        id : 6
    }
]

let Name = document.querySelector("#name")
let age = document.querySelector("#age")
let interest = document.querySelectorAll(".intrest")
let interestBtn = document.querySelector(".intrestBtn")
let nextBtn = document.querySelector(".next")
let bgImage = document.querySelector(".mainImg")
let stausBox = document.querySelector(".status")
let fromLocation = document.querySelector("#from")
let messegeBtn = document.querySelector('.messegeBtn')
let backBtn = document.querySelector(".backBtn")
let messegeItn = document.querySelector(".msgBtn")
let messegeBox = document.querySelector(".messageBox")
let backChatBox = document.querySelector(".backChatBox")
let crrIndxxNum = "0";
let timesClickOnIntrestBtn = "0"


let interestedArray = []
let indxx = 0
interestBtn.addEventListener("click",()=> {
   if(indxx == girlsData.length) {
    indxx =0
   }
   else {
    let pushableOje = girlsData[indxx]
    interestedArray.push(pushableOje)
    indxx++
    console.log(interestedArray)
   }
})
interestBtn.addEventListener("click",()=> {
    let div = document.createElement('div')
    div.innerHTML = ` <li id="" class="bg-danger chatDasbord text-white py-2 px-3 d-flex justify-content-between align-items-center my-2 rounded-3">
                            <!-- pf logo  -->
                            <div class="d-flex gap-3 h-100 align-items-center">
                            <div class="pfLogo">
                            <img src="${interestedArray[timesClickOnIntrestBtn].imageUrl}" alt="">
                            </div>
                            <!-- user name  -->
                            <div>
                            <h6 class="userName m-0">${interestedArray[timesClickOnIntrestBtn].Name}</h6>
                            <p id="msgP" class="msg m-0">${interestedArray[timesClickOnIntrestBtn].ststus}</p>
                            </div>
                            </div>
                            <div class="msgIcon">
                                <i class="ri-user-follow-fill fs-1 "></i>
                            </div>
                        </li>`
                        div.setAttribute("id",`${interestedArray[timesClickOnIntrestBtn].id}`)
                        div.addEventListener("click",()=> {
                            let clickedPersonId = div.id
                            pfLogoinChat.src = girlsData[clickedPersonId].imageUrl
                            nameInchatBox.innerText = girlsData[clickedPersonId].Name
                            messageSlot.style.left = "0%"
                        })
                        document.querySelector("ul").appendChild(div)
    if(timesClickOnIntrestBtn === girlsData.length) {
        timesClickOnIntrestBtn = 0
        stausBox.style.opacity = "1"
        stausBox.style.top = "0%"
    }
    else {
        timesClickOnIntrestBtn++
        if(crrIndxxNum == girlsData.length) {
            crrIndxxNum = "0"
        }
        else {
            crrIndxxNum++        
        }
        bgImage.style.backgroundImage = `url(${girlsData[crrIndxxNum].imageUrl})`
        Name.innerHTML = girlsData[crrIndxxNum].Name
        age.innerText = girlsData[crrIndxxNum].age
        fromLocation.innerHTML = girlsData[crrIndxxNum].from
    }
})

backBtn.addEventListener("click",()=> {
    stausBox.style.top = "100%"
    setTimeout(()=> {
        stausBox.style.opacity = "0"
    },1000)

    setTimeout(()=> {
        stausBox.style.top = "-100%"
    },2000)
})
messegeBtn.addEventListener("click",()=> {
    messegeBox.style.opacity = "1"
    messegeBox.style.left = "0%"
    console.log(interestedArray)
})

messegeItn.addEventListener("click",()=> {
    messegeBox.style.opacity = "1"
    messegeBox.style.left = "0%"
})

const chatBoxOpenFn = ()=> {
    messegeBox.style.left = "100%"
    setTimeout(()=> {
        messegeBox.style.opacity = "0"
    },500)
    setTimeout(()=> {
        messegeBox.style.left = "-100%"
    },800)
}

backChatBox.addEventListener("click",()=> {
    chatBoxOpenFn()
})

// chat box open  
let pfLogoinChat = document.querySelector(".pfLogoinChat img")
let nameInchatBox = document.querySelector(".nameInchatBox h6")
let chatBoxBackBtn = document.querySelector(".chatBoxBackBtn")
let messageSlot = document.querySelector(".messageSlot")
chatBoxBackBtn.addEventListener('click',()=> {
    messageSlot.style.left = "-100%"
})

// chat adding function 
let apiKey = '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'
let miniMainChatDiv = document.querySelector(".miniMainChatDiv")
let sendMsgBtn = document.querySelector(".sendMsg")
let inputMsg = document.getElementById('inputMsg')

sendMsgBtn.addEventListener("click",()=> {
    let div = document.createElement("div")
    div.innerHTML = ` <div class="div w-100 d-flex justify-content-end p-1">
    <div class="myChat w-75 bg-danger text-white rounded-top rounded-end p-2">
        <p>${inputMsg.value}</p>
    </div>
</div>`
miniMainChatDiv.appendChild(div)
inputMsg.value = ""

// api call and bot msg 
setTimeout(()=> {
    let div2 = document.createElement("div")
    div2.innerHTML = ` <div class="div w-100 d-flex justify-content-start p-2">
    <div class="myChat w-50 bg-light rounded-top rounded-start p-2">
        <p id="botMsg">Thinking 🤔</p>
    </div>
</div>`
miniMainChatDiv.appendChild(div2)
inputMsg.value = ""
},800)
setTimeout(()=> {
    document.querySelector('#botMsg').innerHTML = "Sorry for unconvenience, rightnow i am not able to replay....!"
},2000)
let baseUrl = "https://api.openai.com/v1/chat/completions"
let responseOption = {
    method: "POST",
    headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer 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`
    },
    body : JSON.stringify({
        model:"gpt-3.5-turbo",
        message:[{role : "user",content : "hiiii"}]
    })
}

let fetchUrl = async()=> {
    let data = await fetch(baseUrl,responseOption)
    let response = await data.json()
}
fetchUrl()
})