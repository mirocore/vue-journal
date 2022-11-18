

export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name:'noentry',
            component: () => import(/* webpackChunkName;"noentry"  */ '@/modules/daybook/views/NoEntry.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName;"entry" */ '@/modules/daybook/views/Entryview.vue')
        }
    ]

}