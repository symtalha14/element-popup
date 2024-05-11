!(function () {
    class t {
        AD = 500;
        al_el = { popup: "el_popup", "snack-bar": "el_snack_bar", "cookie-bar": "el_cookie_bar", toast: "el_snack_bar toast_bar" };
        kf_st =
            "@-webkit-keyframes slideDown {0%{top:calc(pos_y - 200px);}100% {top:pos_y;}}@-webkit-keyframes slideUp {0%{top:calc(200px + pos_y);}100% {top:pos_y;}}@-webkit-keyframes slideUpToast {from {top: calc(200px + pos_y);}to {top: pos_y;}}@-webkit-keyframes slideDownToast {from {top: calc(pos_y - 200px);}to {top: pos_y;}}@-webkit-keyframes slideDownToastDisappear {from {top: pos_y;}to {top: calc(100% + 100px);}}@-webkit-keyframes slideUpToastDisappear {from {top: pos_y;}to {top: calc(pos_y - 100%);}}@-webkit-keyframes slideDownPopupDisappear {from {top: pos_y;}to {top: calc(100% + pos_y);}}@-webkit-keyframes slideUpPopupDisappear {from {top: pos_y;}to {top: -100%;}}@-webkit-keyframes slideDownSnackBarDisappear {from {transform: translate(0, 0);}to {transform: translate(0, 100px);}}@-webkit-keyframes slideUpSnackBarDisappear {from {margin-top: 0;}to {margin-top: -100%;}}@-webkit-keyframes scaleSnackBar {from {opacity: 0;transform: scale(0.75);}to {opacity: 1;transform:scale(1);}}@-webkit-keyframes scaleSnackBarDisappear {from {opacity: 0;transform: scale(1);}to {opacity: 1;transform: scale(0.75);}}@-webkit-keyframes scaleToastSnackBar {from {opacity: 0;transform: translate(-pos_x, -pos_y) scale(0.75);}to {opacity: 1;transform: translate(-pos_x, -pos_y) scale(1);}}@-webkit-keyframes scaleToastSnackBarDisappear {from {opacity: 1;transform: translate(-pos_x, -pos_y) scale(1);}to {opacity: 0;transform: translate(-pos_x, -pos_y) scale(0.75);display: none;}}@-webkit-keyframes slideUpCookieBar {    from {        top: calc(100px + 100%);    }    to {        top: pos_y;    }}@-webkit-keyframes slideDownCookieBar {    from {        top: calc(pos_y - 200px);    }    to {        top: 100%;    }}";
        a_en = { slide_up: "slideUp", slide_down: "slideDown", scale: "scalePopup" };
        a_ex = { slide_down: "slideDownPopupDisappear", slide_up: "slideUpPopupDisappear", scale: "scalePopupDisappear" };
        a_sp = { slow: "950ms", medium: "550ms", quick: "350ms", instant: "200ms" };
        sb_a_en = { slide_up: "slideUpSnackBar", slide_down: "slideDownSnackBar", scale: "scaleSnackBar" };
        sb_a_e = { slide_up: "slideUpSnackBarDisappear", slide_down: "slideDownSnackBarDisappear", scale: "scaleSnackBarDisappear" };
        t_a_en = { slide_up: "slideUpToast", slide_down: "slideDownToast", scale: "scaleToastSnackBar" };
        t_a_e = { slide_up: "slideUpToastDisappear", scale: "scaleToastSnackBarDisappear" };
        c_b_a_e = { slide_down: "slideDownCookieBarDisappear", slide_up: "slideDownCookieBarDisappear", scale: "scalePopupDisappear" };
        c_b_a_en = { scale: "scalePopup", slide_up: "slideUpCookieBar", slide_down: "slideDownCookieBar" };
        p_c = {
            CENTER: { top: "50%", left: "50%" },
            TOP_LEFT: { top: "5%", left: "5%" },
            TOP_RIGHT: { top: "5%", left: "97%" },
            BOTTOM_LEFT: { top: "97%", left: "5%" },
            BOTTOM_RIGHT: { top: "97%", left: "97%" },
            BOTTOM_CENTER: { top: "97%", left: "50%" },
            TOP_CENTER: { top: "5%", left: "50%" },
        };
        custom_placement = !1;
        custom_animation = !1;
        theme_selected = null;
        element = "popup";
        settings = {
            style: 1,
            rounded_btn: !1,
            rounded_container: !1,
            animation: { enter: "slide_up", exit: "slide_down", speed: "medium" },
            placement: "TOP_LEFT",
            callback_success: () => {
                console.log("Success confirmation");
            },
            callback_cancel: () => {
                console.log("Cancel confirmation");
            },
            callback_error: (t) => {
                console.log(t);
            },
            colors: {
                main_bg: "white",
                accent_color_primary: "#83ffb3",
                accent_color_secondary: "lightblue",
                accent_color_light: "rgb(139, 139, 139)",
                header_font_color: "#ffffff",
                content_color: "#3e3d3d",
                snackbar_content_color: "#ffe7e7",
                snackbar_content_bg: "#2d2929",
                toast_bg: "#2d2929",
                snackbar_highlight_content_bg: "green",
                snackbar_highlight_content_color: "#ffffff",
                button_accent_color: "#83ffb3",
                button_highlight_accent_color: "#c0c7ff",
            },
            snackbar_active: !1,
            icon: "fa-bell",
        };
        THEMES = {
            theme1: {
                colors: {
                    main_bg: "#ffffff",
                    accent_color_primary: "#83ffb3",
                    accent_color_secondary: "#366846",
                    accent_color_light: "rgb(139, 139, 139)",
                    header_font_color: "#07330e",
                    content_color: "#6c6c6c",
                    snackbar_content_color: "#ffe7e7",
                    snackbar_content_bg: "#3e3d3d",
                    button_accent_color: "#83ffb3",
                    toast_bg: "#2d2929",
                    button_highlight_accent_color: "#080808",
                    snackbar_highlight_content_bg: "#47d57e",
                    snackbar_highlight_content_color: "#080808",
                },
            },
            theme2: {
                colors: {
                    main_bg: "#ffffff",
                    accent_color_primary: "#7882d7",
                    accent_color_secondary: "#e2e2e2",
                    accent_color_light: "rgb(139, 139, 139)",
                    header_font_color: "#ffffff",
                    content_color: "#6c6c6c",
                    snackbar_content_color: "#ffe7e7",
                    snackbar_content_bg: "#3e3d3d",
                    toast_bg: "#2d2929",
                    button_accent_color: "#7882d7",
                    button_highlight_accent_color: "#c0c7ff",
                    snackbar_highlight_content_bg: "#261f6be0",
                    snackbar_highlight_content_color: "#ffffff",
                },
            },
        };
        content = { body_text: "", header_text: "", sb_expand_btn_text: "Show", primary_btn_text: "Yes", secondary_btn_text: "No" };
        static mw = null;
        w = null;
        h = null;
        cn = null;
        ct = null;
        b1 = null;
        b2 = null;
        constructor({ element: t, settings: e, content: s }) {
            return (
                t && (this.element = t),
                e &&
                    (e.placement && null != this.p_c[e.placement] && (this.custom_placement = !0),
                    e.animation && (e.animation.exit || e.animation.enter) && (this.custom_animation = !0),
                    (this.settings = { ...this.settings, ...e }),
                    e.theme &&
                        ((this.theme_selected = e.theme),
                        null != this.THEMES[this.theme_selected] && ((this.settings.colors = this.THEMES[this.theme_selected].colors), e.colors && (this.settings.colors = { ...this.settings.colors, ...e.colors })))),
                s && (this.content = { ...this.content, ...s }),
                new Promise(
                    "snack-bar" != t
                        ? (t, e) => {
                              try {
                                  this.createLayout(),
                                      this.b1.addEventListener("click", (e) => {
                                          e.preventDefault(), this.cl_po(), this.settings.callback_success(), t({ confirmed: !0 });
                                      }),
                                      this.b2.addEventListener("click", (e) => {
                                          e.preventDefault(), this.cl_po(), this.settings.callback_cancel(), t({ confirmed: !1 });
                                      });
                              } catch (t) {
                                  e({ error: t, message: "An error occurred while trying to render the layout. Make sure the element passed is mentioned in the list of allowed elements." });
                              }
                          }
                        : (t, e) => {
                              try {
                                  this.createLayout(),
                                      this.w.addEventListener("click", (e) => {
                                          e.target.classList.contains("el_snack_bar-action-btn") || (this.cl_po(), this.settings.callback_success(), t({ dismissed: !0 }));
                                      });
                              } catch (t) {
                                  e({ error: t, message: "An error occurred while trying to render the layout. Make sure the element passed is mentioned in the list of allowed elements." });
                              }
                          }
                )
            );
        }
        createLayout() {
            let e = this.al_el[this.element];
            if (e) {
                switch (((this.w = t.c_el(null, null, e, "div")), this.element)) {
                    case "":
                    case "popup":
                        this.custom_animation && this.a_en[this.settings.animation.enter] ? (this.w.style.animationName = this.a_en[this.settings.animation.enter]) : (this.w.style.animationName = this.a_en.slide_up);
                        break;
                    case "snack-bar":
                        this.custom_animation && this.sb_a_en[this.settings.animation.enter] ? (this.w.style.animationName = this.sb_a_en[this.settings.animation.enter]) : (this.w.style.animationName = this.sb_a_en.slide_up);
                        break;
                    case "toast":
                        this.custom_animation && this.t_a_en[this.settings.animation.enter] ? (this.w.style.animationName = this.t_a_en[this.settings.animation.enter]) : (this.w.style.animationName = this.t_a_en.slide_up);
                        break;
                    case "cookie-bar":
                        this.custom_animation && this.c_b_a_en[this.settings.animation.enter] ? (this.w.style.animationName = this.c_b_a_en[this.settings.animation.enter]) : (this.w.style.animationName = this.t_a_en.slide_up);
                }
                if ("el_snack_bar" != e) {
                    this.h = t.c_el(null, null, "el_popup-header", "div");
                    let e = t.c_el(this.content.header_text, null, null, "span");
                    this.h.appendChild(e),
                        this.h.appendChild(this.gcie()),
                        (this.ct = t.c_el(null, null, "el_popup-controls", "div")),
                        (this.b1 = t.c_el(this.content.primary_btn_text, null, "btn btn-primary__s1", "button")),
                        (this.b2 = t.c_el(this.content.secondary_btn_text, null, "btn btn-secondary__s1", "button")),
                        this.settings.rounded_btn && (this.b1.classList.add("btn-rounded"), this.b2.classList.add("btn-rounded")),
                        this.ct.appendChild(this.b1),
                        this.ct.appendChild(this.b2);
                }
                if (((this.cn = t.c_el(null, null, "el_popup-content", "div")), "el_snack_bar" == e)) {
                    var s = t.c_el(this.content.header_text, null, "snackbar_header", "span");
                    let n = t.c_el(this.content.body_text, null, "snackbar_content", "span");
                    if (this.settings.icon) {
                        let e = t.c_el(null, null, "fa snackbar-icon " + this.settings.icon, "i");
                        this.cn.appendChild(e), (this.cn.style.gridTemplateColumns = "5fr 88fr 7fr");
                    } else this.cn.style.gridTemplateColumns = "88fr 12fr";
                    let i = t.c_el(null, null, null, "p");
                    i.appendChild(s), i.appendChild(n), this.cn.appendChild(i), this.settings.snackbar_active && this.w.classList.add("sb_highlight");
                    let a = t.c_el(this.content.sb_expand_btn_text, null, e + "-action-btn", "span");
                    a.addEventListener("click", (t) => {
                        t.preventDefault(),
                            this.cn.classList.toggle("expand"),
                            t.target.innerText == this.content.sb_expand_btn_text.toUpperCase()
                                ? ((s.style.textAlign = "center"), (this.cn.children[1].style.maxHeight = "fit-content"), (t.target.innerText = "Hide"))
                                : ((s.style.textAlign = "left"), (this.cn.children[1].style.maxHeight = "50px"), (t.target.innerText = this.content.sb_expand_btn_text));
                    }),
                        this.cn.appendChild(a);
                } else if ("toast" == this.element) {
                    let e = t.c_el(null, null, null, "p"),
                        s = t.c_el(this.content.body_text, null, null, "span"),
                        n = t.c_el("&times;", null, "snackbar-toast-close", "i");
                    n.addEventListener("click", (t) => {
                        this.cl_po();
                    }),
                        this.cn.appendChild(n),
                        e.appendChild(s),
                        this.cn.appendChild(e);
                } else {
                    let e = t.c_el(this.content.body_text, null, null, "p");
                    this.cn.appendChild(e);
                }
                "el_snack_bar" != e && this.w.appendChild(this.h), this.w.appendChild(this.cn), "el_snack_bar" != e && this.ct && this.w.appendChild(this.ct);
            }
            if ("el_snack_bar" == e) {
                null != document.querySelector(".el-mwrapper") || ((t.mw = t.c_el(null, null, "el-mwrapper", "div")), t.a_to_p(t.mw)),
                    this.srvval("--snackbar-placement-y", this.p_c[this.settings.placement].top, !0),
                    this.srvval("--snackbar-placement-x", this.p_c[this.settings.placement].left, !0),
                    this.a_t_wr(this.w),
                    t.mw.scrollBy(0, -window.innerHeight);
            } else t.a_to_p(this.w);
            this.applySettings();
        }
        applySettings() {
            if (
                (this.settings.rounded_container && this.w.classList.add("popup-rounded"),
                "cookie-bar" != this.element &&
                    (this.srvval("--popup-placement-x", this.p_c[this.settings.placement].left),
                    this.srvval("--popup-placement-y", this.p_c[this.settings.placement].top),
                    this.srvval("--translate-x", "-" + this.p_c[this.settings.placement].left),
                    this.srvval("--translate-y", "-" + this.p_c[this.settings.placement].top),
                    this.srvval("--toast-placement-x", this.p_c[this.settings.placement].left),
                    this.srvval("--toast-placement-y", this.p_c[this.settings.placement].top),
                    this.srvval("--toast-translate-x", "-" + this.p_c[this.settings.placement].left),
                    this.srvval("--toast-translate-y", "-" + this.p_c[this.settings.placement].top),
                    this.custom_placement
                        ? (console.log("setting  custom placement"), this.srvval("--sb-translate-y", "-" + this.p_c[this.settings.placement].top, !0), this.srvval("--sb-translate-x", "-" + this.p_c[this.settings.placement].left, !0))
                        : (this.srvval("--sb-translate-y", "-" + this.p_c.BOTTOM_RIGHT.top),
                          this.srvval("--sb-translate-x", "-" + this.p_c.BOTTOM_RIGHT.left),
                          this.srvval("--snackbar-placement-y", this.p_c.BOTTOM_RIGHT.top),
                          this.srvval("--snackbar-placement-x", this.p_c.BOTTOM_RIGHT.left))),
                this.srvval("--main-bg", this.settings.colors.main_bg, !0),
                this.srvval("--popup-accent-color-primary", this.settings.colors.accent_color_primary, !0),
                this.srvval("--popup-accent-color-secondary", this.settings.colors.accent_color_secondary, !0),
                this.srvval("--popup-accent-color-light", this.settings.colors.accent_color_light, !0),
                this.srvval("--content-color", this.settings.colors.content_color, !0),
                this.srvval("--sb-content-color", this.settings.colors.snackbar_content_color, !0),
                this.srvval("--sb-content-bg", this.settings.colors.snackbar_content_bg, !0),
                this.srvval("--toast-bg", this.settings.colors.toast_bg, !0),
                this.srvval("--button-accent", this.settings.colors.button_accent_color, !0),
                this.srvval("--popup-header-font-color", this.settings.colors.header_font_color, !0),
                this.srvval("--sb-content-bg-highlight", this.settings.colors.snackbar_highlight_content_bg, !0),
                this.srvval("--sb-content-color-highlight", this.settings.colors.snackbar_highlight_content_color, !0),
                this.srvval("--button-accent-highlight", this.settings.colors.button_highlight_accent_color, !0),
                null != this.a_sp[this.settings.animation.speed] && this.srvval("--animation-duration", this.a_sp[this.settings.animation.speed], !0),
                !document.querySelector(["el_stylesheet"]))
            ) {
                var e = document.createElement("style");
                (e.type = "text/css"), e.setAttribute("el_stylesheet", "el_keyframes"), (e.innerHTML = this.kf_st.replace(/pos_y/g, this.p_c[this.settings.placement].top).replace(/pos_x/g, this.p_c[this.settings.placement].left));
            }
            t.a_to_p(e);
        }
        srvval(t, e, s = !1, n = !1) {
            s && document.documentElement.style.setProperty(t, e), "snack-bar" != this.element && this.w.style.setProperty(t, e), "snack-bar" != this.element || n || document.querySelector(".el-mwrapper").style.setProperty(t, e);
        }
        static c_el(t, e, s, n) {
            var i = null;
            switch (n) {
                case "div":
                case "span":
                case "i":
                case "p":
                case "link":
                case "button":
                    (i = document.createElement(n)), e && i.setAttribute("id", e), s && i.setAttribute("class", s), t && (i.innerHTML = t);
            }
            return i;
        }
        gcie() {
            let e = t.c_el("&times;", null, "snackbar-close", "i");
            return (
                (e.style.fontSize = "2em"),
                e.addEventListener("click", (t) => {
                    this.cl_po();
                }),
                e
            );
        }
        cl_po() {
            "popup" == this.element || "" == this.element
                ? (this.custom_animation && this.a_ex[this.settings.animation.exit] ? (this.w.style.animationName = this.a_ex[this.settings.animation.exit]) : (this.w.style.animationName = this.a_ex.scale),
                  (this.w.style.animationFillMode = "forwards"),
                  setTimeout(() => {
                      this.r_fr_p(this.w);
                  }, this.AD))
                : "cookie-bar" == this.element
                ? (this.custom_animation && this.c_b_a_e[this.settings.animation.exit] ? (this.w.style.animationName = this.c_b_a_e[this.settings.animation.exit]) : (this.w.style.animationName = this.c_b_a_e.slide_down),
                  (this.w.style.animationFillMode = "forwards"),
                  setTimeout(() => {
                      this.r_fr_p(this.w);
                  }, this.AD))
                : "toast" == this.element
                ? (this.custom_animation && this.t_a_e[this.settings.animation.exit] ? (this.w.style.animationName = this.t_a_e[this.settings.animation.exit]) : (this.w.style.animationName = this.t_a_e.slide_down),
                  (this.w.style.animationFillMode = "forwards"),
                  setTimeout(() => {
                      this.r_fr_p(this.w);
                  }, this.AD))
                : (this.custom_animation && this.sb_a_e[this.settings.animation.exit] ? (this.w.style.animationName = this.sb_a_e[this.settings.animation.exit]) : (this.w.style.animationName = this.sb_a_e.slide_down),
                  (this.w.style.animationFillMode = "forwards"),
                  setTimeout(() => {
                      this.r_f_wr(this.w);
                  }, this.AD));
        }
        r_fr_p(t) {
            document.querySelector("body").removeChild(t);
        }
        static a_to_p(t) {
            document.querySelector("body").appendChild(t);
        }
        a_t_wr(t) {
            document.querySelector(".el-mwrapper").appendChild(t);
        }
        r_f_wr(t) {
            document.querySelector(".el-mwrapper").removeChild(t);
        }
    }
    window.PopupElement = t;
})();
