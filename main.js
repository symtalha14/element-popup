(function () {
    class main {
        AD = 500;
        al_el = {
            "popup": "el_popup",
            "snack-bar": "el_snack_bar",
            "cookie-bar": "el_cookie_bar",
            "toast": "el_snack_bar toast_bar"
        }
        kf_st = `
@-webkit-keyframes slideDown {
0%{
top:calc(pos_y - 200px);
}
100% {
top:pos_y;
}
}
@-webkit-keyframes slideUp {
0%{
top:calc(200px + pos_y);
}
100% {
top:pos_y;
}
}
@-webkit-keyframes slideUpToast {
from {
top: calc(200px + pos_y);
}
to {
top: pos_y;
}
}
@-webkit-keyframes slideDownToast {
from {
top: calc(pos_y - 200px);
}
to {
top: pos_y;
}
}
@-webkit-keyframes slideDownToastDisappear {
from {
top: pos_y;
}
to {
top: calc(100% + 100px);
}
}
@-webkit-keyframes slideUpToastDisappear {
from {
top: pos_y;
}
to {
top: calc(pos_y - 100%);
}
}
@-webkit-keyframes slideDownPopupDisappear {
from {
top: pos_y;
}
to {
top: calc(100% + pos_y);
}
}
@-webkit-keyframes slideUpPopupDisappear {
from {
top: pos_y;
}
to {
top: -100%;
}
}
@-webkit-keyframes slideDownSnackBarDisappear {
from {
transform: translate(0, 0);
}
to {
transform: translate(0, 100px);
}
}
@-webkit-keyframes slideUpSnackBarDisappear {
from {
top: pos_y;
}
to {
top: -100%;
}
}
@-webkit-keyframes scaleSnackBar {
from {
opacity: 0;
transform: scale(0.75);
}
to {
opacity: 1;
transform:scale(1);
}
}
@-webkit-keyframes scaleSnackBarDisappear {
from {
opacity: 0;
transform: scale(1);
}
to {
opacity: 1;
transform: scale(0.75);
}
}
@-webkit-keyframes scaleToastSnackBar {
from {
opacity: 0;
transform: translate(-pos_x, -pos_y) scale(0.75);
}
to {
opacity: 1;
transform: translate(-pos_x, -pos_y) scale(1);
}
}
@-webkit-keyframes scaleToastSnackBarDisappear {
from {
opacity: 1;
transform: translate(-pos_x, -pos_y) scale(1);
}
to {
opacity: 0;
transform: translate(-pos_x, -pos_y) scale(0.75);
display: none;
}
}

@-webkit-keyframes slideUpCookieBar {
    from {
        top: calc(100% + pos_y);
    }

    to {
        top: pos_y;
    }
}
@-webkit-keyframes slideDownCookieBar {
    from {
        top: calc(100% - pos_y);
    }

    to {
        top: pos_y;
    }
}


`;
        a_en = {
            "slide_up": "slideUp",
            "slide_down": "slideDown",
            "scale": "scalePopup"
        }
        a_ex = {
            "slide_down": "slideDownPopupDisappear",
            "slide_up": "slideUpPopupDisappear",
            "scale": "scalePopupDisappear"
        }
        a_sp = {
            "slow": "950ms",
            "medium": "550ms",
            "quick": "350ms",
            "instant": "200ms"
        }
        sb_a_en = {
            "slide_up": "slideUpSnackBar",
            "slide_down": "slideDownSnackBar",
            "scale": "scaleSnackBar"
        }
        sb_a_e = {
            "slide_up": "slideUpSnackBarDisappear",
            "slide_down": "slideDownSnackBarDisappear",
            "scale": "scaleSnackBarDisappear"
        }
        t_a_en = {
            "slide_up": "slideUpToast",
            "slide_down": "slideDownToast",
            "scale": "scaleToastSnackBar"
        }
        t_a_e = {
            "slide_up": "slideUpToastDisappear",
            "scale": "scaleToastSnackBarDisappear"
        }
        c_b_a_e = {
            "slide_down": "slideDownCookieBarDisappear",
            "slide_up": "slideDownCookieBarDisappear",
            "scale": "scalePopupDisappear"
        }

        c_b_a_en = {
            "scale": "scaleC"
        }
        p_c = {
            "CENTER": {
                "top": "50%",
                "left": "50%"
            },
            "TOP_LEFT": {
                "top": "5%",
                "left": "5%"
            },
            "TOP_RIGHT": {
                "top": "5%",
                "left": "97%"
            },
            "BOTTOM_LEFT": {
                "top": "97%",
                "left": "5%"
            },
            "BOTTOM_RIGHT": {
                "top": "97%",
                "left": "97%"
            },
            "BOTTOM_CENTER": {
                "top": "97%",
                "left": "50%"
            },
            "TOP_CENTER": {
                "top": "5%",
                "left": "50%"
            }
        }
        custom_placement = false;
        custom_animation = false;
        theme_selected = null
        element = "popup"
        settings = {
            "style": 1,
            "rounded_btn": false,
            "rounded_container": false,
            "animation": {
                "enter": "slide_up",
                "exit": "slide_down",
                "speed": "medium"
            },
            "placement": "TOP_LEFT",
            "callback_success": () => {
                console.log("Success confirmation");
            },
            "callback_cancel": () => {
                console.log("Cancel confirmation");
            },
            "callback_error": (err) => {
                console.log(err);
            },
            "colors": {
                "main_bg": "white",
                "accent_color_primary": "#83ffb3",
                "accent_color_secondary": "lightblue",
                "accent_color_light": "rgb(139, 139, 139)",
                "header_font_color": "#ffffff",
                "content_color": "#3e3d3d",
                "snackbar_content_color": "#ffe7e7",
                "snackbar_content_bg": "#2d2929",
                "toast_bg": "#2d2929",
                "snackbar_highlight_content_bg": "green",
                "snackbar_highlight_content_color": "#ffffff",
                "button_accent_color": "#83ffb3",
                "button_highlight_accent_color": "#c0c7ff"
            },
            "snackbar_active": false,
            "icon": "fa-bell"
        }
        THEMES = {
            "theme1": {
                "colors": {
                    "main_bg": "#ffffff",
                    "accent_color_primary": "#83ffb3",
                    "accent_color_secondary": "#366846",
                    "accent_color_light": "rgb(139, 139, 139)",
                    "header_font_color": "#07330e",
                    "content_color": "#6c6c6c",
                    "snackbar_content_color": "#ffe7e7",
                    "snackbar_content_bg": "#3e3d3d",
                    "button_accent_color": "#83ffb3",
                    "toast_bg": "#2d2929",
                    "button_highlight_accent_color": "#080808",
                    "snackbar_highlight_content_bg": "#47d57e",
                    "snackbar_highlight_content_color": "#080808"
                }
            },
            "theme2": {
                "colors": {
                    "main_bg": "#ffffff",
                    "accent_color_primary": "#7882d7",
                    "accent_color_secondary": "#e2e2e2",
                    "accent_color_light": "rgb(139, 139, 139)",
                    "header_font_color": "#ffffff",
                    "content_color": "#6c6c6c",
                    "snackbar_content_color": "#ffe7e7",
                    "snackbar_content_bg": "#3e3d3d",
                    "toast_bg": "#2d2929",
                    "button_accent_color": "#7882d7",
                    "button_highlight_accent_color": "#c0c7ff",
                    "snackbar_highlight_content_bg": "#261f6be0",
                    "snackbar_highlight_content_color": "#ffffff"
                }
            }
        }
        content = {
            "body_text": "",
            "header_text": "",
            "sb_expand_btn_text": "Show",
            "primary_btn_text": "Yes",
            "secondary_btn_text": "No"
        }
        static mw = null;
        w = null;
        h = null;
        cn = null;
        ct = null;
        b1 = null;
        b2 = null;
        constructor({ element, settings, content }) {
            if (element) {
                this.element = element;
            }
            if (settings) {
                if (settings.placement && this.p_c[settings.placement] != undefined) {
                    this.custom_placement = true;
                }
                if (settings.animation && (settings.animation.exit || settings.animation.enter)) this.custom_animation = true;
                this.settings = { ...this.settings, ...settings };
                if (settings.theme) {
                    this.theme_selected = settings.theme;
                    if (this.THEMES[this.theme_selected] != undefined) {
                        this.settings.colors = this.THEMES[this.theme_selected].colors;
                        if (settings.colors) {
                            this.settings.colors = { ...this.settings.colors, ...settings.colors };
                        }
                    }
                }
            }
            if (content) {
                this.content = { ...this.content, ...content };
            }
            if (element != "snack-bar") {
                return new Promise((resolve, reject) => {
                    try {
                        this.createLayout();
                        this.b1.addEventListener("click", (e) => {
                            e.preventDefault();
                            this.cl_po();
                            this.settings.callback_success();
                            resolve({ "confirmed": true });
                        });
                        this.b2.addEventListener("click", (e) => {
                            e.preventDefault();
                            this.cl_po();
                            this.settings.callback_cancel();
                            resolve({ "confirmed": false });
                        });
                    } catch (err) {
                        reject({ "error": err, "message": "An error occurred while trying to render the layout. Make sure the element passed is mentioned in the list of allowed elements." });
                    }
                })
            } else {
                return new Promise((resolve, reject) => {
                    try {
                        this.createLayout();
                        this.w.addEventListener("click", (e) => {
                            if (!e.target.classList.contains("el_snack_bar-action-btn")) {
                                this.cl_po();
                                this.settings.callback_success();
                                resolve({ "dismissed": true });
                            }
                        });
                    } catch (err) {
                        reject({ "error": err, "message": "An error occurred while trying to render the layout. Make sure the element passed is mentioned in the list of allowed elements." });
                    }
                });
            }
        }
        // TODO: SET DEFAULT ENTER AND EXIT ANIMATIONS
        createLayout() {
            let w_c = this.al_el[this.element];
            if (w_c) {
                this.w = main.c_el(null, null, w_c, "div");
                switch (this.element) {
                    case "":
                    case "popup":
                        if (this.custom_animation && this.a_en[this.settings.animation.enter]) {
                            this.w.style.animationName = this.a_en[this.settings.animation.enter];
                        } else {
                            this.w.style.animationName = this.a_en["slide_up"];
                        }
                        break;
                    case "snack-bar":
                        if (this.custom_animation && this.sb_a_en[this.settings.animation.enter]) {
                            this.w.style.animationName = this.sb_a_en[this.settings.animation.enter];
                        } else {
                            this.w.style.animationName = this.sb_a_en["slide_up"];
                        }
                        break;
                    case "toast":
                        if (this.custom_animation && this.t_a_en[this.settings.animation.enter]) {
                            // console.log(this.settings.animation);
                            this.w.style.animationName = this.t_a_en[this.settings.animation.enter];
                        } else {
                            this.w.style.animationName = this.t_a_en["slide_up"];
                        }
                        break;
                    case "cookie-bar":
                        if (this.custom_animation && this.t_a_en[this.settings.animation.enter]) {
                            // console.log(this.settings.animation);
                            this.w.style.animationName = this.t_a_en[this.settings.animation.enter];
                        } else {
                            this.w.style.animationName = this.t_a_en["slide_up"];
                        }
                        break;
                    default:
                        break;
                }
                if (w_c != "el_snack_bar") {
                    this.h = main.c_el(null, null, "el_popup-header", "div");
                    let sp = main.c_el(this.content.header_text, null, null, "span");
                    this.h.appendChild(sp);
                    this.h.appendChild(this.gcie());
                    this.ct = main.c_el(null, null, "el_popup-controls", "div");
                    this.b1 = main.c_el(this.content.primary_btn_text, null, "btn btn-primary__s1", "button");
                    this.b2 = main.c_el(this.content.secondary_btn_text, null, "btn btn-secondary__s1", "button");
                    if (this.settings.rounded_btn) {
                        this.b1.classList.add("btn-rounded");
                        this.b2.classList.add("btn-rounded");
                    }
                    this.ct.appendChild(this.b1);
                    this.ct.appendChild(this.b2);
                }
                this.cn = main.c_el(null, null, "el_popup-content", "div");
                if (w_c == "el_snack_bar") {
                    var h_p = main.c_el(this.content.header_text, null, "snackbar_header", "span");
                    let span = main.c_el(this.content.body_text, null, null, "span");
                    if (this.settings.icon) {
                        let icon = main.c_el(null, null, "fa snackbar-icon " + this.settings.icon, "i");
                        this.cn.appendChild(icon);
                        this.cn.style.gridTemplateColumns = "5fr 88fr 7fr";
                    } else {
                        this.cn.style.gridTemplateColumns = "88fr 12fr";
                    }
                    let p = main.c_el(null, null, null, "p");
                    p.appendChild(h_p);
                    p.appendChild(span);
                    this.cn.appendChild(p);
                    if (this.settings.snackbar_active) {
                        this.w.classList.add("sb_highlight");
                    }
                    let action_btn = main.c_el(this.content.sb_expand_btn_text, null, w_c + "-action-btn", "span");
                    action_btn.addEventListener("click", (e) => {
                        // expand snackbar
                        e.preventDefault();
                        this.cn.classList.toggle("expand");
                        if (e.target.innerText == this.content.sb_expand_btn_text.toUpperCase()) {
                            h_p.style.textAlign = "center";
                            this.cn.children[0].style.maxHeight = "fit-content";
                            e.target.innerText = "Hide";
                        } else {
                            h_p.style.textAlign = "left";
                            this.cn.children[0].style.maxHeight = "50px";
                            e.target.innerText = this.content.sb_expand_btn_text;
                        }
                    })
                    this.cn.appendChild(action_btn);
                }
                else if (this.element == "toast") {
                    let p = main.c_el(null, null, null, "p");
                    let span = main.c_el(this.content.body_text, null, null, "span");
                    let icon = main.c_el("&times;", null, "snackbar-toast-close", "i");
                    icon.addEventListener("click", (e) => {
                        this.cl_po();
                    })
                    this.cn.appendChild(icon);
                    p.appendChild(span);
                    this.cn.appendChild(p);
                }
                else {
                    let p = main.c_el(this.content.body_text, null, null, "p");
                    this.cn.appendChild(p);
                }
                if (w_c != "el_snack_bar") this.w.appendChild(this.h);
                this.w.appendChild(this.cn);
                if (w_c != "el_snack_bar" && this.ct) this.w.appendChild(this.ct);
            }
            if (w_c == "el_snack_bar") {
                let mw_exists = document.querySelector(".el-mwrapper") != null;
                if (!mw_exists) {
                    main.mw = main.c_el(null, null, "el-mwrapper", "div");
                    main.a_to_p(main.mw);
                }
                this.srvval("--snackbar-placement-y", this.p_c[this.settings.placement].top, true);
                this.srvval("--snackbar-placement-x", this.p_c[this.settings.placement].left, true);
                this.a_t_wr(this.w);
                main.mw.scrollBy(0, -window.innerHeight);
            } else {
                main.a_to_p(this.w);
            }
            this.applySettings();
        }
        applySettings() {
            if (this.settings.rounded_container) {
                this.w.classList.add("popup-rounded");
            }
            if (this.element != "cookie-bar") {
                this.srvval("--popup-placement-x", this.p_c[this.settings.placement].left);
                this.srvval("--popup-placement-y", this.p_c[this.settings.placement].top);
                this.srvval("--translate-x", "-" + this.p_c[this.settings.placement].left);
                this.srvval("--translate-y", "-" + this.p_c[this.settings.placement].top);
                this.srvval("--toast-placement-x", this.p_c[this.settings.placement].left);
                this.srvval("--toast-placement-y", this.p_c[this.settings.placement].top);
                this.srvval("--toast-translate-x", "-" + this.p_c[this.settings.placement].left);
                this.srvval("--toast-translate-y", "-" + this.p_c[this.settings.placement].top);
                if (this.custom_placement) {
                    console.log("setting  custom placement");
                    this.srvval("--sb-translate-y", "-" + this.p_c[this.settings.placement].top, true);
                    this.srvval("--sb-translate-x", "-" + this.p_c[this.settings.placement].left, true);
                } else {
                    // default snackbar container placement
                    this.srvval("--sb-translate-y", "-" + this.p_c["BOTTOM_RIGHT"].top);
                    this.srvval("--sb-translate-x", "-" + this.p_c["BOTTOM_RIGHT"].left);
                    this.srvval("--snackbar-placement-y", this.p_c["BOTTOM_RIGHT"].top);
                    this.srvval("--snackbar-placement-x", this.p_c["BOTTOM_RIGHT"].left);
                }
            }
            this.srvval("--main-bg", this.settings.colors.main_bg, true);
            this.srvval("--popup-accent-color-primary", this.settings.colors.accent_color_primary, true);
            this.srvval("--popup-accent-color-secondary", this.settings.colors.accent_color_secondary, true);
            this.srvval("--popup-accent-color-light", this.settings.colors.accent_color_light, true);
            this.srvval("--content-color", this.settings.colors.content_color, true);
            this.srvval("--sb-content-color", this.settings.colors.snackbar_content_color, true);
            this.srvval("--sb-content-bg", this.settings.colors.snackbar_content_bg, true);
            this.srvval("--toast-bg", this.settings.colors.toast_bg, true);
            this.srvval("--button-accent", this.settings.colors.button_accent_color, true);
            this.srvval("--popup-header-font-color", this.settings.colors.header_font_color, true);
            this.srvval("--sb-content-bg-highlight", this.settings.colors.snackbar_highlight_content_bg, true);
            this.srvval("--sb-content-color-highlight", this.settings.colors.snackbar_highlight_content_color, true);
            this.srvval("--button-accent-highlight", this.settings.colors.button_highlight_accent_color, true);
            if (this.a_sp[this.settings.animation.speed] != undefined) {
                this.srvval("--animation-duration", this.a_sp[this.settings.animation.speed], true);
            }
            // append keyframes
            if (!document.querySelector(["el_stylesheet"])) {
                var style = document.createElement('style');
                style.type = "text/css";
                style.setAttribute("el_stylesheet", "el_keyframes");
                style.innerHTML = this.kf_st.replace(/pos_y/g, this.p_c[this.settings.placement].top).replace(/pos_x/g, this.p_c[this.settings.placement].left);
            }
            main.a_to_p(style);
        }
        srvval(varname, val, doc = false, sb = false) {
            if (doc) {
                document.documentElement.style.setProperty(varname, val);
                // return;
            }
            if (this.element != "snack-bar") {
                this.w.style.setProperty(varname, val);
            }
            if (this.element == "snack-bar" && !sb) {
                // this.w.style.setProperty(varname, val);
                document.querySelector(".el-mwrapper").style.setProperty(varname, val);
            }
        }
        static c_el(html, id_, class_, type) {
            var node = null;
            switch (type) {
                case "div":
                case "span":
                case "i":
                case "p":
                case "link":
                case "button":
                    node = document.createElement(type);
                    if (id_) node.setAttribute("id", id_);
                    if (class_) node.setAttribute("class", class_);
                    if (html) node.innerHTML = html;
                    break;
                default:
                    break;
            }
            return node;
        }
        gcie() {
            let cie = main.c_el("&times;", null, "icon close", "i");
            cie.style.fontSize = "2em";
            cie.style.fontWeight = "bold";
            cie.addEventListener("click", (e) => {
                this.cl_po();
            });
            return cie;
        }
        cl_po() {
            if (this.element == "popup" || this.element == "") {
                if (this.custom_animation && this.a_ex[this.settings.animation.exit]) { this.w.style.animationName = this.a_ex[this.settings.animation.exit]; }
                else { this.w.style.animationName = this.a_ex["scale"] }
                this.w.style.animationFillMode = "forwards";
                setTimeout(() => {
                    this.r_fr_p(this.w);
                }, this.AD);
            }
            else if (this.element == "cookie-bar") {
                if (this.custom_animation && this.c_b_a_e[this.settings.animation.exit]) { this.w.style.animationName = this.c_b_a_e[this.settings.animation.exit]; }
                else { this.w.style.animationName = this.c_b_a_e["slide_down"] }
                this.w.style.animationFillMode = "forwards";
                setTimeout(() => {
                    this.r_fr_p(this.w);
                }, this.AD);
            } else if (this.element == "toast") {
                if (this.custom_animation && this.t_a_e[this.settings.animation.exit]) { this.w.style.animationName = this.t_a_e[this.settings.animation.exit]; }
                else { this.w.style.animationName = this.t_a_e["slide_down"] }
                this.w.style.animationFillMode = "forwards";
                setTimeout(() => {
                    this.r_fr_p(this.w);
                }, this.AD);
            }
            else {
                // console.log("setting animation for::", this.w);
                if (this.custom_animation && this.sb_a_e[this.settings.animation.exit]) { this.w.style.animationName = this.sb_a_e[this.settings.animation.exit]; }
                else { this.w.style.animationName = this.sb_a_e["slide_down"]; }
                this.w.style.animationFillMode = "forwards";
                setTimeout(() => {
                    this.r_f_wr(this.w);
                }, this.AD);
            }
        }
        r_fr_p(node) {
            document.querySelector("body").removeChild(node);
        }
        static a_to_p(node) {
            document.querySelector("body").appendChild(node);
        }
        a_t_wr(node) {
            document.querySelector(".el-mwrapper").appendChild(node);
        }
        r_f_wr(node) {
            document.querySelector(".el-mwrapper").removeChild(node);
        }
        static a_m_ss() {
            let linkTag = main.c_el(null, null, null, "link");
            linkTag.rel = "stylesheet";
            linkTag.href = "./main.css";
            document.querySelector("head").appendChild(linkTag);
        }
    }
    main.a_m_ss();
    window.PopupElement = main;
})();