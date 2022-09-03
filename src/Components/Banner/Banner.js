import React from 'react';

const Banner = () => {
    return (
        <section>
            <div class="carousel w-full">
            <div id="item1" class="carousel-item w-full h-50">
                    <img src="https://wallpaperbat.com/img/451448-ice-fishing-wallpaper-2560x1600-035-mb.jpg" class="w-full" alt='' />
                </div>
        
                <div id="item2" class="carousel-item w-full h-50">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/71150135216017.56ee6dea0addc.jpg" class="w-full" alt='' />
                </div>
                <div id="item3" class="carousel-item w-full h-50">
                    <img src="http://ld-prestashop.template-help.com/prestashop_25936_tf/modules/jxmegalayout/extracontent/vLjXzfcNDu83Qphd.jpg" class="w-full" alt='' />
                </div>
                <div id="item4" class="carousel-item w-full h-50">
                    <img src="http://ld-prestashop.template-help.com/prestashop_25936_tf/modules/jxmegalayout/extracontent/QsEp4A9owEO9DDz3.jpg" class="w-full" alt='' />
                </div>
            </div>

            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </section>

    );
};

export default Banner;