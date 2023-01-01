var course = document.querySelector('.course');


//display function 
function displayCoursesItems(path, titre, prix) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    div.setAttribute('class', 'col-3 card me-2 mb-2');
    img.src = path;
    img.setAttribute('class', 'card-img');
    p.setAttribute('class', 'card-title');
    span.setAttribute('class', 'card-text');

    p.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode(prix));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    course.append(div)
}

//loading the elements on refresh
courses.forEach((element) => {
    displayCoursesItems(element.image, element.title, element.price)
})

//Filter functions
function filterSelectionALL(){
    course.replaceChildren();
    courses.forEach((element) => {
        displayCoursesItems(element.image, element.title, element.price)
    })
}


function filterSelectionHTML(){
    course.replaceChildren();
    let htmlType = courses.filter(course => course.category === 'HTML');

    htmlType.forEach((element) => {
        displayCoursesItems(element.image, element.title, element.price)
    })
}

function filterSelectionCSS(){
    course.replaceChildren();
    let cssType = courses.filter(course => course.category === 'CSS');

    cssType.forEach((element) => {
        displayCoursesItems(element.image, element.title, element.price)
    })
}

function filterSelectionJS(){
    course.replaceChildren();
    let jsType = courses.filter(course => course.category === 'JS');

    jsType.forEach((element) => {
        displayCoursesItems(element.image, element.title, element.price)
    })
}

function filterSelectionPHP(){
    course.replaceChildren();
    let phpType = courses.filter(course => course.category === 'PHP');

    phpType.forEach((element) => {
        displayCoursesItems(element.image, element.title, element.price)
    })
}

function search(){
    let searchInput = document.getElementById("searchBar").value;
    let title = courses.filter(course => course.title.includes(searchInput));

    course.replaceChildren();  
    title.forEach((e) => {
        displayCoursesItems(e.image, e.title, e.price)
    })
}

