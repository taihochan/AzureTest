window.onload = function() {
    var _categories__slider = document.querySelector('.categories__slider');
    let xhr = new XMLHttpRequest;
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            CategoryArray = JSON.parse(this.responseText);

            CategoryArray.forEach((item) => {

                let _name = item.title;
                let _img = item.image;

                var _col_lg_3 = document.createElement('div');
                _col_lg_3.classList.add('col-lg-3');

                var _categories__item = document.createElement('div');
                _categories__item.classList.add('categories__item', 'set-bg');
                _categories__item.setAttribute('data-setbg', `${_img}`);
                _categories__item.style.width = "292.5px";
                _categories__item.style.height = "270px";

                var _h5 = document.createElement('h5');
                var _h5a = document.createElement('a');
                _h5a.setAttribute('href', '123');
                _h5a.innerText = _name;

                _h5.appendChild(_h5a);
                _categories__item.appendChild(_h5);
                _col_lg_3.appendChild(_categories__item);
                _categories__slider.appendChild(_col_lg_3);

            });

        } else {
            msg.textContent = '發生錯誤，HTTP response代碼：' + xhr.status;
        }
        // document.getElementById("msg").innerHTML=this.responseText;
    }
    xhr.open("GET", "http://127.0.0.1:5500/ogani/js/categories.json");
    xhr.send();
}