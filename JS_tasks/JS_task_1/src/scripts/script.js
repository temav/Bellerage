'use strict';

(function () {
let div_container = document.createElement('div');
div_container.className = "container";

let div_wrap = document.createElement('div');
div_wrap.id = "wrapper";

let back_gen = "back_gen";

// document.body.append(div_container);
// div_container.append(div_wrap);
// div_wrap.append(createHeader());
//AutoAppending 
AutoAppending([[createHeader(),createAboutProduct()], div_wrap, div_container, document.body]);

function AutoAppending(struct) {
    for(let k = 0; k < struct.length-1; ++k) {
        if (Array.isArray(struct[k])) {
            for (let t of struct[k]) {
                struct[k+1].append(t);
            }
        }
        else {
            struct[k+1].append(struct[k]);
        }
    }
    return struct[struct.length-1];
}


function createHeader() {
    let div_head_back = document.createElement('div');
    div_head_back.className = "head_back";

    let div_header = document.createElement('div');
    div_header.classList = "header " + back_gen;
    
    function createHeaderContent() {
        let h1 = "Product name";
        let listText = ["Put on this page information about your product",
        "A detailed description of your product",
        "Tell us about the advantages and merits",
        "Associate the page with the payment system"];
        let listIcon = "assets/img/check_icon.png";

        let divRect = document.createElement('div');
        divRect.className = "head_rec";

        let divClean = document.createElement('div');
        divClean.style.clear = "right";

        let elemH1 = document.createElement('h1');
        elemH1.innerText = h1;

        let divList = document.createElement('div');
        divList.className = "head_list";

        function createHeadList(listText, listIcon) {
            let result = [];
            for (let i = 0; i < listText.length; ++i) {
                let div = document.createElement('div');
                div.className = "head_list_string";

                let img = document.createElement('img');
                img.src = listIcon;

                let p = document.createElement('p');
                p.innerText = listText[i];

                div.append(img);
                div.append(p);
                result.push(div);
            }
            return result;
        }
        divList.append(...createHeadList(listText, listIcon));
        return [divRect, elemH1, divList, divClean];
    }
    return AutoAppending([createHeaderContent(), div_header, div_head_back]);
}

function createAboutProduct() {
    let div_about_product_back = document.createElement('div');
    div_about_product_back.className = "ab_y_pr_back";

    let div_ab_y_pr = document.createElement('div');
    div_ab_y_pr.classList = "ab_y_pr " + back_gen;
    
    function createAboutProductContent() {
        let h2 = "About your product";
        let paragText = [`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facilis fuga, illo at. Natus eos, eligendi illum  rerum omnis porro ex, magni, explicabo veniam incidunt in quam sapiente ut ipsum.`,
          `Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi dolores. Sequi itaque, unde perferendis nemo debitis dolor.`];

        let divRect = document.createElement('div');
        divRect.className = "ab_y_pr_rec";

        let divText = document.createElement('div');
        divText.className = "ab_y_pr_text";

        let divClean = document.createElement('div');
        divClean.style.clear = "right";

        let elemH2 = document.createElement('h2');
        elemH2.innerText = h2;
        
        function createAboutProductDescription (paragText) {
            let result = []
            for (let parag of paragText) {
                let p = document.createElement('p');
                p.innerText = parag;
                result.push(p);
            }
            return result;
        }
        divText.append(elemH2, ...createAboutProductDescription(paragText));
        return [divRect, divText, divClean];
    }
    return AutoAppending([createAboutProductContent(), div_ab_y_pr, div_about_product_back]);
}


})();
