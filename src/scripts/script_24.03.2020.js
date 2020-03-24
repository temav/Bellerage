'use strict';

(function () {

    function selectorGet(type, options) {
        let id_ = 'tema_selector';
        let selectors = document.getElementById("tema_selector");
        return selectors;
    }

    function selectorCreate(selector_old) {
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
                disapperDiv.append(div_option);
                optionsList.push(div_option);
            }

            function controlDisplay() {

                document.onclick = (event) => {
                    // let menu = event.target.closest('.selector_menu');
                    // let root = event.target.closest('.selector_root');

                    // console.log(menu);
                    // console.log(root);
                    // if (((root != null)) && (disapperDiv.style.display == "flex")) {
                    //     disapperDiv.style.display = "none";
                    // } 
                    // else if(menu!=null) {
                    //     disapperDiv.style.display = "flex";
                    // }
                    // if ((menu == null) ) {
                    //     // console.log('loh');
                    //     disapperDiv.style.display = "none";
                    // }

                    let list = event.target.closest('.selector_list');
                    let root = event.target.closest('.selector_root');
                    let input_ev = event.target.closest('input');

                    console.log(list);
                    console.log(root);

                    if (root != null) {
                        if (disapperDiv.style.display == "none") {
                            disapperDiv.style.display = "flex";
                            console.log('s');
                        } else {
                            if (input_ev == null)
                                disapperDiv.style.display = "none";
                        }
                    }
                    //Клик по меню
                    else if (list != null) {}
                    //Клик мимо кассы
                    if ((list == null) && (root == null)) {
                        // console.log('loh');
                        disapperDiv.style.display = "none";
                    }
                };
            };
            controlDisplay();
            // let input = inputField.querySelector('input');
            // input.onfocus = () => {
            //     if (input.value == 'Ничего не выбрано')
            //         input.value = '';
            // };
            // let 
            function checkingItems() {
                disapperDiv.onclick = (event) => {
                    let target = event.target;

                    if (target.getAttribute('check') == 0) {
                        // target.style.backgroundColor = "#040961";
                        // target.style.color = "white";
                        target.setAttribute('check', 1);
                        // checkedCollection.
                    } else if (target.getAttribute('check') == 1) {
                        // target.style.backgroundColor = "#dcdcdc";
                        // target.style.color = "black";
                        target.setAttribute('check', 0);
                    }
                    setVisualCheckedList();
                    selectorListUpdate(inputField);
                };
            };

            //Отмечаем объекты, формируем 
            checkingItems();
            function setVisualCheckedList() {
                for (let opt of optionsList) {
                    if (opt.getAttribute('check') == 1) {
                        opt.style.backgroundColor = "#040961";
                        opt.style.color = "white";
                        // checkedCollection.
                    } else if (opt.getAttribute('check') == 0) {
                        opt.style.backgroundColor = "#dcdcdc";
                        opt.style.color = "black";
                        // target.setAttribute('check', 0);
                    }
                }
            }
            // let checkedCollection = optionsList.filter(item => { if (item.getAttribute('check')) item; });

            divSelector.append(inputField, disapperDiv);

            function selectorListUpdate(inputField) {
                let input = inputField.querySelector('input');
                input.oninput = function () {
                    let value = input.value;
                    for (let z of optionsList) {
                        if ((value == z.innerHTML.slice(0, value.length)) || (z.getAttribute('check') == 1)) {
                            z.style.display = 'block';
                        } else {
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
                    input.value = "";
                    let checkedCollection = optionsList.filter(item => item.getAttribute('check') == 1);

                    disapperDiv.style.display = "none";
                    input.onfocus = (event) => {
                        disapperDiv.style.display = "none";
                    };

                    function displayChoosenItems() {
                        let top_string = checkedCollection.map(item => item.innerHTML).join(', ');
                        if (top_string != "")
                            input.value = top_string;
                        else
                            input.placeholder = "Ничего не выбрано";
                    }
                    displayChoosenItems();
                };

                let cancel = document.createElement('button');
                cancel.innerHTML = "Cancel";
                cancel.onclick = (event) => {
                    input.value = '';
                    disapperDiv.style.display = "none";
                    optionsList.forEach(item => item.setAttribute('check', 0));
                    setVisualCheckedList();
                };

                div.append(ok, cancel);
                return div;
            }
            disapperDiv.append(createButtons());
        }

        let div_sel = document.createElement('div');
        div_sel.className = 'selector_menu';
        let list = selector_old.querySelectorAll("option");
        //Создаем структуру селектора и записываем параметры
        createInnerList(list, div_sel);

        selector_old.after(div_sel);
        selector_old.style.display = "none";
    }
    selectorCreate(selectorGet());
}())