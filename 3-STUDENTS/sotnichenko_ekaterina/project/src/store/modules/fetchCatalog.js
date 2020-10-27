import $axXios from '../../utils/axios'

export default {
    state: {
        itemsCatalog: [],
        urlCatalog: '/api/catalog'
    },
    actions: {
        fetchItemsCatalog(context) {
            $axXios.get(context.state.urlCatalog)
            .then(itemsCatalog => context.state.itemsCatalog = itemsCatalog)
            .catch(err => console.log(err))
        }
    },
    getters: {
        allItemsCatalog(state) {
            return state.itemsCatalog
        }
    }
}