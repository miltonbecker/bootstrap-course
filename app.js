'use strict';

let lorem = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';

$('p.lorem').text(lorem);

let toggleActiveAndButton = function (element) {
    $('.nav').find('li').removeClass('active');
    $('.nav').find('button').removeClass('active');

    if ($(element).attr('type') === 'button') {
        $(element).addClass('active');
    } else {
        let parent = $(element).parent();
        parent.addClass('active');
        parent.parent().closest('li').addClass('active');
    }

    if ($('.navbar-toggle').css('display') != 'none') {
        $('.navbar-toggle').click();
    }
};

$('.nav').find('li').on('click', 'a', function () {
    if ($(this).data('toggle') === 'dropdown') {
        return;
    }

    toggleActiveAndButton(this);

    $('.content-item').each(function (index, element) {
        if ($(element).hasClass('in')) {
            $(element).removeClass('in');
        }
    });
});

$('.nav').find('li').on('click', 'button', function () {
    toggleActiveAndButton(this);

    window.scrollTo(0, 0);

    $('.content-item').each(function (index, element) {
        if ($(element).hasClass('in') === false) {
            $(element).addClass('in');
        }
    });
});

$('#dropdown-code').text(`
    <div class="navbar navbar-default navbar-fixed-top transparent">
        <div class="container">
            <div class="navbar-header">
                <a href="index.html" class="navbar-brand">
                    Bootstrap <span class="class-name">Classes</span>
                </a>

                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <ul class="nav navbar-nav navbar-right collapse navbar-collapse">
                <li class="active">
                    <a href="#" data-toggle="dropdown">
                        Basics 
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="active">
                            <a href="#containers" data-toggle="collapse">Containers</a>
                        </li>
                        <li>
                            <a href="#grids" data-toggle="collapse">Grids</a>
                        </li>
                        <li>
                            <a href="#typography" data-toggle="collapse">Typography</a>
                        </li>
                        <li>
                            <a href="#buttons" data-toggle="collapse">Buttons, Wells and Panels</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" data-toggle="dropdown">
                        Advanced 
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#navigation" data-toggle="collapse">Navigation</a>
                        </li>
                        <li>
                            <a href="#behavior" data-toggle="collapse">Behavior and Collapse</a>
                        </li>
                        <li>
                            <a href="#dropdown" data-toggle="collapse">Dropdown</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#helper" data-toggle="collapse">Helper Classes</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <button type="button" class="btn btn-info navbar-btn">Show All</button>
                </li>
            </ul>
        </div>
    </div>`);