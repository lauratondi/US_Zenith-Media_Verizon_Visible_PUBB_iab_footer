"use strict";
var Premium = Premium || {};

Premium.creative = {
  init: function () {
    /* START OF CUSTOM JS */

    Premium.jpxApi.on("expand", doExpand);

    Premium.jpxApi.on("default", doCollapse);

    var split = new SplitText("#intro", {
      type: "chars,words",
      // wordsClass: "word++",
      charsClass: "word++",
      position: "absolute",
    });

    var colAni = new TimelineMax();
    colAni.set("#intro", { clearProps: "all" });
    colAni.from(
      split.words,
      {
        duration: 1.5,
        x: 200,
        opacity: 0,
        ease: "steps(1)",
        stagger: 0.1,
        //   delay: 0.1,
      },
      "-=.5"
    );

    var split2 = new SplitText("#p", {
      type: "chars,words",
      // wordsClass: "word++",
      charsClass: "word++",
      position: "absolute",
    });
    var expAni = new TimelineMax();
    expAni.set("#p", { clearProps: "all" });
    expAni.from(split2.words, {
      duration: 0.4,
      x: 200,
      opacity: 0,
      ease: "steps(1)",
      stagger: 0.1,
      //   delay: 0.1,
    });

    expAni.from("#psmall", 0.4, { opacity: 0, y: 25 }, "-=.2");

    function doCollapse() {
      gsap.to(["#contentExp", "#psmall"], { opacity: 0 });
      gsap.to("#content h2", { opacity: 1 });
      gsap.to("#image", { width: "17%", top: "7%" });
      gsap.to("#logo", { top: "36%" });
      gsap.to("#cta", { top: "21%" });
    }
    function doExpand() {
      gsap.to(["#contentExp", "#psmall"], { opacity: 1 });
      gsap.to("#content h2", { opacity: 0 });
      gsap.to("#image", { width: "32%", top: "9%" });
      gsap.to("#logo", { top: "70%" });
      gsap.to("#cta", { top: "54%" });
      expAni.restart();
    }

    window.addEventListener("load", function () {
      colAni.restart();
    });
    return;
    /* END OF CUSTOM JS */
  },
};
