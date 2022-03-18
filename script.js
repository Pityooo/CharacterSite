function loadEvent() {
    const root = document.getElementById("root")
    const getContent = `
    <h1 class="title">----- World of Code -----</h1>
        <div class="containers">
            <div class="input-container">
                <label for="">Name</label>
                <input type="text" placeholder="Name" id="getName">
                <label for="">Gender</label>
                <select name="Gender" id="getGender">
                    <option class="placeholder-option" value="" disabled="" selected=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label for="">Class</label>
                <select name="Class" id="getClass">
                <option class="placeholder-option" value="" disabled="" selected=""></option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="UI-UX-Designer">UI/UX Designer</option>
                </select>
                <label for="">Experience</label>
                <select name="Experience" id="getExp">
                    <option class="placeholder-option" value="" disabled="" selected=""></option>
                    <option value="Junior">Junior</option>
                    <option value="Middle">Middle</option>
                    <option value="Senior">Senior</option>
                </select>
            </div>
            <div class="content-container">
                <p id="nameTag"></p>
                <img src="" alt="" id="image">
                <div class="profession">
                    <div class="gender menu">
                        <img src="" alt="" id="genderPic">
                        <p id="genderText"></p>
                    </div>
                    <div class="class menu">
                        <img src="" alt="" id="classPic">
                        <p id="classText"></p>
                    </div>
                    <div class="exp menu">
                        <p id="exp"></p>
                        <p id="expText"></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    root.insertAdjacentHTML("beforeend", getContent)

    //=== EVENTLISTENERS ===

    // NAMETAG
    const nameTag = document.getElementById("nameTag")
    document.getElementById("getName").addEventListener("input", function(event){
        nameTag.innerHTML = event.target.value
    })
    
    //GENDER INPUT
    console.log(genderPic)
    document.getElementById("getGender").addEventListener("input", function(event){
        document.getElementById("genderPic").src = `img/${event.target.value}.png`
        if (event.target.value === "Male") {
            document.getElementById("image").src = `img/MaleBig.png`
            document.getElementById("genderText").innerHTML = "As a male you can destroy your computer even faster with your bare hands, and you have advantage if you got female boss"
        } else if (event.target.value === "Female") {
            document.getElementById("image").src = `img/FemaleBig.png`
            document.getElementById("genderText").innerHTML = "As a female you have the THING called \"booty\", and you can climb the career ladder without even working 1 hour... "
        }
    });

    //CLASS INPUT
    document.getElementById("getClass").addEventListener("input", function(event){
        document.getElementById("classPic").src = `img/${event.target.value}.png`;
        if (event.target.value === "Frontend") {
            document.getElementById("classText").innerHTML = "As a Frontend developer you use javascript to overcomplicate things, but at least you can curse Stackoverflow..."
        } else if (event.target.value === "Backend") {
            document.getElementById("classText").innerHTML = "As a Backend developer you make all the things what 80% of people find boring, but you have the knowledge and motivation to do it..."
        } else if (event.target.value === "UI-UX-Designer") {
            document.getElementById("classText").innerHTML = "As a UI/UX Designer you create the look of the site/app what looks fun, until your Photoshop dies...Be afraid of typographers, and pixel-fighters..."
        }
    })

    //EXP INPUT
    const exp =document.getElementById("exp")
    document.getElementById("getExp").addEventListener("input", function(event){
        if (event.target.value === "Junior") {
            exp.innerHTML = "<3"
            document.getElementById("expText").innerHTML = "Here starts your journey. You think you know everything, but it's just the edge of the big and deep hole..."
        } else if (event.target.value === "Middle"){
            exp.innerHTML = "<5"
            document.getElementById("expText").innerHTML = "Ohh...So now you know even more, but it's only good for complain, that you don't have the privilege what Seniors have"
        } else if (event.target.value === "Senior"){
            exp.innerHTML = "5+"
            document.getElementById("expText").innerHTML = "As a Senior you don't give a shit about nothing, because you don't even know why your code works but it works, and thats what matters"
        }
    })

}   
window.addEventListener("load", loadEvent);
