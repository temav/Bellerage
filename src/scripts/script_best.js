'use strict';

(function () {

    function selectorGet() {
        let selector = document.getElementById("tema_selector");
        return selector;
    }

    function selectorCreate(selector_old) {
        //Set default params 
        let types = ['default', 'multi', 'search']
        let type = selector_old.getAttribute('type');
        // alert(type)
        if (!types.includes(type)) {
            // alert('No type');
            type = 'default';
        }
        let filter = selector_old.getAttribute('filter');
        if (filter != 'true' || (type == types[2])) {
            filter = 'false';
        }

        let div_sel = document.createElement('div');
        div_sel.className = 'selector_menu';

        let list = selector_old.querySelectorAll("option");

        //Создаем структуру селектора и записываем параметры
        createInnerList(list, div_sel);

        selector_old.after(div_sel);
        selector_old.style.display = "none";

        function createInnerList(option_list, divSelector) {
            let optionsList = [];

            function createInputField() {
                let div_main = document.createElement("div");
                div_main.className = "selector_root";
                let input;
                switch (type) {
                    case types[0]:
                    case types[1]: {
                        input = document.createElement('div');
                        input.style.display = "inline-block";
                        input.className = "selector_input";
                        input.innerHTML = "Select";
                        break;
                    }
                    case types[2]: {
                        input = document.createElement('input');
                        input.placeholder = "Search";
                        input.className = "selector_input";
                        break;
                    }
                }
                let arrow = document.createElement('div');
                arrow.className = "div_arrow";

                div_main.append(input, arrow);

                return div_main;
            }
            let inputField = createInputField();
            let disapperDiv = document.createElement('div');
            disapperDiv.className = "selector_list";

            let inner_search;
            if (filter == "true" && (type != types[2])) {
                inner_search = document.createElement('input');
                inner_search.className = "selector_filter";
                inner_search.placeholder = "Filter";
                disapperDiv.append(inner_search);
            }

            for (let t of option_list) {
                let div_option = document.createElement('div');
                div_option.className = "selector_list_item";
                div_option.innerHTML = t.innerHTML;
                div_option.setAttribute('check', 0);
                disapperDiv.append(div_option);
                optionsList.push(div_option);
            }
            disapperDiv.style.display = "none";
            function controlDisplay() {
                document.onclick = (event) => {
                    let list = event.target.closest('.selector_list');
                    let root = event.target.closest('.selector_root');

                    console.log(list);
                    console.log(root);

                    if (root != null) {
                        if (disapperDiv.style.display == "none") {
                            disapperDiv.style.display = "flex";
                            console.log('s');
                        } else {
                            disapperDiv.style.display = "none";
                        }
                    }
                    //Клик по меню
                    else if (list != null) {console.log('dqw')}
                    //Клик мимо кассы
                    if ((list == null) && (root == null)) {
                        // console.log('loh');
                        disapperDiv.style.display = "none";
                    }
                };
            };
            controlDisplay();

            function checkingItems() {
                disapperDiv.onclick = (event) => {
                    if (event.target.className == "selector_filter")
                        return;
                    let target = event.target;

                    switch (type) {
                        case types[0]:
                        case types[2]: {
                            if (target.getAttribute('check') == 0) {
                                optionsList.forEach(item => item.setAttribute('check', 0));
                                target.setAttribute('check', 1);
                            } else {
                                target.setAttribute('check', 0);
                            }
                            if (filter == 'true')
                                inner_search.value = "";
                            let event_ = new Event("input");
                            if (type == types[2])
                                document.querySelector('.selector_input').dispatchEvent(event_);
                            break;
                        }
                        case types[1]: {
                            if (target.getAttribute('check') == 0) {
                                target.setAttribute('check', 1);
                                // fillInSelectedItems();
                            } else if (target.getAttribute('check') == 1) {
                                target.setAttribute('check', 0);
                                // fillInSelectedItems();
                            }
                            break;
                        }
                    }

                    fillInSelectedItems();
                    setVisualCheckedList();
                    if (filter == "true" || (type == types[2]))
                        selectorListUpdate(inputField);

                    let event_ = new Event("input");
                    if (filter == 'true')
                        inner_search.dispatchEvent(event_);
                };
            };

            //Отмечаем объекты, формируем 
            checkingItems();

            function setVisualCheckedList() {
                for (let opt of optionsList) {
                    if (opt.getAttribute('check') == 1) {
                        opt.style.backgroundColor = "#00364e";
                        opt.style.color = "white";

                    } else if (opt.getAttribute('check') == 0) {
                        opt.style.backgroundColor = "#dcdcdc";
                        opt.style.color = "black";
                    }
                }
            }
            // let checkedCollection = optionsList.filter(item => { if (item.getAttribute('check')) item; });

            divSelector.append(inputField, disapperDiv);

            function selectorListUpdate(inputField) {
                let input;
                if (type == types[2])
                    input = inputField.querySelector('input');
                else
                    input = disapperDiv.querySelector('input');
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

            if (filter == "true" || (type == types[2]))
                selectorListUpdate(inputField);

            function fillInSelectedItems() {
                let checkedCollection = optionsList.filter(item => item.getAttribute('check') == 1);
                let input = document.querySelector('.selector_input')
                switch (type) {
                    case types[0]:
                    case types[1]: {
                        let top_string = checkedCollection.map(item => item.innerHTML).join(', ');
                        if (top_string != "")
                            input.innerHTML = top_string;
                        else
                            input.innerHTML = "Select";
                        break;
                    }
                    case types[2]: {
                        let top_string = checkedCollection.map(item => item.innerHTML).join(', ');
                        if (top_string != "")
                            input.value = top_string;
                        else
                            input.value = "";
                        break;
                    }
                }
                if (type != types[1])
                    disapperDiv.style.display = "none";
            }

            function createButtons() {
                let div = document.createElement('div');
                div.className = 'selector_buttons';
                let ok = document.createElement('button');
                ok.innerHTML = "OK";
                ok.onclick = (event) => {
                    disapperDiv.style.display = "none";
                    if (filter == 'true')
                        inner_search.value = "";
                    alert('submit');
                };

                let cancel = document.createElement('button');
                cancel.innerHTML = "Cancel";
                cancel.onclick = (event) => {
                    disapperDiv.style.display = "none";
                    optionsList.forEach(item => item.setAttribute('check', 0));
                    optionsList.forEach(item => item.style.display = 'block');
                    fillInSelectedItems();
                    setVisualCheckedList();
                    if (filter == 'true')
                        inner_search.value = "";
                };

                div.append(ok, cancel);
                return div;
            }
            if (type == types[1])
                disapperDiv.append(createButtons());
        }


    }
    selectorCreate(selectorGet());
}())