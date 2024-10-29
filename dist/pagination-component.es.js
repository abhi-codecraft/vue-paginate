import { computed as p, openBlock as c, createElementBlock as g, createElementVNode as t, normalizeClass as m, withModifiers as d, Fragment as f, renderList as h, toDisplayString as k } from "vue";
const x = { class: "row view-pager" }, y = { class: "col-sm-12" }, M = { class: "text-center" }, _ = { class: "dataTables_paginate paging_simple_numbers" }, w = { class: "pagination pagination-sm" }, C = ["onClick"], q = {
  __name: "Pagination",
  props: {
    totalItems: {
      type: Number,
      required: !0
    },
    itemsPerPage: {
      type: Number,
      required: !0
    },
    currentPage: {
      type: Number,
      required: !0
    },
    visiblePages: {
      type: Number,
      default: 5
      // Default visible page numbers
    }
  },
  emits: ["page-changed"],
  setup(n, { emit: v }) {
    const a = n, P = v, r = p(() => Math.ceil(a.totalItems / a.itemsPerPage)), b = p(() => {
      const s = [], e = Math.floor(a.visiblePages / 2);
      let i = Math.max(1, a.currentPage - e), l = Math.min(r.value, a.currentPage + e);
      l - i + 1 < a.visiblePages && (a.currentPage <= e ? l = Math.min(r.value, a.visiblePages) : a.currentPage + e >= r.value && (i = Math.max(1, r.value - a.visiblePages + 1)));
      for (let u = i; u <= l; u++)
        s.push(u);
      return s;
    }), o = (s) => {
      s < 1 || s > r.value || P("page-changed", s);
    };
    return (s, e) => (c(), g("div", x, [
      t("div", y, [
        t("div", M, [
          t("div", _, [
            t("ul", w, [
              t("li", {
                class: m(["paginate_button page-item previous", { disabled: n.currentPage === 1 }])
              }, [
                t("a", {
                  href: "#",
                  onClick: e[0] || (e[0] = d((i) => o(n.currentPage - 1), ["prevent"])),
                  class: "page-link prev"
                }, e[2] || (e[2] = [
                  t("i", { class: "simple-icon-arrow-left" }, null, -1)
                ]))
              ], 2),
              (c(!0), g(f, null, h(b.value, (i) => (c(), g("li", {
                key: i,
                class: m(["paginate_button page-item", { active: i === n.currentPage }])
              }, [
                t("a", {
                  href: "#",
                  onClick: d((l) => o(i), ["prevent"]),
                  class: "page-link"
                }, k(i), 9, C)
              ], 2))), 128)),
              t("li", {
                class: m(["paginate_button page-item next", { disabled: n.currentPage === r.value }])
              }, [
                t("a", {
                  href: "#",
                  onClick: e[1] || (e[1] = d((i) => o(n.currentPage + 1), ["prevent"])),
                  class: "page-link next"
                }, e[3] || (e[3] = [
                  t("i", { class: "simple-icon-arrow-right" }, null, -1)
                ]))
              ], 2)
            ])
          ])
        ])
      ])
    ]));
  }
};
export {
  q as default
};
