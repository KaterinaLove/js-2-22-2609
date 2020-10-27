import { error } from 'jquery'
import $axXios from '../../utils/axios'

export default {
    state: {
        items: [],
        url: '/api/basket'
    },
    actions: {
        fetchItems(context) {
            $axXios.get(context.state.url)
                .then(items => context.state.items = items.content)
                .catch(err => console.log(err))
        }
    },
    getters: {
        allItems(state) {
            return state.items
        },
        sum(state) {
            return (state.items) ? state.items.reduce( (total, value) =>{
                return (total + value.amount * value.productPrice)
            }, 0) : '0'
        },
        add: state => product => {
            let find = state.items.find(el => el.productId == product.productId);
            if (!find) {
                let newItem = Object.assign({}, product, { amount: 1 });
                $axXios.post(`${state.url}`, newItem)
                .then(status => {
                    if(status) {
                        state.items.push(newItem);
                    }
                })
                .catch(e => {
                    console.log(e);
                })
            } else {
                $axXios.put(`${state.url}/${find.productId}`, 1)
                .then(status => {
                    if(status) {
                        find.amount++;
                    }
                })
                .catch(e => {
                    console.log(e);
                })
            };
        },
        remove: state => id => {
            let find = state.items.find(el => el.productId == id);
            if (find.amount > 1) {
                $axXios.put(`${state.url}/${id}`, -1)
                .then(status => {
                    if(status) {
                        find.amount--;
                    }
                })
                .catch(e => {
                    console.log(e);
                })
            } else {
                $axXios.delete(`${state.url}/${id}`)
                .then(status => {
                    if(status) {
                        state.items.splice(state.items.indexOf(find), 1);
                    }
                })
                .catch(e => {
                    console.log(e);
                })
            }
        }
    }
}