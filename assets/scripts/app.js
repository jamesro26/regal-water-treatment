! function (e) {
  function t(n) {
    if (i[n]) return i[n].exports;
    var a = i[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports
  }
  var i = {};
  t.m = e, t.c = i, t.d = function (e, i, n) {
    t.o(e, i) || Object.defineProperty(e, i, {
      configurable: !1,
      enumerable: !0,
      get: n
    })
  }, t.n = function (e) {
    var i = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(i, "a", i), i
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 0)
}([function (e, t) {
  function i() {
    var e = $(".map_container").width(),
      t = $(".map_container").height(),
      i = !1;
    i || (i = !0, window.setTimeout(function () {
      var n = $(".map_container").width(),
        o = $(".map_container").height();
      n === e && o === t && function (e, t) {
        var i = $("img"),
          n = i.width(),
          o = i.height(),
          r = 0,
          s = 0;
        n / e > o / t || n / e < o / t ? r = e : s = t, i.mapster("resize", r, s, a)
      }(n, o), i = !1
    }, o))
  }
  var n = {
    staticState: !1,
    showToolTip: !0,
    toolTipContainer: $("<div>", {
      class: "mapster_tooltip"
    }),
    mapKey: "name",
    fillOpacity: 1,
    fadeInterval: 100,
    render_highlight: {
      altImage: "./assets/images/alt_map.png"
    },
    areas: [{
      key: "sanitary",
      toolTip: "Administration & Maintenance"
    }, {
      key: "pump",
      toolTip: "Primary Effluent Pump/Lift Station"
    }, {
      key: "basin",
      toolTip: "Primary Settling Basins"
    }, {
      key: "digesters",
      toolTip: "Anaerobic Digesters"
    }, {
      key: "fermenters",
      toolTip: "Fermenters"
    }, {
      key: "clarifiers",
      toolTip: "Primary Clarifiers &amp; Aeration Tanks"
    }, {
      key: "bioreactors",
      toolTip: "Bioreactor"
    }, {
      key: "degritters",
      toolTip: "Cyclone Degritters"
    }, {
      key: "secondary_clarifiers",
      toolTip: "Secondary Clarifiers & Chlorine Tanks"
    }, {
      key: "belt_filter",
      toolTip: "Digesters & Belt Filter Presses"
    }]
  };
  $("#main_map").mapster(n), $("#pump_station").mapster({
    staticState: !1,
    fade: !0,
    fadeDuration: 350,
    render_highlight: {
      altImage: "./assets/images/alt_pump.png"
    }
  });
  var a = 0,
    o = 0,
    r = navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("Trident/7.0") > -1;
  $(window).bind("resize", i), window.toggleView = function (e) {
    $(e).hasClass("hide") ? ($(".mapster_tooltip").css("display", "none"), $(".map_area").fadeToggle(300, "linear", function () {
      $(e).toggleClass("hide")
    })) : ($(e).toggleClass("hide"), $(".map_area").fadeToggle(300, "linear")), removeBlur(), i()
  };
  var s = document.getElementsByTagName("video")[1],
    l = document.getElementsByTagName("video")[2],
    d = document.getElementsByTagName("video")[3];
  console.log(s, l, d), $("#cabinetModal").on("shown.bs.modal", function () {
    s.play(), s.addEventListener("ended", function () {
      $(".cabinet").addClass("hide"), $(".cabinet_inside").removeClass("hide")
    })
  }), $("#cabinetModal").on("hidden.bs.modal", function () {
    s.currentTime = 0, $(".cabinet").toggleClass("hide"), $(".cabinet_inside").toggleClass("hide")
  }), $("#generatorModal").on("shown.bs.modal", function () {
    d.play()
  }), $("#generatorModal").on("hidden.bs.modal", function () {
    d.currentTime = 0
  }), $("#fanModal").on("shown.bs.modal", function () {
    l.play()
  }), $("#fanModal").on("hidden.bs.modal", function () {
    l.currentTime = 0
  }), window.applyBlur = function () {
    r ? $('img[src$="_map.jpg"]').attr("src", "./assets/images/blurred_main_map.jpg") : $('img[src$="_map.jpg"]').css({
      filter: "blur(3px)",
      transition: "all 0.4s ease"
    })
  }, window.removeBlur = function (e) {
    r ? $('img[src$="_map.jpg"]').attr("src", "./assets/images/`${main_map}`.jpg") : $('img[src$="_map.jpg"]').css("filter", "")
  }, $(window).on("hidden.bs.modal", function (e) {
    window.scrollTo(0, 0)
  })
}]);
