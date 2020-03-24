'use strict';

const temaSelector = (function () {
    const TYPE_DEFAULT = 'default';
    const TYPE_MULTI = 'multi';
    const TYPE_SEARCH = 'search';

    function temaSelector (idSelector, paramsSelector) {
        let selector = document.querySelector(idSelector);
        selectorCreate(selector, paramsSelector['type'], paramsSelector['filter']);
    };

    function selectorCreate(selector_old, type, filter) {

        if (![TYPE_DEFAULT, TYPE_MULTI, TYPE_SEARCH].includes(type)) {
            type = 'default';
        }

        if (filter != 'true' || (type == TYPE_SEARCH)) {
            filter = 'false';
        }

        let div_sel = document.createElement('div');
        div_sel.className = 'selector_menu';

        let list = selector_old.querySelectorAll("option");

        //Создаем структуру селектора и записываем параметры
        createInnerList(list, div_sel);

        selector_old.after(div_sel);
        selector_old.classList.add("visibility_hidden");

        function createInnerList(option_list, divSelector) {
            let optionsList = [];

            function createInputField() {
                let div_main = document.createElement("div");
                div_main.className = "selector_root";
                let input;
                switch (type) {
                    case TYPE_DEFAULT:
                    case TYPE_MULTI: {
                        input = document.createElement('div');
                        input.className = "selector_input";
                        input.innerHTML = "Select";
                        break;
                    }
                    case TYPE_SEARCH: {
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
            if (filter == "true" && (type != TYPE_SEARCH)) {
                inner_search = document.createElement('input');
                inner_search.className = "selector_filter";
                inner_search.placeholder = "Filter";
                disapperDiv.append(inner_search);
            }

            for (let t of option_list) {
                let div_option = document.createElement('div');
                div_option.className = "selector_list_item";
                div_option.innerHTML = t.innerHTML;
                // div_option.setAttribute('check', 0);
                disapperDiv.append(div_option);
                optionsList.push(div_option);
            }
            // disapperDiv.style.display = "none";
            disapperDiv.classList.add('visibility_hidden');
            function controlDisplay() {
                document.onclick = (event) => {
                    let list = event.target.closest('.selector_list');
                    let root = event.target.closest('.selector_root');

                    console.log(list);
                    console.log(root);

                    if (root != null) {
                        if (disapperDiv.classList.contains('visibility_hidden')) {
                            disapperDiv.classList.remove('visibility_hidden');
                            console.log('s');
                        } else {
                            disapperDiv.classList.add('visibility_hidden');
                        }
                    }
                    //Клик по меню
                    else if (list != null) {console.log('dqw')}
                    //Клик мимо кассы
                    if ((list == null) && (root == null)) {
                        // console.log('loh');
                        disapperDiv.classList.add('visibility_hidden');
                    }
                };
            };

            controlDisplay();

            function checkingItems() {
                disapperDiv.onclick = (event) => {
                    if (!event.target.classList.contains("selector_list_item"))
                        return;
                    let target = event.target;

                    switch (type) {
                        case TYPE_DEFAULT:
                        case TYPE_SEARCH: {
                            if (!target.classList.contains('check')) {
                                optionsList.forEach(item => item.classList.remove('check'));
                                target.classList.add('check');
                            } else {
                                target.classList.remove('check');
                            }
                            if (filter == 'true')
                                inner_search.value = "";
                            let event_ = new Event("input");
                            if (type == types[2])
                                document.querySelector('.selector_input').dispatchEvent(event_);
                            break;
                        }
                        
                        case TYPE_MULTI: {
                            if (!target.classList.contains('check')) {
                                target.classList.add('check');
                                // fillInSelectedItems();
                            } else  {
                                target.classList.remove('check');
                                // fillInSelectedItems();
                            }
                            break;
                        }
                    }

                    fillInSelectedItems();

                    if (filter == "true" || (type == TYPE_SEARCH))
                        selectorListUpdate(inputField);

                    let event_ = new Event("input");
                    if (filter == 'true')
                        inner_search.dispatchEvent(event_);
                };
            };

            //Отмечаем объекты, формируем 
            checkingItems();



            divSelector.append(inputField, disapperDiv);

            function selectorListUpdate(inputField) {
                let input;
                if (type == TYPE_SEARCH)
                    input = inputField.querySelector('input');
                else
                    input = disapperDiv.querySelector('input');
                input.oninput = function () {
                    let value = input.value;
                    const search = new RegExp(`^${value}`, 'i');

                    for (let z of optionsList) {
                        if (search.test(z.innerHTML) || (z.classList.contains('check'))) {
                            z.classList.remove('visibility_hidden');
                        } else {
                            z.classList.add('visibility_hidden');
                        }
                    }

                    // for (let z of optionsList) {
                    //     if ((value == z.innerHTML.substr(0, value.length)) || (z.classList.contains('check'))) {
                    //         z.classList.remove('visibility_hidden');
                    //     } else {
                    //         z.classList.add('visibility_hidden');
                    //     }
                    // }
                };
            };

            if (filter == "true" || (type == TYPE_SEARCH))
                selectorListUpdate(inputField);

            function fillInSelectedItems() {
                let checkedCollection = optionsList.filter(item => item.classList.contains('check'));
                let input = document.querySelector('.selector_input')
                switch (type) {
                    case TYPE_DEFAULT:
                    case TYPE_MULTI: {
                        let top_string = checkedCollection.map(item => item.innerHTML).join(', ');
                        if (top_string != "")
                            input.innerHTML = top_string;
                        else
                            input.innerHTML = "Select";
                        break;
                    }
                    case TYPE_SEARCH: {
                        let top_string = checkedCollection.map(item => item.innerHTML).join(', ');
                        if (top_string != "")
                            input.value = top_string;
                        else {
                            input.value = "";
                            let event_ = new Event("input");
                            document.querySelector('.selector_input').dispatchEvent(event_);
                        }
                        break;
                    }
                }
                if (type != TYPE_MULTI)
                    disapperDiv.classList.add('visibility_hidden');
            }

            function createButtons() {
                let div = document.createElement('div');
                div.className = 'selector_buttons';
                let ok = document.createElement('button');
                ok.innerHTML = "OK";
                ok.onclick = (event) => {
                    disapperDiv.classList.add('visibility_hidden');
                    if (filter == 'true')
                        inner_search.value = "";
                    alert('submit');
                    let event_ = new Event("input");
                    document.querySelector('.selector_input').dispatchEvent(event_);
                };

                let cancel = document.createElement('button');
                cancel.innerHTML = "Cancel";
                cancel.onclick = (event) => {
                    disapperDiv.classList.add('visibility_hidden');
                    optionsList.forEach(item => item.classList.remove('check'));
                    optionsList.forEach(item => item.classList.remove('visibility_hidden'));
                    fillInSelectedItems();

                    if (filter == 'true')
                        inner_search.value = "";
                };

                div.append(ok, cancel);
                return div;
            }

            if (type == TYPE_MULTI)
                disapperDiv.append(createButtons());
        }
    }
    // document.temaSelector = temaSelector;
    return temaSelector;
}())