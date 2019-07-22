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
            let target = $('#imgTemp').html();
            toHtmlImg(horn.image_url, horn.title, horn.description, horn.keyword, horn.horns, target);
        });
    });
};

function toHtmlImg(image_url, title, description, keyword, horns, target) {
    let context = { 
        "imgKeyword": keyword, 
        "imgTitle": title, 
        "imgSrc": image_url,
        "opText": keyword,
        "opClass": keyword,
        "opHorns": horns
    };
    let templateScript = Handlebars.compile(target);
    let html = templateScript(context);
    $(document.body).append(html);
}

$(()=>MyHorns.readJson(fileName));