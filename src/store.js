import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false,
    // layout: 'grid',
    // filterBy: ''
});

export const mutations = {
    setIsNavOpen(yesno) {
        store.isNavOpen = yesno;
    },
    toggleNav() {
        store.isNavOpen = !store.isNavOpen;
    },
    // setLayout(layout) {
    //     store.layout = layout
    // },
    // setFilter(filterBy) {
    //     store.filterBy = filterBy
    // }
};