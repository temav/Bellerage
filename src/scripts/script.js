'use strict';

(function() {

function selectorGet(type, options) {
    let id_ = 'tema_selector';
    let selectors = document.querySelectorAll("select");
    let mySelectors = [];
    for (let k of selectors) {
        if(k.id == id_) {
            mySelectors.push(k);
        }
    }
    return mySelectors;
}

function selectorCreate(array) {
    function createInnerList(option_list, divSelector) {
        let optionsList = [];
        function createInputField() {
            let div_main = document.createElement("div");
            div_main.className = "selector_root";
            let input = document.createElement('input');
            input.placeholder = "Search";
            input.className = "selector_input";
            let arrow = document.createElement('div');
            arrow.className = "div_arrow";

            div_main.append(input, arrow);

            return div_main;
        }
        // let input = document.createElement('input');
        // input.placeholder = "Search";
        // input.className = "selector_root";
        // let arrow = document.createElement('div');
        // arrow.className = "div_arrow";
        // input.append(arrow);
        // divSelector.append(input);
        let inputField = createInputField();
        let disapperDiv = document.createElement('div');
        // disapperDiv.style.display = "none";
        // disapperDiv.style.position = "relative";
        disapperDiv.className = "selector_list";
        for (let t of option_list) {
            let div_option = document.createElement('div');
            div_option.className = "selector_list_item";
            div_option.innerHTML = t.innerHTML;
            div_option.setAttribute('check', 0);
            // div_option.setAttribute('order', 0);
            // div_option.style.position = "absolute";
            disapperDiv.append(div_option);
            optionsList.push(div_option);
        }

        function controlDisplay (inputField) {
            let input = inputField.querySelector('input');
            inputField.onmouseover = (event) => {
                disapperDiv.style.display = "flex";
            };
            inputField.onmouseout = (event) => {
                disapperDiv.style.display = "none";
            };
            disapperDiv.onmouseover = (event) => {
                disapperDiv.style.display = "flex";
            };
            disapperDiv.onmouseout = (event) => {
                disapperDiv.style.display = "none";
            };
            input.onfocus = (event) => {
                disapperDiv.style.display = "flex";
                inputField.onmouseout = (event) => {
                    disapperDiv.style.display = "flex";
                };
                disapperDiv.onmouseout = (event) => {
                    disapperDiv.style.display = "flex";
                };
            };
            input.onblur = (event) => {
                disapperDiv.style.display = "none";
                inputField.onmouseout = (event) => {
                    disapperDiv.style.display = "none";
                };
            };
        };
        controlDisplay(inputField);
        function checkingItems() {
            // let checkedItems = new Map();
            // function itemisAcive (item) {
            //     item.style.backgroundColor = "red";
            // }

            disapperDiv.onclick = (event) => {
                let target = event.target;

                if (target.getAttribute('check')==0) {
                    target.style.backgroundColor = "#040961";
                    target.style.color = "white";
                    target.setAttribute('check', 1);
                    // checkedItems.push(div_option);
                }
                else if (target.getAttribute('check')==1) {
                    target.style.backgroundColor = "#dcdcdc";
                    target.style.color = "black";
                    target.setAttribute('check', 0);
                }
                selectorListUpdate(inputField);
                // checkedItems.push(div_option);
            };
        };
        checkingItems();

        divSelector.append(inputField, disapperDiv);
        function selectorListUpdate(inputField) {
            let input = inputField.querySelector('input');
            input.oninput = function() {
                let value = input.value;
                for (let z of optionsList) {
                    if ((value == z.innerHTML.slice(0, value.length)) || (z.getAttribute('check')==1)) {
                        z.style.display = 'block';
                    }
                    else {
                        z.style.display = 'none';
                    }
                }
              };
        };
        selectorListUpdate(inputField);
        function createButtons() {
            let div = document.createElement('div');
            div.className = 'selector_buttons';
            let input = inputField.querySelector('input');
            let ok = document.createElement('button');
            ok.innerHTML = "OK";
            ok.onclick = (event) => {
                
                disapperDiv.style.display = "none";
                input.onfocus = (event) => {
                    disapperDiv.style.display = "none";
                };
                alert('submit');
            };

            let cancel = document.createElement('button');
            cancel.innerHTML = "Cancel";
            cancel.onclick = (event) => {
                disapperDiv.style.display = "none";
                // inputField.onmouseover = (event) => {
                //     disapperDiv.style.display = "none";
                // };
                // input.onfocus = (event) => {
                //     disapperDiv.style.display = "none";
                // };
            };

            div.append(ok, cancel);
            return div;
        }
        disapperDiv.append(createButtons());
    }

    for (let k of array) {
        let div_sel = document.createElement('div');
        div_sel.className = 'selector_menu';
        let list = k.querySelectorAll("option");
        //Создаем структуру селектора и записываем параметры
        createInnerList(list, div_sel);
        
        k.after(div_sel);
        k.style.display = "none";
    }
}
selectorCreate(selectorGet());
}())