/*
 <section class="categories">
        <div class="container">
            <div class="row">
                <div class="categories__slider owl-carousel">
                    <div class="col-lg-3">
                        <div class="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                            <h5><a href="#">Fresh Fruit</a></h5>
                        </div>
                    </div>
*/
window.onload = function () {
    let xhr = new XMLHttpRequest;
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            CategoryArray = JSON.parse(this.responseText);


            var _categories = document.querySelector('.categories');
            var _container = document.createElement('div');
            var _row = document.createElement('div');
            var _categories__slider = document.createElement('div');


            _container.classList.add('container');
            _row.classList.add('row');
            _categories__slider.classList.add('categories__slider');
            _categories__slider.classList.add('owl-carousel');

            CategoryArray.forEach((item) => {
                var _col_lg_3 = document.createElement('div');
                var _categories__item = document.createElement('div');
                var _h5 = document.createElement('h5');
                var _h5a = document.createElement('a');

                _col_lg_3.classList.add('col-lg-3');
                _categories__item.classList.add('categories__item');
                _categories__item.classList.add('set-bg');
                _categories__item.setAttribute('data-setbg', item.image);
                _h5a.innerText = item.title;

                _h5.appendChild(_h5a);
                _categories__item.appendChild(_h5);
                _col_lg_3.appendChild(_categories__item);
                _categories__slider.appendChild(_col_lg_3);

                _row.appendChild(_categories__slider);
                _container.appendChild(_row);
                _categories.appendChild(_container);

            });
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', `url(${bg})`);
            });
            $('.owl-carousel').owlCarousel({
                center: true,
                items: 3,
                loop: true,
                margin: 5,
                nav: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            });
            $(".owl-carousel").owlCarousel();





            /*
 <div class="owl-nav">
        <button type="button" role="presentation" class="owl-prev">
            <span class="fa fa-angle-left">
                <span>
                </span>
            </span>
        </button>
        <button type="button" role="presentation" class="owl-next">
            <span class="fa fa-angle-right">
                <span>
                </span>
            </span>
        </button>
    </div>
           */


        } else {
            msg.textContent = '發生錯誤，HTTP response代碼：' + xhr.status;
        }
        // document.getElementById("msg").innerHTML=this.responseText;
    }
    xhr.open("GET", "https://hechien-schedule.azurewebsites.net/ogani/js/categories.json");
    xhr.send();
}