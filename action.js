var main_bg;
var primary_accent_color;
var secondary_accent_color;
var header_font_color;
var content_font_color;
var toast_bg_color;
var snackbar_bg_color;
var snackbar_content_color;
var button_accent_color;
var light_accent_shade;

// var clipboard = new window.Clipboard();


window.onload = () => {

    var btnGroups = document.querySelectorAll(".btn-grp");

    Array.prototype.slice.call(btnGroups).forEach(btnGrp => {
        var btns = btnGrp.childNodes;
        btns.forEach(btn => {

            btn.addEventListener("click", (e) => {
                btns.forEach(b => { if (b.classList) (b.classList).remove("btn-primary") });
                e.target.classList.toggle("btn-primary");
                btnGrp.setAttribute("value", btn.getAttribute("value"));
            })
        })
    });






}

var scriptToCopy = ``;

var tryElementPopup = (element) => {

    var snackbar_anim = document.querySelector("#snackBar").getAttribute("value");
    var toast_bar_anim = document.querySelector("#toastBar").getAttribute("value");
    var popup_anim = document.querySelector("#popUp").getAttribute("value");
    var cookie_bar_anim = document.querySelector("#cookieBar").getAttribute("value");
    var animation = null;
    switch (element) {
        case "popup":
            animation = popup_anim;
            break;
        case "snack-bar":
            animation = snackbar_anim;
            break;
        case "toast":
            animation = toast_bar_anim;
            break;
        case "cookie-bar":
            animation = cookie_bar_anim;
            break;
        default:
            break;
    }

    console.log(snackbar_anim, toast_bar_anim, popup_anim, cookie_bar_anim);

    main_bg = document.querySelector("#main-bg-color").value;
    primary_accent_color = document.querySelector("#primary-accent-color").value;
    secondary_accent_color = document.querySelector("#secondary-accent-color").value;
    header_font_color = document.querySelector("#header-font-color").value;
    content_font_color = document.querySelector("#content-font-color").value;
    toast_bg_color = document.querySelector("#toast-bg-color").value;
    snackbar_bg_color = document.querySelector("#snackbar-bg-color").value;
    snackbar_content_color = document.querySelector("#snackbar-content-color").value;
    button_accent_color = document.querySelector("#snackbar-button-accent").value;
    light_accent_shade = document.querySelector("#light-shade-color").value;

    var rounded_corners = document.querySelector("#rounded-corners").checked;
    var placement = document.querySelector("#element-placement").value;
    var speed = document.querySelector("#animation-speed").value;

    scriptToCopy = `
    new PopupElement({
        element: '${element}', content: {
            "header_text": "Header Text",
            "body_text": "The body content goes here. Replace it with whatever text you want."
        }, settings: {
            colors: {
                "main_bg": '${main_bg}',
                "accent_color_primary": '${primary_accent_color}',
                "accent_color_secondary": '${secondary_accent_color}',
                "accent_color_light": '${light_accent_shade}',
                "header_font_color": '${header_font_color}',
                "content_color": '${content_font_color}',
                "snackbar_content_color": '${snackbar_content_color}',
                "snackbar_content_bg": '${snackbar_bg_color}',
                "button_accent_color": '${button_accent_color}',
                "toast_bg": '${toast_bg_color}'
            }, animation: { 
                enter: '${animation}', 
                exit: '${animation}', 
                speed:'${speed}' }, 
                rounded_container: ${rounded_corners}, 
                placement: '${placement}', 
                icon: "fa-check", 
                callback_success: () => { }}});`

    document.querySelector("#codeToCopy").style="background:transparent;";
    document.querySelector("#codeToCopy").innerHTML = scriptToCopy;

    new PopupElement({
        element: element, content: {
            "header_text": "Header Text",
            "body_text": "The body content goes here. Replace it with whatever text you want."
        }, settings: {
            colors: {
                "main_bg": main_bg,
                "accent_color_primary": primary_accent_color,
                "accent_color_secondary": secondary_accent_color,
                "accent_color_light": light_accent_shade,
                "header_font_color": header_font_color,
                "content_color": content_font_color,
                "snackbar_content_color": snackbar_content_color,
                "snackbar_content_bg": snackbar_bg_color,
                "button_accent_color": button_accent_color,
                "toast_bg": toast_bg_color
            }, animation: { enter: animation, exit: animation, speed: speed }, rounded_container: rounded_corners, placement: placement, icon: "fa-check", callback_success: () => { }
        }
    }).then(data => console.log(data)).catch(err => console.log(err));

    console.log(main_bg, primary_accent_color, secondary_accent_color, header_font_color, content_font_color, toast_bg_color, snackbar_bg_color, snackbar_content_color);
}



var copyCode = ()=>{
    document.querySelector("#codeToCopy").style="background:lightblue;";
    navigator.clipboard.writeText(scriptToCopy);
    
    new PopupElement({
        element: 'toast', content: {
            "header_text": "",
            "body_text": "Copied to Clipboard!"
        }, settings: {
            colors: {
                "main_bg": '#ffffff',
                "accent_color_primary": '#83ffb3',
                "accent_color_secondary": '#000000',
                "accent_color_light": '#000000',
                "header_font_color": '#ffffff',
                "content_color": '#3e3d3d',
                "snackbar_content_color": '#ffe7e7',
                "snackbar_content_bg": '#2d2929',
                "button_accent_color": '#83ffb3',
                "toast_bg": '#2d2929'
            }, animation: { enter: 'scale', exit: 'scale', speed:'instant' }, rounded_container: false, placement: 'BOTTOM_LEFT', icon: "fa-check", callback_success: () => { }}});
}