let obName = [];
let obKeyword = [];
let obHorns = [];
let fileName = '../data/page-1.json'

const MyHorns = function(image_url, title, description, keyword, horns){
    this.image_url = image_url;
    this.title = title;
    obName.push(this.title);
    this.description = description;
    this.keyword = keyword;
    obKeyword.push(this.keyword);
    this.horns = horns;
    obHorns.push(this.horns);
}

MyHorns.readJson = function(filename){
    $.get(filename,'json').then(myHornsJson => {
        myHornsJson.forEach(horn => {
            new MyHorns(horn.image_url, horn.title, horn.description, horn.keyword, horn.horns);
        });
        obName = removeDuplicates(obName);
        obKeyword = removeDuplicates(obKeyword);
        obHorns = removeDuplicates(obHorns);
        obHorns.sort(function(a,b){return a-b});
        obKeyword.forEach(horn => {
            toHtmlOp(horn);
        });
        myHornsJson.forEach(horn => {
            toHtmlImg(horn.image_url, horn.title, horn.keyword);
        });
    });
};

function toHtmlOp(keyword){
    target = $('#opTemp').html();
    let context = {
        "opClass": keyword,
        "opText": keyword
    };
    console.log(keyword);
}

function toHtmlImg(image_url, title, keyword) {
    target = $('#imgTemp').html();
    let context = { 
        "imgKeyword": keyword, 
        "imgTitle": title, 
        "imgSrc": image_url
    };
    let templateScript = Handlebars.compile(target);
    let html = templateScript(context);
    $(document.body).append(html);
}

var removeDuplicates = function(arr) {
    var sortedArray = arr.sort();
    var len = sortedArray.length - 1;
    var newArr = [];
    if (len >= 0) {
        for (var i = 0; i < len; i++) {
            if (sortedArray[i] !== sortedArray[i + 1]) {
                newArr.push(sortedArray[i]);
            }
        }
        newArr.push(sortedArray[len]);
    }
    return newArr;
}

$(()=>MyHorns.readJson(fileName));